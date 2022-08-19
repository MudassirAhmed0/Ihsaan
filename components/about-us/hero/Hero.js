import Image from "next/image";
// import heroimg from '../../assets/images/home/hero.jpg'
import pattern from '../../../assets/images/pattern.png';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import heroimg from '../../../assets/images/about-us/man-sitting.svg';

const Hero = () => {
  return (
    <section className="w-full py-[93px] bg-[#F2F2F2] relative overflow-hidden">
      {/* <div className='absolute left-0 right-0 top-0 w-full h-[100%]'>
        <Image src={pattern} className='' />
      </div> */}
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] bg-[#f2f2f2] opacity-[.99]'>
      </div>
      <div className="myContainer flex relative z-[1]">
        <div className="w-[53.5%]">
          <h1 className="fpr text-[70px] 2xl:text-[100px] leading-[120px] 2xl:leading-[150px] text-[#0F2E3C] max-w-[680px] pb-[20px]">
            About Us
          </h1>
          <p className="text-[24px] text-[#292929] leading-[36px] mb-[30px]">
            In Arabic, Ihsan means ‘perfection’ or ‘excellence’. It’s a matter of taking one’s inner faith, and showing it both in deeds and actions. It’s a sense of social responsibility, born from religious convictions. It’s the Mulim responsibility to strive for perfection, constituting the highest form of worship.
          </p>
          <p className="text-[24px] text-[#292929] leading-[36px] mb-[30px]">
            When it comes to coaching or therapy, traditional coaches may be unfamiliar with fundamental religious statuses like Ihsan. We bridge that gap for the Islam community.
          </p>
          <p className="text-[24px] text-[#292929] leading-[36px] mb-[30px]">
            Ihsan Coaching offers modern, goal-oriented coaching services that are grounded in Islamic principles.Our culturally-competent and religiously-informed coaches are licensed, professional therapists that can provide a high-level of support and coaching - all through the lens of Islamic culture.
          </p>
          <p className="text-[24px] text-[#292929] leading-[36px] mb-[30px]">
            By being able to relate to the struggles Muslims face in Western society and empathize through shared backgrounds and perspectives, we offer a level of specialized coaching that can’t be found from traditional therapy. All of our coaches are trained therapists with several years of experience; our coaches have graduated from accredited universities with Masters or Doctorates in Counseling, Clinical Psychology, and Social Work.
          </p>
        </div>
        <div className='mt-[80px] h-[100%] right-[-30px] before:w-[200px] relative before:h-[200px] before:bg-[#AE8B5C] before:rounded-[100px] before:right-[-35px] before:bottom-[10px] before:absolute'> <Image src={heroimg} /> </div>
      </div>
    </section>
  );
};

export default Hero;
