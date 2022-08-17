import Image from "next/image";
import logo from "../../../assets/images/logo/logo.svg";
import styles from "./footer.module.css";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className={`bg-[#0F2E3C] pt-[97px]`}>
        <div className="bg-[#121314]">
          <div className="myContainer">
            <h1>Get started with Ihsan Coaching today</h1>
            <p className="fgr text-[24px] text-[#fff] pt-[42px] pb-[77px]">
              Let’s take the first step towards better health and well-being,
              together. Get in touch to learn more about coaches or services, or
              to set up an initial session that fits your schedule.
            </p>
            <div className="flex justify-center items-center gap-x-[20px]">
              <a>
                <button className="fgr w-[332px] h-[79px] border-[3px] border-[#fff] flex justify-between items-center bg-[#fff] text-[24px] text-[##555555] rounded-[50px] px-[30px] py-[10px]">
                  Get started
                  <BsFillArrowRightCircleFill
                    style={{ fontSize: "30px", color: "#555555" }}
                  />
                </button>
              </a>
              <a>
                <button className="fgr w-[332px] h-[79px] border-[3px] border-[#FAF7F2] flex justify-between items-center bg-[#AE8B5C] text-[24px] text-[#fff] rounded-[50px] px-[30px] py-[10px]">
                  Get started
                  <BsFillArrowRightCircleFill
                    style={{ fontSize: "30px", color: "#fff" }}
                  />
                </button>
              </a>
            </div>
          </div>
          <div className="myContainer px-[10px] pt-[90px] pb-[100px] flex justify-between">
            <div className="">
              <h6 className="text-[#fff] text-[25px] capitalize">Services</h6>
              <ul>
                <li className="text-[#fff]">Individual Coaching</li>
                <li className="text-[#fff]">Premarital Coaching</li>
                <li className="text-[#fff]">Marital Coaching</li>
                <li className="text-[#fff]">Religious Coaching</li>
              </ul>
            </div>
            <div className="">
              <h6 className="text-[#fff] text-[25px] capitalize">About</h6>
              <ul>
                <li className="text-[#fff]">Home</li>
                <li className="text-[#fff]">About Us</li>
                <li className="text-[#fff]">Team</li>
                <li className="text-[#fff]">Careers</li>
                <li className="text-[#fff]">Programs</li>
                <li className="text-[#fff]">Contact</li>
              </ul>
            </div>
            <div className="">
              <h6 className="text-[#fff] text-[25px] capitalize">Contact</h6>
              <ul>
                <li className="text-[#fff]">info@ihsancoaching.ca </li>
                <li className="text-[#fff]">1-630-557-9427</li>
                <li className="text-[#fff]">
                  <FiInstagram />
                  <FaFacebook />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#1f2122 ]">
          <div className="px-[10px] py-[20px]">
            <h6>Waivers</h6>
            <p>18+ Waiver | Under 18 Waiver</p>
            <p>Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
