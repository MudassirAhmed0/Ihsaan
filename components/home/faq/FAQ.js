import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";
import Image from "next/image";
import Slider from "react-slick";
import profile from '../../../assets/images/profile.jpeg';

const FAQ = () => {
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
                <h1 className='fpr text-[#0F2E3C] text-[85px] text-center max-w-[700px] mx-auto'>Frequently asked questions</h1>
                <div className=" ">

                   accordion

                   faq tailwind css

                </div>
            </div>







        </section>
    );
};

export default FAQ;
