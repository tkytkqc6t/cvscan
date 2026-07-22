import React from 'react';
import './JobDescriptionSection.css';

function JobDescriptionSection({ jobDescription, setJobDescription, jdAnalysis, handleAnalyzeJD, loading }) {
  return (
    <div className="section">
      <h2 className="section-title">Job Description Analysis</h2>
      
      <div className="textarea-container">
        <textarea
          placeholder="Paste the Job Description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="button-group">
        <button className="btn-primary" onClick={handleAnalyzeJD} disabled={loading}>
          {loading ? (
            <span>
              <span className="spinner"></span> Analyzing...
            </span>
          ) : (
            '🔍 Analyze JD'
          )}
        </button>
      </div>

      {jdAnalysis && (
        <div className="analysis-section">
          <h3 className="analysis-title">Required Skills & Experience</h3>
          
          {jdAnalysis.requiredSkills && jdAnalysis.requiredSkills.length > 0 && (
            <div>
              <h4 style={{ color: '#666', marginTop: '15px' }}>Required Skills:</h4>
              <div className="skills-list">
                {jdAnalysis.requiredSkills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {jdAnalysis.requiredExperience && jdAnalysis.requiredExperience.length > 0 && (
            <div>
              <h4 style={{ color: '#666', marginTop: '15px' }}>Experience Requirements:</h4>
              <div className="results-container">
                {jdAnalysis.requiredExperience.map((exp, index) => (
                  <div key={index} className="result-item">
                    {exp}
                  </div>
                ))}
              </div>
            </div>
          )}

          {jdAnalysis.rawAnalysis && (
            <div>
              <h4 style={{ color: '#666', marginTop: '15px' }}>Key Technologies:</h4>
              <div className="skills-list">
                {jdAnalysis.rawAnalysis.technologies.map((tech, index) => (
                  <span key={index} className="skill-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default JobDescriptionSection;
