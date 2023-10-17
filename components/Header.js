"use client"
import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import { Logo } from './svg-components/Logo';
import Link from 'next/link';
import { Attachement } from './svg-components/Attachement'
import { Booktest } from './svg-components/Booktest';
import { Report } from './svg-components/Report';
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };  
    const menuClasses = `menslide${isMenuOpen ? ' active' : ''}`;
    const hamburgerClasses = `hemburgur${isMenuOpen ? ' active' : ''}`;
    useEffect(() => {
      Aos.init({ duration: 1000 });
      window.addEventListener('scroll', changeBackground);
  
      return () => {
        window.removeEventListener('scroll', changeBackground);
      }
    }, []);
    const [header, setNavbar] = useState(false);
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
  return (
    <header>
       <div className={header ? 'header fixed' : 'header'}>
      <div className="container">
      <div className="row align-items-end">
        <div className="col-6">
          <div className="logo col-md-3 col-12">
           <Link href='/'> <Logo /></Link>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex align-items-end justify-content-end">
            <div className="navbar p-0 align-items-end gap-4">
              <div className="d-flex justify-content-end align-items-end gap-4">
                <div className='searchbox'>
                  
                </div>
                <div className="leftmenu float-start gap-4 d-flex">
                  <span className="button button--aylen button--round-l button--text-thick my-cart">My Cart</span>
                  <span  className="button button--aylen button--round-l button--text-thick">Login</span>
                </div>
                <div className="homecollection float-start d-grid">
                  <h4 className="text-black">Home Collection</h4>
                  <h3><a href='tel:0181-4667555'>0181-4667555</a></h3>
                </div>
              </div>
              <div className="menustn">
                <div className={hamburgerClasses} onClick={toggleMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={menuClasses}>
                  <div className="container">
                    <div className="row">
                      <div className="slimenu d-flex justify-content-end">
                        <ul className="d-flex gap-5 m-0">
                          <li>Upload Prescription</li>
                          <li>Book a Test</li>
                          <li>Booking & Reports</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='menslide fixvisible'>
      <div className='row'>
      <div className='headerstrip'>
      <div className="container">
                    <div className="row">
                      <div className="slimenu d-flex justify-content-end">
                        <ul className="d-flex gap-5 m-0">
                          <li> <span><Attachement /></span>Upload Prescription</li>
                          <li><span><Booktest /></span>Book a Test</li>
                          <li><span><Report /></span>Booking & Reports</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  </div>
      </div>
      </div>
    </div>
      </div>
     
  </header>
  )
}
