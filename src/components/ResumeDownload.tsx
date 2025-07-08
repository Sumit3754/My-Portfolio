

const ResumeDownload = () => {
  const handleDownload = () => {
    // Replace with your actual resume URL
    const resumeUrl = '/resume/sumit-chauhan-resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      Download Resume
    </button>
  );
};

export default ResumeDownload;
