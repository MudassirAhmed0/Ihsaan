import Image from "next/image";
import logo from "../../../assets/images/logo/logo.svg";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { BsChevronDown, BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className={`bg-[#0F2E3C] pt-[97px]`}>
        <div className="">
          <div className="myContainer">
            <h1 className="fpr text-[85px] text-[#fff] leading-[85px] max-w-[800px] mx-auto text-center">
              Get started with Ihsan Coaching today
            </h1>
            <p className="fgr text-[24px] text-[#fff] pt-[62px] pb-[77px] max-w-[1090px] mx-auto text-center">
              Let’s take the first step towards better health and well-being,
              together. Get in touch to learn more about coaches or services, or
              to set up an initial session that fits your schedule.
            </p>
            <div className="flex justify-center items-center gap-x-[20px]">
              <a>
                <button className="fgr w-[332px] h-[79px] border-[3px] border-[#fff] flex justify-between items-center bg-[#fff] text-[24px] text-[#555555] rounded-[50px] px-[30px] py-[10px] hover:border-[#FAF7F2] hover:bg-[#0F2E3C] hover:text-[#fff] group">
                  Get started
                  <BsFillArrowRightCircleFill
                     className="text-[#555] text-[30px] group-hover:text-[#fff]"
                  />
                </button>
              </a>
              <a>
                <button className="fgr w-[332px] h-[79px] border-[3px] border-[#FAF7F2] flex justify-between items-center bg-[#0F2E3C] text-[24px] text-[#fff] rounded-[50px] px-[30px] py-[10px] hover:text-[#555555] hover:bg-[#fff] group">
                  Meet the team
                  <BsFillArrowRightCircleFill
                  className="text-[#fff] text-[30px] group-hover:text-[#555]"
                  />
                </button>
              </a>
            </div>
          </div>
          <div className="myContainer px-[10px] pt-[110px] pb-[100px] flex justify-between">
            <div className="">
              <h6 className="fpr text-[#fff] text-[42px] capitalize">
                Services
              </h6>
              <ul>
                <li className="fgr text-[#fff] text-[24px] py-[2px] hover:opacity-[.8] cursor-pointer">
                  Individual Coaching
                </li>
                <li className="fgr text-[#fff] text-[24px] py-[2px] hover:opacity-[.8] cursor-pointer">
                  Premarital Coaching
                </li>
                <li className="fgr text-[#fff] text-[24px] py-[2px] hover:opacity-[.8] cursor-pointer">
                  Marital Coaching
                </li>
                <li className="fgr text-[#fff] text-[24px] py-[2px] hover:opacity-[.8] cursor-pointer">
                  Religious Coaching
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className="fpr text-[#fff] text-[42px] capitalize">About</h6>
              <ul>
                <li className="fgr text-[#fff] text-[24px] py-[2px] hover:opacity-[.8] cursor-pointer">Home</li>
                <li className="fgr text-[#fff] text-[24px] py-[2px] hover:opacity-[.8] cursor-pointer">About Us</li>
                <li className="fgr text-[#fff] text-[24px] py-[2px] hover:opacity-[.8] cursor-pointer">Team</li>
                <li className="fgr text-[#fff] text-[24px] py-[2px] hover:opacity-[.8] cursor-pointer">Careers</li>
                <li className="fgr text-[#fff] text-[24px] py-[2px] hover:opacity-[.8] cursor-pointer">Programs</li>
                <li className="fgr text-[#fff] text-[24px] py-[2px] hover:opacity-[.8] cursor-pointer">Contact</li>
              </ul>
            </div>
            <div className="">
              <h6 className="fpr text-[#fff] text-[42px] capitalize">
                Contact
              </h6>
              <ul>
                <li className="fgr text-[#fff] text-[24px] py-[2px] hover:opacity-[.8] cursor-pointer">
                  info@ihsancoaching.ca{" "}
                </li>
                <li className="fgr text-[#fff] text-[24px] py-[2px] hover:opacity-[.8] cursor-pointer">1-630-557-9427</li>
                <li className="fgr text-[#fff] text-[24px] py-[2px] flex gap-x-[5px] pt-[6px]">
                  <FiInstagram className="hover:opacity-[.8] cursor-pointer" />
                  <FaFacebook className="hover:opacity-[.8] cursor-pointer" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="myContainer px-[10px] py-[20px]">
          <h6 className="fgr text-[#fff] text-[24px] font-[600]">Waivers</h6>
          <p className="fgr text-[#fff] text-[24px] py-[2px]">
            18+ Waiver | Under 18 Waiver
          </p>
          <p className="fgr text-[#fff] text-[24px] pt-[50px] pb-[50px]">
            <a className='cursor-pointer hover:opacity-[.8]'>Privacy Policy</a> | <a className='cursor-pointer hover:opacity-[.8]'>Terms & Conditions</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
