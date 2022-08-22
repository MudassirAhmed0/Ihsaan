import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";
import pattern from '../../../assets/images/pattern.png';

const BrownSection = () => {
  return (
    <section className="text-[#fff] pt-[120px] pb-[140px] relative overflow-hidden">
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] overlay-img'>
        <Image src={pattern} className='scale-[1.5] ' />
      </div>
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] bg-[#AE8B5C] opacity-[.99] '>
      </div>
      <div className="myContainer relative z-[2]">
        <h1 className='fpr lg:text-[70px] text-[40px] lg:leading-[85px] leading-[50px] text-center max-w-[900px] mx-auto'>Areas our marital coaching can help you with</h1>
        {/* <p className='fgr text-[24px] lg:leading-[36px] leading-[28px] max-w-[1502px] mx-auto text-center pt-[32px] '> */}
        <p className='fgr text-[24px] lg:leading-[36px] leading-[28px] width-[100%] mx-auto text-center pt-[32px] '>

        Ihsan Coaching provides comprehensive marital coaching services for all your needs, including:
        </p>
        <ul className='flex flex-wrap max-w-[900px] mx-auto gap-y-[30px] lg:pt-[3%] pt-[5%] list-square'>
            <li className="fgr text-[24px] leading-[36px] text-[#fff] lg:w-[50%] w-[100%]">Communication</li>
            <li className="fgr text-[24px] leading-[36px] text-[#fff] lg:w-[50%] w-[100%]">Rebuild emotional connections</li>
            <li className="fgr text-[24px] leading-[36px] text-[#fff] lg:w-[50%] w-[100%]">Conflict resolution</li>
            <li className="fgr text-[24px] leading-[36px] text-[#fff] lg:w-[50%] w-[100%]">Better supporting your partner</li>
            <li className="fgr text-[24px] leading-[36px] text-[#fff] lg:w-[50%] w-[100%]">Financial responsibility</li>
            <li className="fgr text-[24px] leading-[36px] text-[#fff] lg:w-[50%] w-[100%]">Trust</li>
            <li className="fgr text-[24px] leading-[36px] text-[#fff] lg:w-[50%] w-[100%]">Work-life balance</li>
            <li className="fgr text-[24px] leading-[36px] text-[#fff] lg:w-[50%] w-[100%]">Intimacy</li>
            <li className="fgr text-[24px] leading-[36px] text-[#fff] lg:w-[50%] w-[100%]">The Islamic concept of marriage</li>
        </ul>
      </div>
    </section>
  );
};

export default BrownSection;
