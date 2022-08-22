import Image from "next/image";
import pattern from '../../../assets/images/pattern.png';
import vector from '../../../assets/images/about-us/vector.svg';

const JoinTeam = () => {
  return (
    <section className="w-full py-[93px] bg-[#F2F2F2] relative overflow-hidden">
      <div className='absolute left-0 right-0 top-0 w-full h-[100%]'>
        <Image src={pattern} className='' />
      </div>
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] bg-[#f2f2f2] opacity-[.99]'>
      </div>
      <div className="myContainer flex relative z-[1]">

        <div className="lg:w-[50%] w-[100%]">
          <h1 className="fpr text-[70px] 2xl:text-[100px] leading-[70px] 2xl:leading-[100px] text-[#0F2E3C] pb-[30px]">
            Join our team
          </h1>
          <p className="text-[24px] text-[#292929] mb-[25px]">
            Whether you already have a private practice or are thinking about opening one, working indepenently can be a lot of work. We understand the unique challenges in building your personal practice without getting overwhelmed.
          </p>
          <p className="text-[24px] text-[#292929] mb-[25px]">
            Many of the coaches at Ihsan Coaching have their own independent practice, but also work with us due to our extensive network and consistently-growing source of referral. We also offer mentorship,and other growth opportunities to build your coaching skills.
          </p>
          <p className="text-[24px] text-[#292929] mb-[25px]">
            By joining our team, you’ll have the opportunity to coach nationwide, host seminars, and benefit the Muslim community nationwide. At Ihsan Coaching, we invest in our coaches, and help them grow to their potential. 
          </p>


          <p className="fgb text-[24px] text-[#292929] ">Why work with Ihsan Coaching</p>
          <ul>

            <li className="fgr text-[24px] text-[#292929] ml-[20px]">Regular referrals to build your own clientele </li>
            <li className="fgr text-[24px] text-[#292929] ml-[20px]">Growth opportunities and building your skillset </li>
            <li className="fgr text-[24px] text-[#292929] ml-[20px]">Completely remote and flexible work schedule (ability to choose your own hours)</li>
            <li className="fgr text-[24px] text-[#292929] ml-[20px]">Competitive compensation (we offer 10% more than others) </li>
            <li className="fgr text-[24px] text-[#292929] ml-[20px]">Inclusion in our website and marketing materials for exposure</li>


          </ul>
        </div>

        <div className="w-[50%]">
        
        <div className="w-full flex justify-center">
        <Image src={vector} className='' />

        </div>
        </div>

      </div>
    </section>
  );
};

export default JoinTeam;
