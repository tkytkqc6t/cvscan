from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.units import inch

# Create PDF
pdf_file = r"c:\Users\thinh\Downloads\CVScan\sample_resume.pdf"
doc = SimpleDocTemplate(pdf_file, pagesize=letter)
styles = getSampleStyleSheet()
story = []

# Define styles
title_style = ParagraphStyle(
    'CustomTitle',
    parent=styles['Heading1'],
    fontSize=18,
    textColor=colors.HexColor('#1f1f1f'),
    spaceAfter=6,
    alignment=1  # Center alignment
)

heading_style = ParagraphStyle(
    'CustomHeading',
    parent=styles['Heading2'],
    fontSize=12,
    textColor=colors.HexColor('#000000'),
    spaceAfter=4,
    spaceBefore=8,
)

normal_style = ParagraphStyle(
    'CustomNormal',
    parent=styles['Normal'],
    fontSize=10,
    spaceAfter=2,
)

# Add title and contact info
story.append(Paragraph("JOHN DEVELOPER", title_style))
story.append(Paragraph("Email: john@example.com | Phone: (555) 123-4567 | LinkedIn: linkedin.com/in/johndeveloper", normal_style))
story.append(Spacer(1, 0.2*inch))

# Professional Summary
story.append(Paragraph("PROFESSIONAL SUMMARY", heading_style))
story.append(Paragraph(
    "Full Stack Developer with 6 years of experience in designing and implementing scalable web applications. "
    "Proven track record of delivering high-quality software solutions using JavaScript, Python, and modern cloud technologies.",
    normal_style
))
story.append(Spacer(1, 0.15*inch))

# Technical Skills
story.append(Paragraph("TECHNICAL SKILLS", heading_style))
skills_text = """
<b>Languages:</b> JavaScript (Expert), Python (Advanced), HTML5, CSS3, SQL, TypeScript<br/>
<b>Frontend:</b> React.js (6 years), Redux, Material-UI, Bootstrap, responsive design<br/>
<b>Backend:</b> Node.js (6 years), Express.js, Django, Flask<br/>
<b>Databases:</b> MongoDB (4 years), PostgreSQL (4 years), MySQL<br/>
<b>Cloud & DevOps:</b> AWS (EC2, S3, Lambda), Docker (3 years), Kubernetes (2 years), Jenkins CI/CD<br/>
<b>Tools & Platforms:</b> Git, GitHub, GitLab, Jira, VS Code, Postman, REST APIs, GraphQL basics<br/>
<b>Methodologies:</b> Agile, Scrum, Test-Driven Development
"""
story.append(Paragraph(skills_text, normal_style))
story.append(Spacer(1, 0.15*inch))

# Professional Experience
story.append(Paragraph("PROFESSIONAL EXPERIENCE", heading_style))

story.append(Paragraph("<b>Senior Developer | TechInnovate Inc. | Jan 2021 - Present (2+ years)</b>", normal_style))
exp1 = """
- Led development of microservices architecture serving 100K+ daily users<br/>
- Architected and deployed Docker containers and Kubernetes orchestration<br/>
- Implemented CI/CD pipelines using Jenkins reducing deployment time by 70%<br/>
- Mentored 3 junior developers on best practices and code quality<br/>
- Worked extensively with AWS services (EC2, S3, Lambda, RDS)<br/>
- Achieved 95% test coverage using Jest and pytest<br/>
- Optimized database queries improving application performance by 40%
"""
story.append(Paragraph(exp1, normal_style))
story.append(Spacer(1, 0.1*inch))

story.append(Paragraph("<b>Full Stack Developer | WebSolutions LLC | Jun 2018 - Dec 2020 (2.5+ years)</b>", normal_style))
exp2 = """
- Developed 15+ full-stack applications using React.js and Node.js<br/>
- Designed RESTful APIs handling millions of requests monthly<br/>
- Implemented MongoDB and PostgreSQL database solutions<br/>
- Created responsive user interfaces with React and Material-UI<br/>
- Implemented Git-based workflows and code reviews<br/>
- Collaborated with product teams in Agile/Scrum environment<br/>
- Reduced API response time by 50% through optimization
"""
story.append(Paragraph(exp2, normal_style))
story.append(Spacer(1, 0.1*inch))

story.append(Paragraph("<b>Junior Developer | StartupWeb | Jan 2018 - May 2018 (5 months)</b>", normal_style))
exp3 = """
- Developed JavaScript/React components for web applications<br/>
- Learned Python and Django framework basics<br/>
- Participated in daily Scrum meetings and sprint planning<br/>
- Fixed bugs and implemented features from issue tracking system
"""
story.append(Paragraph(exp3, normal_style))
story.append(Spacer(1, 0.15*inch))

# Education
story.append(Paragraph("EDUCATION", heading_style))
story.append(Paragraph("<b>Bachelor of Science in Computer Science | University of Technology | 2018</b>", normal_style))
story.append(Paragraph("GPA: 3.7/4.0", normal_style))
story.append(Spacer(1, 0.1*inch))

# Certifications
story.append(Paragraph("CERTIFICATIONS & COURSES", heading_style))
certs = """
- AWS Certified Solutions Architect (2022)<br/>
- Docker & Kubernetes Fundamentals (Udemy, 2021)<br/>
- Advanced React.js Patterns (Frontend Masters, 2020)
"""
story.append(Paragraph(certs, normal_style))

# Build PDF
doc.build(story)
print(f"PDF created: {pdf_file}")
