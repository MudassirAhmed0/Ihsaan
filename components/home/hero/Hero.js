import Image from "next/image";
// import heroimg from '../../assets/images/home/hero.jpg'
import pattern from '../../../assets/images/pattern.png';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import heroimg from '../../../assets/images/home/hero.svg';

const Hero = () => {
  return (
    <section className="w-full py-[93px] bg-[#F2F2F2] relative overflow-hidden">
      <div className='absolute left-0 right-0 top-0 w-full h-[100%]'>
      <Image src={pattern} className='' />
      </div>
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] bg-[#f2f2f2] opacity-[.99]'>
      </div>
      <div className="myContainer flex relative z-[1]">
        <div className="w-[48%]">
          <h1 className="fpr text-[130px] 2xl:text-[150px] leading-[120px] 2xl:leading-[140px] text-[#0F2E3C] max-w-[680px] pt-[30px]">
            Feel like you again
          </h1>
          <p className="text-[24px] text-[#292929] pt-[55px] pb-[62px]">
            We offer a modern, solution-focused coaching approach to help you
            overcome life’s struggles. Our online platform is a simpler way to
            access the support you need anytime, anywhere you need it.
          </p>
          <a>
            <button className="fgr w-[332px] h-[79px] flex justify-between items-center bg-[#AE8B5C] text-[24px] text-[#fff] rounded-[50px] px-[30px] py-[10px] hover:opacity-[.8]">
              Get started 
              <BsFillArrowRightCircleFill style={{ fontSize: "30px" }} />
            </button>
          </a>
        </div>
        <div className='mt-[-30px] right-[-20px] before:w-[200px] relative before:h-[200px] before:bg-[#AE8B5C] before:rounded-[100px] before:right-[-35px] before:bottom-[10px] before:absolute'> <Image src={heroimg} /> </div>
      </div>
    </section>
  );
};

export default Hero;
