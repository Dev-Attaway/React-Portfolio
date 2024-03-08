import React from "react"; // Make sure to import React at the top if you're using JSX

// Define the ResumeLink component
export default function ResumeLink() {
  // Define the path to your resume file
  const resumeFilePath = "/attawayFullStackResume.pdf";

  // Render the ResumeLink component
  return (
    <div>
      <section className="container p-3 vh-100 d-flex flex-start flex-column flex-wrap">
        <h4>Front End</h4>
        <ul>
          <li>Programming Languages: JavaScript</li>
          <li>Web Technologies: HTML, CSS, Bootstrap</li>
          <li>Frameworks: Node.js</li>
          <li>Version Control: Git</li>
          <li>Database: MongoDB</li>
          <li>IDEs/Tools: Visual Studio Code, Git/GitHub</li>
          <li>
            Soft Skills: Problem-solving, Collaboration, Attention to detail
          </li>
        </ul>
        <h4>Back End</h4>
        <ul>
          <li>API Development</li>
          <li>Authentication and Authorization</li>
          <li>Testing and Debugging</li>
          <li>Performance Optimization</li>
          <li>Security Best Practices</li>
        </ul>
        <a href={resumeFilePath} download>
          Click this link to download my resume
        </a>
      </section>
    </div>
  );
}
