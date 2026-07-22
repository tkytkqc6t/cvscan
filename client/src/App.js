import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import JobDescriptionSection from './components/JobDescriptionSection';
import ResumeSection from './components/ResumeSection';

function App() {
  const [jobDescription, setJobDescription] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [fileName, setFileName] = useState('');
  const [jdAnalysis, setJdAnalysis] = useState(null);
  const [matchAnalysis, setMatchAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyzeJD = async () => {
    if (!jobDescription.trim()) {
      setError('Please enter a job description');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await axios.post('/api/analyze-jd', {
        jobDescription: jobDescription
      });
      setJdAnalysis(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Error analyzing job description');
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyzeMatch = async () => {
    if (!resumeText.trim() || !jobDescription.trim()) {
      setError('Please upload a resume and enter a job description');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await axios.post('/api/analyze-match', {
        resumeText: resumeText,
        jobDescription: jobDescription
      });
      setMatchAnalysis(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Error analyzing match');
    } finally {
      setLoading(false);
    }
  };

  const handleClearAll = () => {
    setJobDescription('');
    setResumeText('');
    setFileName('');
    setJdAnalysis(null);
    setMatchAnalysis(null);
    setError('');
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>📄 CVScan</h1>
        <p>Intelligent Resume Validation & Scoring Platform</p>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="main-container">
        <JobDescriptionSection
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
          jdAnalysis={jdAnalysis}
          handleAnalyzeJD={handleAnalyzeJD}
          loading={loading}
        />

        <ResumeSection
          resumeText={resumeText}
          setResumeText={setResumeText}
          fileName={fileName}
          setFileName={setFileName}
          matchAnalysis={matchAnalysis}
          handleAnalyzeMatch={handleAnalyzeMatch}
          loading={loading}
        />
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button className="btn-secondary" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
