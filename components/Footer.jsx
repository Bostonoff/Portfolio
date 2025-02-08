import { AiFillCopyrightCircle } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import SvgIcon from "./Common/Intro/SvgIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="mt-4 mb-10 lg:mb-0">
      <div className="flex h-10 items-center justify-between text-xs font-normal text-LightGray py-4 px-2 md:px-4 w-full bg-MidNightBlack">
        <div className="flex items-center">
          <div className="mr-1 text-base">
            <AiFillCopyrightCircle />
          </div>
          <span>{currentYear} All Rights Reserved.</span>{" "}
          {/* Display current year */}
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/Bostonoff"
            target="_blank"
            rel="noreferrer"
            className="flex item-center gap-[5px]"
          >
            Made with ❤️ by{" "}
            <span className="font-bold flex items-center gap-[5px]">
              Bustonov{" "}
              <span className="text-[18px]">
                <SvgIcon />
              </span>
            </span>
          </a>
        </div>
        <div className="block md:flex items-center">
          <div className="mr-1 text-base">
            <MdMail />
          </div>
          <div>muhammadboston1101@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
