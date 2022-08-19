import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";
import Image from "next/image";
import Slider from "react-slick";
import profile from '../../../assets/images/profile.jpeg';



const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <section className="bg-[#fff] pt-[109px] pb-[100px]">
            <div className="myContainer">
                <h1 className='fpr text-[#0F2E3C] text-[54px] text-center'>Trusted throughout local communities</h1>
                <div className="max-w-[1350px] bg-[#F2F2F2] mx-auto pt-[69px] pb-[48px] slider-main mt-[61px]">

                    <Slider {...settings}>

                        <p className='fgi leading-[22px] text-center max-w-[1005px] flex-imp flex-col justify-center'>
                            <p>
                                In a time where members of our communities are increasingly facing mental health issues, marital disputes etc, it is imperative to have services which cater to their needs. Alhamdulillah, it is a breath of fresh air that Br. Farhan and his team at Ihsan Coaching have been doing just that. They have stepped up to provide a needed platform for Muslims facing these realistic issues. Their coaches provide a balance of both the Islamic as well as secular perspectives when dealing with their clients. Alhamdulillah, our community has also established a partnership with Ihsan Coaching, so that our members also benefit from their services. I hope many others realize that there is someone to talk to when needing help. Please do not be silent and reach out to them! I highly recommend their organization. May Allah continue to grant them success and the ability to help others.
                            </p>
                            <div className="flex flex-start mt-[37px] mx-auto">
                                <div className='w-[75px] h-[75px] rounded-[50px] overflow-hidden prof-img mr-[10px]'><Image src={profile} /></div>
                                <div className="flex flex-col">
                                    <h6 className="fgr leading-[36px] font-[600] text-[24px] text-[#555555] text-left mt-[5px]">Mufti Asif Umar </h6>
                                    <h5 className='fgr leading-[36px] text-[24px] text-[#555555] text-left mt-[-10px]'>Islamic Wills USA</h5>
                                </div>
                            </div>
                        </p>

                        <p className='fgi leading-[22px] text-center max-w-[1005px] flex-imp flex-col justify-center'>
                            <p>
                                In a time where members of our communities are increasingly facing mental health issues, marital disputes etc, it is imperative to have services which cater to their needs. Alhamdulillah, it is a breath of fresh air that Br. Farhan and his team at Ihsan Coaching have been doing just that. They have stepped up to provide a needed platform for Muslims facing these realistic issues. Their coaches provide a balance of both the Islamic as well as secular perspectives when dealing with their clients. Alhamdulillah, our community has also established a partnership with Ihsan Coaching, so that our members also benefit from their services. I hope many others realize that there is someone to talk to when needing help. Please do not be silent and reach out to them! I highly recommend their organization. May Allah continue to grant them success and the ability to help others.
                            </p>
                            <div className="flex flex-start mt-[37px] mx-auto">
                                <div className='w-[75px] h-[75px] rounded-[50px] overflow-hidden prof-img mr-[10px]'><Image src={profile} /></div>
                                <div className="flex flex-col">
                                    <h6 className="fgr leading-[36px] font-[600] text-[24px] text-[#555555] text-left mt-[5px]">Mufti Asif Umar </h6>
                                    <h5 className='fgr leading-[36px] text-[24px] text-[#555555] text-left mt-[-10px]'>Islamic Wills USA</h5>
                                </div>
                            </div>
                        </p>

                        <p className='fgi leading-[22px] text-center max-w-[1005px] flex-imp flex-col justify-center'>
                            <p>
                                In a time where members of our communities are increasingly facing mental health issues, marital disputes etc, it is imperative to have services which cater to their needs. Alhamdulillah, it is a breath of fresh air that Br. Farhan and his team at Ihsan Coaching have been doing just that. They have stepped up to provide a needed platform for Muslims facing these realistic issues. Their coaches provide a balance of both the Islamic as well as secular perspectives when dealing with their clients. Alhamdulillah, our community has also established a partnership with Ihsan Coaching, so that our members also benefit from their services. I hope many others realize that there is someone to talk to when needing help. Please do not be silent and reach out to them! I highly recommend their organization. May Allah continue to grant them success and the ability to help others.
                            </p>
                            <div className="flex flex-start mt-[37px] mx-auto">
                                <div className='w-[75px] h-[75px] rounded-[50px] overflow-hidden prof-img mr-[10px]'><Image src={profile} /></div>
                                <div className="flex flex-col">
                                    <h6 className="fgr leading-[36px] font-[600] text-[24px] text-[#555555] text-left mt-[5px]">Mufti Asif Umar </h6>
                                    <h5 className='fgr leading-[36px] text-[24px] text-[#555555] text-left mt-[-10px]'>Islamic Wills USA</h5>
                                </div>
                            </div>
                        </p>


                    </Slider>

                </div>
            </div>







        </section>
    );
};

export default Testimonial;
