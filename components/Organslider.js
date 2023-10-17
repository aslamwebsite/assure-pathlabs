"use client"
import React from 'react'
import Slider from "react-slick";
import { Thyroid } from "@/components/svg-components/Thyroid";
import { Kidney } from "@/components/svg-components/Kidney";
import { Lungs } from "@/components/svg-components/Lungs";
import { HeartOrgan } from "@/components/svg-components/HeartOrgan";
import { Liver } from "@/components/svg-components/Liver";


export const Organslider = (props) => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        autoplay: false,
    };
    return (
        <>
      
            <Slider {...settings} {...props}>
                <div>
                <div className="organcolumnrow flex-center">
                  <div className="organcolumn">
                    <div className="sliderbox border-0 bg-transparent mt-0">
                      <div className="packagename">
                        <span className="bg-transparent"><Thyroid /></span>
                      </div>
                      <div className="packagename text-white">
                        <h4><strong>Thyroid</strong></h4>
                        <p className="m-0 minheight-120">Are you losing or gaining weight? These changes may be related to thyriod</p>
                        <div className="packageprice">
                      <div className="textbtn">
                        <a>KNOW MORE +</a>
                      </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  </div>
                    </div>
                    <div>
                <div className="organcolumnrow flex-center">
                <div className="organcolumn">
                    <div className="sliderbox border-0 bg-transparent mt-0">
                      <div className="packagename">
                      <span className="bg-transparent"><Kidney /></span>
                      </div>
                      <div className="packagename text-white">
                        <h4><strong>Kidney</strong></h4>
                        <p className="m-0 minheight-120">The sign of kidney diseases are easy to miss, knowing it early can help prevent</p>
                        <div className="packageprice">
                      <div className="textbtn">
                        <a>KNOW MORE +</a>
                      </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  </div>
                    </div>
                    <div>
                <div className="organcolumnrow flex-center">
                <div className="organcolumn">
                    <div className="sliderbox border-0 bg-transparent mt-0">
                      <div className="packagename">
                      <span className="bg-transparent"><Lungs /></span>
                      </div>
                      <div className="packagename text-white">
                        <h4><strong>Lungs</strong></h4>
                        <p className="m-0 minheight-120">If you're having trouble catching breath, you might need to find out why</p>
                        <div className="packageprice">
                      <div className="textbtn">
                        <a>KNOW MORE +</a>
                      </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  </div>
                    </div>
                    <div>
                <div className="organcolumnrow flex-center">
                <div className="organcolumn">
                    <div className="sliderbox border-0 bg-transparent mt-0">
                      <div className="packagename">
                      <span className="bg-transparent"><HeartOrgan /></span>
                      </div>
                      <div className="packagename text-white">
                        <h4><strong>Heart</strong></h4>
                        <p className="m-0 minheight-120">Check the health of your heart with specially designed heart check test panel</p>
                        <div className="packageprice">
                      <div className="textbtn">
                        <a>KNOW MORE +</a>
                      </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  </div>
                    </div>
                    <div>
                <div className="organcolumnrow flex-center">
                <div className="organcolumn">
                    <div className="sliderbox border-0 bg-transparent mt-0">
                      <div className="packagename">
                      <span className="bg-transparent"><Liver /></span>
                      </div>
                      <div className="packagename text-white">
                        <h4><strong>Liver</strong></h4>
                        <p className="m-0 minheight-120">Do you drink a lot of alcohol? Know your liver's health with us</p>
                           <div className="packageprice">
                      <div className="textbtn">
                        <a>KNOW MORE +</a>
                      </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  </div>
                    </div>
                  
            </Slider>
        </>
    )
}
