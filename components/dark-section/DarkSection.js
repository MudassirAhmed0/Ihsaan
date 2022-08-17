import React from "react";

const DarkSection = () => {
  return (
    <section className="bg-[#0F2E3C] text-[#fff] pt-[94px] pb-[110px]">
      <div className="myContainer">
        {/*  */}
        <div className="flex ">
          <h2 className="fpr text-[70px] text-[#fff] leading-[70px] min-w-[450px]">
            What makes us different?
          </h2>
          <p className="fgr text-[24px] text-[#fff] pl-[5%]">
            Coaching is another form of support for people that feel stuck in
            life, but don’t have a clinical illness. And Unlike traditional
            therapy, coaching is a more direct, goal-oriented approach to mental
            health that goes beyond the emotional resolution of past pain or
            trauma. Our licensed therapists serve as coaches to help you
            understand your current life experiences and belief systems. By
            laying the groundwork of where you are now and where you want to be,
            we can get you feeling you again, faster.
          </p>
        </div>
        {/* vs */}

        <div className="flex py-[130px] items-end">
          <div className="flex">
            <div className="w-[183px] h-[185px] bg-pink-400 opacity-[.3] mr-[20px]">
              {/* <Image src={} alt="image" /> */}
            </div>
            <div>
              <h6 className="fgr text-[36px] font-[600] text-[#fff]">
                Modern Coaching
              </h6>
              <ul>
                <li className="fgr text-[24px] text-[#fff] py-[5px] leading-[28px] pl-[25px]">
                  Action and goal-oreinted
                </li>
                <li className="fgr text-[24px] text-[#fff] py-[5px] leading-[28px] pl-[25px]">Forward looking</li>
                <li className="fgr text-[24px] text-[#fff] py-[5px] leading-[28px] pl-[25px]">
                  Tailored one-on-one approach
                </li>
              </ul>
            </div>
          </div>
          <p className="fgr text-[24px] text-[#fff] py-[5px] leading-[28px] pl-[25px] px-[80px]">vs</p>
          <div className="flex">
            <div className="w-[102px] h-[191px] bg-pink-400 opacity-[.3] mr-[20px]">
              {/* <Image src={} alt="image" /> */}
            </div>
            <div>
              <h6 className="fgr text-[36px] font-[600] text-[#fff]">
                Traditional Therapy
              </h6>
              <ul>
                <li className="fgr text-[24px] text-[#fff] py-[5px] leading-[28px] pl-[25px]">
                  Analytical and introspective
                </li>
                <li className="fgr text-[24px] text-[#fff] py-[5px] leading-[28px] pl-[25px]">
                  Slow-paced and long-term
                </li>
                <li className="fgr text-[24px] text-[#fff] py-[5px] leading-[28px] pl-[25px]">
                  Focus more on the past to<br /> resolve current challenges
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* our services  */}
        <h2 className="fpr text-[#fff] text-[85px] text-center pb-[30px]">
          Our services
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-[1%] gap-y-[1%]">
          <div className="w-[48%] flex">
            img
            <div>
              <h4 className="fgr text-[36px] text-[#fff]">
                Individual Coaching
              </h4>
              <p className="fgr text-[24px] text-[#fff]">
                One-on-one coaching to help build self-confidence, improve
                relationships, support careers, manage anxiety, and achieve your
                personal goals. <a>Learn more</a>
              </p>
            </div>
          </div>

          <div className="w-[48%] flex">
            img
            <div>
              <h4 className="fgr text-[36px] text-[#fff]">
                Premarital Coaching
              </h4>
              <p className="fgr text-[24px] text-[#fff]">
                Assess your compatibility and get a better understanding of what
                constitutes an ideal Islamic marriage. <a>Learn more</a>
              </p>
            </div>
          </div>

          <div className="w-[48%] flex">
            img
            <div>
              <h4 className="fgr text-[36px] text-[#fff]">Marital Coaching</h4>
              <p className="fgr text-[24px] text-[#fff]">
                By understanding your partner better, the easier it’ll be to
                find solutions to conflicts. Learn strategies to communicate and
                resolve conflicts more effectively. <a>Learn more</a>
              </p>
            </div>
          </div>

          <div className="w-[48%] flex">
            img
            <div>
              <h4 className="fgr text-[36px] text-[#fff]">
                Religious Consulting
              </h4>
              <p className="fgr text-[24px] text-[#fff]">
                Designed for either individuals or couples, speak directly to
                Islamic scholars about any faith-based concerns that may be
                troubling you. <a>Learn more</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkSection;
