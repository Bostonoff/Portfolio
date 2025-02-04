import { useState } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import { FaGithub, FaLinkedinIn, FaTelegram, } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { HiMail, HiUser } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";
import Fiverr_Icon from "../components/Fiverr_Icon";
import Footer from "../components/Footer";
import { Modal } from "antd";
// import { ImLinkedin2 } from "react-icons/im";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSendMessage = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setIsOpen(true);
      setErrorMessage("Please fill out all fields!");
    } else {
      const mailtoLink = `mailto:muhammadboston1101@gmail.com?subject=Message from ${name}&body=${message}%0A%0DContact Email: ${email}`;
      window.location.href = mailtoLink;

      setIsOpen(true);
      setErrorMessage("Your message has been sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <BannerLayout>
      <div className=" px-4 py-2">
        <div className="my-6 text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Country:</span>
                <span className="text-LightGray md:text-sm">Italy</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">City:</span>
                <span className="text-LightGray md:text-sm">Naples</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Current Title:</span>
                <span className="text-LightGray md:text-sm"> Student at  Apple Developer Academy @Unina Federico II </span>
              </div>
              {/* <div className="flex justify-between items-center">
                <span className="md:text-base">Company:</span>
                <span className="text-LightGray md:text-sm">Freelancer</span>
              </div> */}
            </div>
            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Email:</span>
                <span className="text-LightGray text-sm">
                  <a href="mailto:muhammadboston1101@gmail.com">
                    muhammadboston1101@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Telegram:</span>
                <span className="text-LightGray text-sm">
                  <a
                    className="text-LightGray text-sm"
                    href="https://t.me/melloalp"
                    target="_blank"
                    rel="noreferrer">
                    @melloalp
                  </a>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Phones:</span>
                <span className="text-LightGray text-sm">
                <a href="tel:+393509900997">+39 350 9900997</a> | <a href="tel:+998946022090">+998(94) 602-20-90</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
        <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://www.linkedin.com/in/mukhammad-bustonov/"
            target="_blank"
            rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="mailto:muhammadboston1101@gmail.com"
            target="_blank"
            rel="noreferrer">
            <HiMail />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://github.com/Bostonoff"
            target="_blank"
            rel="noreferrer">
            <FaGithub />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://t.me/melloalp"
            target="_blank"
            rel="noreferrer">
            <FaTelegram />
          </a>

          <a
            className="hover:scale-125 ease-in-out duration-700 hidden sm:block"
            href="https://www.fiverr.com"
            target="_blank"
            rel="noreferrer">
            <Fiverr_Icon />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1"
            href="https://www.upwork.com"
            target="_blank"
            rel="noreferrer">
            <SiUpwork />
          </a>
        </div>

        <div className="my-12 w-full h-auto text-Snow">
          <h1 className="text-lg font-bold">Get In Touch</h1>
          <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
            <div>
              <form onSubmit={handleSendMessage}>
                <div className="flex flex-col w-full">
                  <div className="userIcon relative mb-6">
                    <div
                      id="icon"
                      className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                      <HiUser />
                    </div>
                    <input
                      type="text"
                      className="input_stylings"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <div className="mailIcon relative mb-6">
                    <div
                      id="icon"
                      className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                      <HiMail />
                    </div>
                    <input
                      type="text"
                      className="input_stylings"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <div className="textIcon relative mb-6">
                    <div
                      id="icon"
                      className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                      <BsChatTextFill />
                    </div>
                    <textarea
                      rows={6}
                      cols={50}
                      className="input_stylings"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>

                <div className="my-4">
                  <button type="submit" className="button">
                    {" "}
                    SEND MESSAGE{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* success modal */}
      <Modal
        className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
        centered
        open={isOpen}
        footer={null}
        closable={false}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-Green font-bold text-2xl mb-2">
            {errorMessage.includes("successfully") ? "Success" : "Error"}
          </h1>
          <p className="text-Snow">{errorMessage}</p>
          <a
            className="underline text-Snow"
            target="_blank"
            href="https://github.com/Bostonoff" rel="noreferrer">
            Be the one to integrate this!
          </a>
        </div>
      </Modal>
      <Footer />
    </BannerLayout>
  );
};

export default Contact;
