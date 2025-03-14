import Link from "next/link";
import {
  FaDownload,
  // FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaTelegram,
  // FaTwitter,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Contact from "./Contact";
import Download from "./Download";
import Languages from "./Languages";
import Location from "./Location";
import Tools from "./Tools";
import Skills from "./Skills";
import Image from "next/image";
import { NAME, DESIGNATION, SOCIAL_LINKS } from "../../../constants/constants";
// import sas from "../../../public/images/sas.jpg";
import maga from "../../../public/images/maga.jpg";
import SvgIcon from "./SvgIcon";
// import { BsLinkedin } from "react-icons/bs";

const Intro = () => {
  return (
    <>
      {/* fixed at top */}
      <div className="headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-48 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4">
        <Image
          className="w-20 h-20 rounded-full object-cover"
          src={maga}
          alt="profile picture"
        />

        <div className="flex flex-col items-center justify-center">
          <span className="text-gray-300 text-base font-bold break-normal flex items-center gap-[5px]">
            {NAME} <SvgIcon />
          </span>
          <span className="text-sm text-LightGray text-center mt-2">
            {DESIGNATION}
          </span>
        </div>
      </div>

      {/* middle components */}
      <div className="beech z-20 flex flex-col overflow-y-scroll pt-48 top-48 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4">
        <Location />
        <Languages />
        <Skills />
        <Tools />
        <Contact />
        <Download icon={<FaDownload />} />
      </div>

      {/* fixed at bottom */}
      <div className="footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow">
        <Link
          href={SOCIAL_LINKS.GITHUB}
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <FaGithub />
        </Link>

        <Link
          href={SOCIAL_LINKS.GMAIL}
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <HiMail />
        </Link>
        <Link
          href={SOCIAL_LINKS.TELEGRAM}
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <FaTelegram />
        </Link>
        <Link
          href={SOCIAL_LINKS.LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <FaLinkedinIn />
        </Link>
      </div>
    </>
  );
};

export default Intro;
