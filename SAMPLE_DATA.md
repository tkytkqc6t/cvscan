# CVScan - Sample Test Data

## Sample Job Description

```
Senior Full Stack Developer - Remote

Company: TechCorp Solutions

Job Overview:
We are looking for an experienced Full Stack Developer to join our growing team. You will work on building scalable web applications using modern technologies.

Requirements:
- 5+ years of professional development experience
- Strong proficiency in JavaScript and Python
- Expert-level knowledge of React.js and Node.js
- Experience with cloud platforms (AWS preferred)
- Docker and Kubernetes container orchestration
- Relational and NoSQL databases (SQL, MongoDB)
- Version control with Git
- CI/CD pipeline experience (Jenkins, GitLab CI)
- RESTful API design and implementation
- Microservices architecture
- Agile/Scrum development methodology

Nice to Have:
- GraphQL experience
- Machine Learning basics
- TypeScript
- Docker Compose
- AWS Lambda and serverless
- Redis caching

Responsibilities:
- Develop responsive web applications
- Design and implement APIs
- Optimize database performance
- Collaborate with frontend and backend teams
- Implement security best practices
- Participate in code reviews
- Mentor junior developers
- Contribute to technical documentation

Location: Remote (US Based)
Salary: $120,000 - $180,000 per year
```

## Sample Resume

```
JOHN DEVELOPER
Email: john@example.com | Phone: (555) 123-4567 | LinkedIn: linkedin.com/in/johndeveloper

PROFESSIONAL SUMMARY
Full Stack Developer with 6 years of experience in designing and implementing scalable web applications. Proven track record of delivering high-quality software solutions using JavaScript, Python, and modern cloud technologies.

TECHNICAL SKILLS
Languages: JavaScript (Expert), Python (Advanced), HTML5, CSS3, SQL, TypeScript
Frontend: React.js (6 years), Redux, Material-UI, Bootstrap, responsive design
Backend: Node.js (6 years), Express.js, Django, Flask
Databases: MongoDB (4 years), PostgreSQL (4 years), MySQL
Cloud & DevOps: AWS (EC2, S3, Lambda), Docker (3 years), Kubernetes (2 years), Jenkins CI/CD
Tools & Platforms: Git, GitHub, GitLab, Jira, VS Code, Postman, REST APIs, GraphQL basics
Methodologies: Agile, Scrum, Test-Driven Development

PROFESSIONAL EXPERIENCE

Senior Developer | TechInnovate Inc. | Jan 2021 - Present (2+ years)
- Led development of microservices architecture serving 100K+ daily users
- Architected and deployed Docker containers and Kubernetes orchestration
- Implemented CI/CD pipelines using Jenkins reducing deployment time by 70%
- Mentored 3 junior developers on best practices and code quality
- Worked extensively with AWS services (EC2, S3, Lambda, RDS)
- Achieved 95% test coverage using Jest and pytest
- Optimized database queries improving application performance by 40%

Full Stack Developer | WebSolutions LLC | Jun 2018 - Dec 2020 (2.5+ years)
- Developed 15+ full-stack applications using React.js and Node.js
- Designed RESTful APIs handling millions of requests monthly
- Implemented MongoDB and PostgreSQL database solutions
- Created responsive user interfaces with React and Material-UI
- Implemented Git-based workflows and code reviews
- Collaborated with product teams in Agile/Scrum environment
- Reduced API response time by 50% through optimization

Junior Developer | StartupWeb | Jan 2018 - May 2018 (5 months)
- Developed JavaScript/React components for web applications
- Learned Python and Django framework basics
- Participated in daily Scrum meetings and sprint planning
- Fixed bugs and implemented features from issue tracking system

EDUCATION
Bachelor of Science in Computer Science | University of Technology | 2018
GPA: 3.7/4.0
Relevant Coursework: Data Structures, Algorithms, Web Development, Databases

CERTIFICATIONS & COURSES
- AWS Certified Solutions Architect (2022)
- Docker & Kubernetes Fundamentals (Udemy, 2021)
- Advanced React.js Patterns (Frontend Masters, 2020)
- Full Stack JavaScript Bootcamp (2018)

PROJECTS & ACHIEVEMENTS
1. E-Commerce Platform
   - Built full-stack e-commerce platform using React, Node.js, MongoDB
   - Implemented payment gateway integration with Stripe
   - Deployed on AWS using Docker and Kubernetes
   - Result: Platform handles 10K+ daily transactions

2. Analytics Dashboard
   - Created real-time analytics dashboard with React and WebSockets
   - Backend using Node.js and PostgreSQL
   - Deployment with CI/CD using Jenkins
   - Result: Reduced data processing time from minutes to seconds

3. Microservices Migration
   - Led migration from monolithic to microservices architecture
   - Containerized services using Docker and orchestrated with Kubernetes
   - Result: Improved system scalability and reduced operational costs

ADDITIONAL INFORMATION
- Languages: English (Native), Spanish (Conversational)
- Open Source Contributions: React component library (GitHub: github.com/johndeveloper)
- Technical Blog: techblog.example.com (Regular contributor)
- Spoken Presentations: Cloud Development Conference 2022
```

## How to Test

### Step 1: Copy Job Description
1. Copy the Sample Job Description above
2. Open http://localhost:3000
3. Paste in the left panel
4. Click "🔍 Analyze JD"

**Expected Results:**
- Skills Found: javascript, python, react, nodejs, aws, docker, kubernetes, git, sql, mongodb, agile, scrum, etc.
- Experience: 5+ years
- Technologies: AWS, Docker, Kubernetes, Jenkins, GitLab

### Step 2: Create Sample Resume File
1. Copy the Sample Resume above
2. Create a new file in Word or paste in Google Docs
3. Export as PDF or save as DOCX
4. Save as "sample-resume.pdf" or "sample-resume.docx"

### Step 3: Upload & Analyze
1. Upload the resume file (right panel)
2. Click "🧠 Compare & Rate"

**Expected Results:**
- Matching Score: ~85-90% (High Match)
- Matched Skills: javascript, python, react, nodejs, aws, docker, kubernetes, sql, mongodb, git, agile
- Missing Skills: GraphQL, Kubernetes (advanced), Machine Learning
- Duplicate Sentences: 0-2 (depends on exact wording)

---

## Expected Analysis Output

### Matching Score Breakdown
```
Total Required Skills: 18
Matched Skills: 15
Missing Skills: 3
Match Percentage: 83%

Matched Skills:
✓ javascript
✓ python
✓ react
✓ nodejs
✓ aws
✓ docker
✓ kubernetes
✓ git
✓ sql
✓ mongodb
✓ agile
✓ scrum
✓ rest
✓ graphql (basics mentioned in resume)
✓ typescript

Missing Skills:
✗ serverless (advanced)
✗ machine learning
✗ advanced kubernetes

Duplicate Content: None found
Highlights: React mentioned 8 times, Docker 5 times, AWS 4 times
```

---

## Tips for Testing

1. **High Match Scenario**: The sample data is designed to match well (85-90%)
2. **Test Different JD**: Try pasting different job descriptions
3. **Create Your Own Resume**: Upload your actual resume for realistic testing
4. **Experiment with Skills**: Add/remove skills to see how score changes
5. **Test Edge Cases**: Try minimal resumes or very specific job descriptions

---

## Troubleshooting Test Scenarios

### Issue: Low Match Score with Sample Data
- Ensure you're using the complete sample data
- Check that you uploaded the correct resume file
- Verify the resume was extracted correctly in the terminal

### Issue: Skills Not Being Extracted
- Make sure the skill name appears in the text
- Partial words might not match (e.g., "JavaScript" not "JS")
- Spelling must match exactly

### Issue: File Won't Upload
- Ensure backend server is running on port 5000
- File must be PDF or DOCX format
- File size must be under 10MB
- Try a different file format

---

## Next Steps

Once you've tested with sample data:
1. Try uploading your own resume
2. Add your own job descriptions
3. Customize the skills list in `server/server.js`
4. Modify the matching algorithm for your needs
5. Deploy to production

---

*Happy Testing! 🚀*
