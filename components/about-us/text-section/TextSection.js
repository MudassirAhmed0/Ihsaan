import Image from "next/image";
// import heroimg from '../../assets/images/home/hero.jpg'
import pattern from '../../../assets/images/pattern.png';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import heroimg from '../../../assets/images/about-us/man-sitting.svg';

const TextSection = () => {
  return (
    <section className="w-full py-[100px] bg-[#fff] relative overflow-hidden">
      <div className='myContainer'>

        <div className='flex flex-wrap justify-between gap-y-[140px] gap-x-[3%]'>

          <div className='lg:w-[48%] w-[100%] '>
            <h1 className='fpr text-[#0F2E3C] lg:text-[100px] md:text-[80px] text-[40px]
            lg:leading-[100px]  md:leading-[70px] max-w-[633px]'>
              Our values and principals</h1>
          </div>
          <p className='lg:w-[48%] w-[100%] fgr text-[#555555] text-[24px] leading-[42px] flex items-center'>From the services we provide to our corporate culture, our goal is for everything we do to live up to our core values and principles.</p>
          <div className='lg:w-[48%] w-[100%]'>
            <h6 className='fgb text-[#555555] text-[32px] leading-[42px]'>Caring</h6>
            <p className="fgr text-[#555555] text-[24px] leading-[42px]">Asking for help is a brave first step. Every session is a judgment-free, safe space where you can comfortably speak to us about anything.</p>
          </div>
          <div className='lg:w-[48%] w-[100%]'>
            <h6 className='fgb text-[#555555] text-[32px] leading-[42px]'>Personalized</h6>
            <p className="fgr text-[#555555] text-[24px] leading-[42px]">No two people or circumstances are alike, and neither are the solutions we offer. Every coaching program we put together is tailored to each individual’s or couple’s needs, challenges or goals.</p>
          </div>
          <div className='lg:w-[48%] mt-[-2.5%] w-[100%]'>
            <h6 className='fgb text-[#555555] text-[32px] leading-[42px]'>Trust</h6>
            <p className="fgr text-[#555555] text-[24px] leading-[42px]">Trust is fundamental in successful coaching. If you don’t trust your coach, they won’t be able to offer the best advice - and that starts with us. Our coaches respect and appreciate the faith you’ve put into them, and would never compromise that trust.</p>
          </div>
          <div className='lg:w-[48%] w-[100%] mt-[-2.5%]'>
            <h6 className='fgb text-[#555555] text-[32px] leading-[42px]'>Confidentiality/Amana</h6>
            <p className="fgr text-[#555555] text-[24px] leading-[42px]">All information provided is held with the highest level of confidentiality in accordance with HIPPA compliance.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TextSection;
