import React from "react";
import { HForm } from '@/components/HForm'
import Image from 'next/image';
import { Rupees } from "@/components/svg-components/Rupees";
import { Thyroid } from "@/components/svg-components/Thyroid";
import { Cancer } from "@/components/svg-components/Cancer";
import { ConditionGround } from "@/components/svg-components/ConditionGround";
import { Kidney } from "@/components/svg-components/Kidney";
import { Lungs } from "@/components/svg-components/Lungs";
import { HeartOrgan } from "@/components/svg-components/HeartOrgan";
import { Liver } from "@/components/svg-components/Liver";
import { Viral } from "@/components/svg-components/Viral";
import { Fever } from "@/components/svg-components/Fever";
import { Heart } from "@/components/svg-components/Heart";
import { Diabetes } from "@/components/svg-components/Diabetes";
import { Hypertenstion } from "@/components/Hypertenstion";
import { Infertility } from "@/components/svg-components/Infertility";
import { Allergy } from "@/components/svg-components/Allergy";
import { Alltime } from "@/components/svg-components/Alltime";
import { Samedaydelivery } from "@/components/svg-components/Samedaydelivery";
import { FoundedDoctor } from "@/components/FoundedDoctor";
import { AdvancedTechnology } from "@/components/svg-components/AdvancedTechnology";
import { HighOn } from "@/components/svg-components/HighOn";
import { FiveHundredplus } from "@/components/svg-components/FiveHundredplus";
import { ConsultingService } from "@/components/svg-components/ConsultingService";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";

export default function Home() {


  return (
    <main className="d-flex flex-wrap float-start col-12">
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9 col-md-8 col-xs-12 col-12'>
              <div className='swiperslider'>
                <Image src="/banner01.webp" alt="My Icon" width={1920} height={730} />
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-xs-12 col-12'>
              <HForm />
            </div>
          </div>
        </div>
          <Dots className='hsection position-absolute svgwidth'/>
          <Line className='svgwidthline position-absolute'/>
      </section>
      <section>
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="title col-12 float-start text-center">
                  <h3>Health Check-up packages</h3>
                </div>
                <div className="row">
                  <div className="col-4 float-start">
                    <div className="sliderbox">
                      <div className="packagename">
                        <span><Image src="/healthcompletewellness.svg" alt="Health Check-up packages" width={80} height={80} /></span>
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
                          <a>KNOW MORE +</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 float-start">
                    <div className="sliderbox">
                      <div className="packagename">
                        <span><Image src="/grandparents.svg" alt="Health Check-up packages" width={80} height={80} /></span>
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
                  <div className="col-4 float-start">
                    <div className="sliderbox">
                      <div className="packagename">
                        <span><Image src="/BasicAllergeyPackage.svg" alt="Basic Allergey Package" width={80} height={80} /></span>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="title col-12 float-start text-center">
                  <h3 className="grid-center">SEASONAL packages <span>DENGUE, CHIKUNGUNYA, MALARIA</span></h3>
                </div>
                <div className="row">
                  <div className="col-4 float-start">
                    <div className="sliderbox">
                      <div className="packagename">
                          <h5>FEVER PANEL</h5>
                      </div>
                      <div className="packageprice">
                        <div className="actualprice">
                          <Rupees /> <span>7410</span>
                        </div>
                        <div className="discountprice gradient  text-white">
                          <Rupees /> <span>2500</span>
                        </div>
                      </div>
                      <div className="packagename">
                      <p className="m-0">Includes <strong className="text-black">5</strong> Parameters</p>
                      </div>
                      <div className="packagedetail">
                        <ul>
                          <li>Complete blood count</li>
                          <li>Lipid profile</li>
                          <li>Liver function test</li>
                        </ul>
                      </div>
                      <div className="packageprice">
                      <div className="textbtn">
                        <a>KNOW MORE +</a>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 float-start">
                    <div className="sliderbox">
                      <div className="packagename">
                          <h5>FEVER CURE</h5>
                      </div>
                      <div className="packageprice">
                        <div className="actualprice">
                          <Rupees /> <span>7410</span>
                        </div>
                        <div className="discountprice gradient  text-white">
                          <Rupees /> <span>2500</span>
                        </div>
                      </div>
                      <div className="packagename">
                      <p className="m-0">Includes <strong className="text-black">5</strong> Parameters</p>
                      </div>
                      <div className="packagedetail">
                        <ul>
                          <li>Complete blood count</li>
                          <li>Lipid profile</li>
                          <li>Liver function test</li>
                        </ul>
                      </div>
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
          </div>
        </div>
      </section>
      <section id="organs" className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="title col-12 float-start text-center">
                  <h3 className="grid-center text-white">TEST BY ORGAN</h3>
                </div>
                <div className="row">
                  <div className="organcolumnrow flex-center">
                  <div className="organcolumn">
                    <div className="sliderbox border-0 bg-transparent">
                      <div className="packagename">
                        <span className="bg-transparent"><Thyroid /></span>
                      </div>
                      <div className="packagename text-white">
                        <h4><strong>Thyroid</strong></h4>
                        <p className="m-0">Are you losing or gaining weight? These changes may be related to thyriod</p>
                      </div>
                    </div>
                  </div>
                  <div className="organcolumn">
                    <div className="sliderbox border-0 bg-transparent">
                      <div className="packagename">
                      <span className="bg-transparent"><Kidney /></span>
                      </div>
                      <div className="packagename text-white">
                        <h4><strong>Kidney</strong></h4>
                        <p className="m-0">The sign of kidney diseases are easy to miss, knowing it early can help prevent</p>
                      </div>
                    </div>
                  </div>
                  <div className="organcolumn">
                    <div className="sliderbox border-0 bg-transparent">
                      <div className="packagename">
                      <span className="bg-transparent"><Lungs /></span>
                      </div>
                      <div className="packagename text-white">
                        <h4><strong>Lungs</strong></h4>
                        <p className="m-0">If you're having trouble catching breath, you might need to find out why</p>
                      </div>
                    </div>
                  </div>
                  <div className="organcolumn">
                    <div className="sliderbox border-0 bg-transparent">
                      <div className="packagename">
                      <span className="bg-transparent"><HeartOrgan /></span>
                      </div>
                      <div className="packagename text-white">
                        <h4><strong>Heart</strong></h4>
                        <p className="m-0">Check the health of your heart with specially designed heart check test panel</p>
                      </div>
                    </div>
                  </div>
                  <div className="organcolumn">
                    <div className="sliderbox border-0 bg-transparent">
                      <div className="packagename">
                      <span className="bg-transparent"><Liver /></span>
                      </div>
                      <div className="packagename text-white">
                        <h4><strong>Liver</strong></h4>
                        <p className="m-0">Do you drink a lot of alcohol? Know your liver's health with us</p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-image position-absolute">
          <Image src="/transparent-gradient.webp" alt="My Icon" width={1920} height={1760} />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="col-lg-10 m-auto col-12">
                <div className="title col-12 float-start text-center">
                  <h3>TEST BY CONDITION</h3>
                </div>
                <div className="row">
                    <div className="condition col-lg-3 col-sm-6 col-12 position-relative">
                      <div className="condtionicon">
                        <Cancer />
                      </div>
                      <div className="conditionshape">
                        <span><ConditionGround /></span>
                        <h3>Cancer</h3>
                      </div>
                    </div>
                    <div className="condition col-lg-3 col-sm-6 col-12 position-relative">
                      <div className="condtionicon">
                        <Viral />
                      </div>
                      <div className="conditionshape">
                        <span><ConditionGround /></span>
                        <h3>Viral</h3>
                      </div>
                    </div>
                    <div className="condition col-lg-3 col-sm-6 col-12 position-relative">
                      <div className="condtionicon">
                        <Allergy />
                      </div>
                      <div className="conditionshape">
                        <span><ConditionGround /></span>
                        <h3>Allergy</h3>
                      </div>
                    </div>
                    <div className="condition col-lg-3 col-sm-6 col-12 position-relative">
                      <div className="condtionicon">
                        <Fever />
                      </div>
                      <div className="conditionshape">
                        <span><ConditionGround /></span>
                        <h3>Fever</h3>
                      </div>
                    </div>
                    <div className="condition col-lg-3 col-sm-6 col-12 position-relative">
                      <div className="condtionicon">
                        <Heart />
                      </div>
                      <div className="conditionshape">
                        <span><ConditionGround /></span>
                        <h3>Heart</h3>
                      </div>
                    </div>
                    <div className="condition col-lg-3 col-sm-6 col-12 position-relative">
                      <div className="condtionicon">
                        <Diabetes />
                      </div>
                      <div className="conditionshape">
                        <span><ConditionGround /></span>
                        <h3>Diabetes</h3>
                      </div>
                    </div>
                    <div className="condition col-lg-3 col-sm-6 col-12 position-relative">
                      <div className="condtionicon">
                        <Hypertenstion />
                      </div>
                      <div className="conditionshape">
                        <span><ConditionGround /></span>
                        <h3>Hypertension</h3>
                      </div>
                    </div>
                    <div className="condition position-relative col-lg-3 col-sm-6 col-12 ">
                      <div className="condtionicon">
                        <Infertility />
                      </div>
                      <div className="conditionshape">
                        <span><ConditionGround /></span>
                        <h3>Infertility</h3>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h3>ABOUT ASSURE PATHLAB</h3>
              </div>
              <div className="col-lg-7 m-auto col-xs-12 col-12 text-center">
                <p>Assure Pathlabs was established by Dr. Sanjay Wadhwa and Dr. Lovely Razdan in 2015. Our high ethical values necessitate every man, woman, and child to benefit from advancements in healthcare – despite living in their living location. It is this idea of serving humanity that grows our commitment to improve and deliver useful health innovations that respond to the general, specific, and real needs of vulnerable populations. Assure labs in Jalandhar ensures on-time and specific diagnosis plays a significant role to optimize health, treatment of diseases, eliminating disease burden, and further improving health.</p>
                <div className="col-12 flex-center mt-4">
                  <a className="button button--aylen button--round-l button--text-thick text-uppercase gradient col-lg-3 col-12">know more </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h3>WHY ASSURE PATHLABS?</h3>
              </div>
              <div className="col-lg-10 m-auto col-12 float-start">
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-xs-6 col-12">
                    <div className="circleicons float-start col-12 text-center">
                      <span className="gradient flex-center mb-2"> <Alltime /></span>
                      <p>24x7</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xs-6 col-12">
                    <div className="circleicons float-start col-12 text-center">
                      <span className="gradient flex-center mb-2"><Samedaydelivery /></span>
                      <p>Same Day Report</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xs-6 col-12">
                    <div className="circleicons float-start col-12 text-center">
                      <span className="gradient flex-center mb-2"><FoundedDoctor /></span>
                      <p>Founded by Doctors</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xs-6 col-12">
                    <div className="circleicons float-start col-12 text-center">
                      <span className="gradient flex-center mb-2"><AdvancedTechnology /></span>
                      <p>Advanced Technology</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xs-6 col-12">
                    <div className="circleicons float-start col-12 text-center">
                      <span className="gradient flex-center mb-2"><HighOn /></span>
                      <p>High on Safety and Hygeine</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xs-6 col-12">
                    <div className="circleicons float-start col-12 text-center">
                      <span className="gradient flex-center mb-2"><FiveHundredplus /></span>
                      <p>500+ Test</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xs-6 col-12">
                    <div className="circleicons float-start col-12 text-center">
                      <span className="gradient flex-center mb-2"><ConsultingService /></span>
                      <p>Consultation Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='testimonial' className="testimonial">
        <div className="container position-relative z-index-2">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h3 className="text-white">TESTIMONIALS</h3>
              </div>
              <div className="col-12 float-start">
                <div className="col-lg-4 float-start">
                    <div className="testimonialbox flex-center flex-wrap">
                      <p>Very Supportive & Co-operative Staff Quality work, as well as report turnaround time.</p>
                      <h4>Sonali Gupta</h4>
                    </div>
                </div>
                <div className="col-lg-4 float-start">
                <div className="testimonialbox flex-center flex-wrap">
                      <p>Quality work, Impress with the management of firm as well as turn around time of the reports</p>
                      <h4>Mr.Nitin</h4>
                    </div>
                </div>
                <div className="col-lg-4 float-start">
                <div className="testimonialbox flex-center flex-wrap">
                      <p>We have regularly working with Ashturkar pathology lab, and feeling very great to get good service from them.</p>
                      <h4>Mr.Somesh Kulkarni</h4>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </main>
  )
}
