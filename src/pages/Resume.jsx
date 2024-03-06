export default function ResumeLink() {
  const resumeFilePath = "/assets/resume.md";

  return (
    <div>
      <a href={resumeFilePath} download>
        Download
      </a>
    </div>
  );
}
