import Link from "next/link";

const Download = ({ icon }) => {
  return (
    <>
      <Link
        href="/path-to-your-resume.doc" // Put the actual path to your document
        target="_blank" // Open in a new tab
        download // Trigger the download instead of opening the file
        className="flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4"
      >
        <span className="text-Snow">Download Resume</span>
        <span>{icon}</span>
      </Link>
    </>
  );
};

export default Download;