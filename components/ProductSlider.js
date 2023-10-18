"use client"
import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import { Rupees } from './svg-components/Rupees';
import Link from 'next/link';


export const ProductSlider = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        autoplay: false,
    };
    return (
        <>
      
            <Slider {...settings} {...props}>
                <div>
                <div className='col-lg-11 col-12 m-auto'>
                <div className="sliderbox">
                      <div className="packagename">
                        <span><Image src="/svg/healthcompletewellness.svg" alt="Health Check-up packages" width={80} height={80} /></span>
                      </div>
                      <div className="packagename">
                        <h4><strong className="text-black">Assure Complete Wellness</strong>Package for Man & Woman</h4>
                        <p className="m-0">Includes <strong className="text-black">25</strong> Parameters</p>
                      </div>
                      <div className="packagedetail">
                        <ul>
                          <li>Complete blood count</li>
                          <li>Lipid profile</li>
                          <li>Liver function test</li>
                        </ul>
                      </div>
                      <div className="packageprice">
                        <div className="actualprice">
                          <Rupees /> <span>7410</span>
                        </div>
                        <div className="discountprice gradient  text-white">
                          <Rupees /> <span>2500</span>
                        </div>
                        <div className="textbtn">
                          <Link href='/assure-complete-wellness'>KNOW MORE +</Link>
                          
                        </div>
                      </div>
                    </div>
                    </div>
                    </div>
                    <div>
                <div className='col-lg-11 col-12 m-auto'>
                <div className="sliderbox">
                      <div className="packagename">
                        <span><Image src="svg/grandparents.svg" alt="Health Check-up packages" width={80} height={80} /></span>
                      </div>
                      <div className="packagename">
                        <h4><strong className="text-black">Senior Citizen Package</strong>Male & Female</h4>
                        <p className="m-0">Includes <strong className="text-black">25</strong> Parameters</p>
                      </div>
                      <div className="packagedetail">
                        <ul>
                          <li>Glucose (Fasting)</li>
                          <li>Thyroid Profile</li>
                          <li>Vitamin D</li>
                        </ul>
                      </div>
                      <div className="packageprice">
                        <div className="actualprice">
                          <Rupees /> <span>5230</span>
                        </div>
                        <div className="discountprice gradient  text-white">
                          <Rupees /> <span>1950</span>
                        </div>
                        <div className="textbtn">
                          <a>KNOW MORE +</a>
                        </div>
                      </div>
                    </div>
                    </div>
                    </div>
                    <div>
                <div className='col-lg-11 col-12 m-auto'>
                <div className="sliderbox">
                      <div className="packagename">
                        <span><Image src="svg/BasicAllergeyPackage.svg" alt="Basic Allergey Package" width={80} height={80} /></span>
                      </div>
                      <div className="packagename">
                        <h4><strong className="text-black">Basic Allergey Package</strong>Male & Female</h4>
                        <p className="m-0">Includes <strong className="text-black">25</strong> Parameters</p>
                      </div>
                      <div className="packagedetail">
                        <ul>
                          <li>Complete hemogram</li>
                          <li>IgE total anti body</li>
                        </ul>
                      </div>
                      <div className="packageprice">
                        <div className="actualprice">
                          <Rupees /> <span>2500</span>
                        </div>
                        <div className="discountprice gradient  text-white">
                          <Rupees /> <span>899</span>
                        </div>
                        <div className="textbtn">
                          <a>KNOW MORE +</a>
                        </div>
                      </div>
                    </div>
                    </div>
                    </div>
                    <div>
                    <div className='col-lg-11 col-12 m-auto'>
                <div className="sliderbox">
                      <div className="packagename">
                        <span><Image src="svg/healthcompletewellness.svg" alt="Health Check-up packages" width={80} height={80} /></span>
                      </div>
                      <div className="packagename">
                        <h4><strong className="text-black">Assure Complete Wellness1</strong>Package for Man & Woman</h4>
                        <p className="m-0">Includes <strong className="text-black">25</strong> Parameters</p>
                      </div>
                      <div className="packagedetail">
                        <ul>
                          <li>Complete blood count</li>
                          <li>Lipid profile</li>
                          <li>Liver function test</li>
                        </ul>
                      </div>
                      <div className="packageprice">
                        <div className="actualprice">
                          <Rupees /> <span>7410</span>
                        </div>
                        <div className="discountprice gradient  text-white">
                          <Rupees /> <span>2500</span>
                        </div>
                        <div className="textbtn">
                          <a>KNOW MORE +</a>
                        </div>
                      </div>
                    </div>
                    </div>
                    </div>
            </Slider>
        </>
    )
}
