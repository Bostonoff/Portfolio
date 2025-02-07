import Link from "next/link";

const Download = ({ icon }) => {
  return (
    <Link
      href="/Resume-BM.pdf" // Указываем путь без /public/
      download // Указываем атрибут для скачивания
      target="_blank" // Открывает файл в новой вкладке
      rel="noopener noreferrer" // Безопасность
      className="flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4"
    >
      <span className="text-Snow">Download Resume</span>
      <span>{icon}</span>
    </Link>
  );
};

export default Download;