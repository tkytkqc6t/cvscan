import React, { useRef } from 'react';
import axios from 'axios';
import './ResumeSection.css';

function ResumeSection({ resumeText, setResumeText, fileName, setFileName, matchAnalysis, handleAnalyzeMatch, loading }) {
  const fileInputRef = useRef(null);

  const handleFileUpload = async (file) => {
    if (!file) return;

    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a PDF or DOCX file');
      return;
    }

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const response = await axios.post('/api/extract-resume', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setResumeText(response.data.text);
      setFileName(response.data.fileName);
    } catch (error) {
      alert('Error uploading file: ' + error.message);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const getScoreColor = (percentage) => {
    if (percentage >= 75) return 'high';
    if (percentage >= 50) return 'medium';
    return 'low';
  };

  return (
    <div className="resume-section-container">
      <div className="section section-upper">
        <h2 className="section-title">📤 Upload Resume</h2>

        <div
          className="upload-area"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="upload-icon">📎</div>
          <p>
            Drag and drop your resume here or <strong>click to browse</strong>
          </p>
          <p style={{ fontSize: '12px', color: '#999' }}>Supported formats: PDF, DOCX</p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.docx"
            onChange={(e) => handleFileUpload(e.target.files?.[0])}
          />
        </div>

        {fileName && (
          <div className="file-info success">
            ✓ {fileName} loaded successfully
          </div>
        )}
      </div>

      <div className="section section-lower">
        <h2 className="section-title">🎯 Analysis Results</h2>

        {resumeText && (
          <div className="button-group">
            <button className="btn-primary" onClick={handleAnalyzeMatch} disabled={loading}>
              {loading ? (
                <span>
                  <span className="spinner"></span> Analyzing...
                </span>
              ) : (
                '🧠 Compare & Rate'
              )}
            </button>
          </div>
        )}

        {matchAnalysis && (
          <div className="analysis-section">
            <div className="match-score">
              <div className={`score-circle ${getScoreColor(matchAnalysis.matchPercentage)}`}>
                {matchAnalysis.matchPercentage}%
              </div>
              <div className="score-details">
                <p>
                  <strong>Match Score:</strong> {matchAnalysis.matchPercentage}%
                </p>
                <p>
                  <strong>Matched Skills:</strong> {matchAnalysis.matchedSkills.length}
                </p>
                <p>
                  <strong>Missing Skills:</strong> {matchAnalysis.missingSkills.length}
                </p>
                <p>
                  <strong>Duplicate Sentences Removed:</strong> {matchAnalysis.resumeValidation.duplicateSentencesRemoved}
                </p>
              </div>
            </div>

            <h4 style={{ color: '#333', marginTop: '20px' }}>✓ Matched Skills:</h4>
            <div className="skills-list">
              {matchAnalysis.matchedSkills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>

            {matchAnalysis.missingSkills.length > 0 && (
              <div>
                <h4 style={{ color: '#333', marginTop: '20px' }}>✗ Missing Skills:</h4>
                <div className="skills-list">
                  {matchAnalysis.missingSkills.map((skill, index) => (
                    <span key={index} className="skill-badge missing">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {matchAnalysis.resumeValidation.highlights && matchAnalysis.resumeValidation.highlights.length > 0 && (
              <div className="highlight-list">
                <h4>🌟 Key Highlights:</h4>
                {matchAnalysis.resumeValidation.highlights.map((highlight, index) => (
                  <div key={index} className="result-item">
                    <strong>{highlight.skill}</strong> - mentioned {highlight.count} time(s)
                  </div>
                ))}
              </div>
            )}

            {matchAnalysis.resumeValidation.duplicateSentencesRemoved > 0 && (
              <div className="success-message" style={{ marginTop: '15px' }}>
                ✓ {matchAnalysis.resumeValidation.duplicateSentencesRemoved} duplicate sentence(s) identified and could be removed
              </div>
            )}
          </div>
        )}

        {!matchAnalysis && !loading && resumeText && (
          <p style={{ color: '#999', textAlign: 'center', marginTop: '20px' }}>
            Click "Compare & Rate" to analyze the resume against the job description
          </p>
        )}
      </div>
    </div>
  );
}

export default ResumeSection;
