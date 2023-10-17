"use client"
import React from 'react'
import Slider from "react-slick";
import { TestimonialShape } from "@/components/svg-components/TestimonialShape";

export const Testimonials = (props) => {
    var settings = {
        dots: true,
        infinite: false,
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
                <div className="testimonialbox flex-center flex-wrap">
                        <div className='testimonialshape'>
                            <TestimonialShape />
                        </div>
                        <div className='testimonialcont'>
                      <p>Very Supportive & Co-operative Staff Quality work, as well as report turnaround time.</p>
                      <h4>Sonali Gupta</h4>
                      </div>
                    </div>
                    </div>
                    <div>
                <div className="testimonialbox flex-center flex-wrap">
                        <div className='testimonialshape'>
                            <TestimonialShape />
                        </div>
                        <div className='testimonialcont'>
                        <p>Quality work, Impress with the management of firm as well as turn around time of the reports</p>
                      <h4>Mr.Nitin</h4>
                        </div>
                    </div>
                    </div>
                    <div>
                <div className="testimonialbox flex-center flex-wrap">
                        <div className='testimonialshape'>
                            <TestimonialShape />
                        </div>
                        <div className='testimonialcont'>
                        <p>We have regularly working with Ashturkar pathology lab, and feeling very great to get good service from them.</p>
                      <h4>Mr.Somesh Kulkarni</h4>
                      </div>
                    </div>
                    </div>
                    
            </Slider>
        </>
    )
}
