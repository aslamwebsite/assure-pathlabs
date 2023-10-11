"use client"
import React, { useState } from 'react';
import { Logo } from './svg-components/Logo';
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const menuClasses = `menslide${isMenuOpen ? ' active' : ''}`;
    const hamburgerClasses = `hemburgur${isMenuOpen ? ' active' : ''}`;
  return (
    <header>
    <div className='container'>
      <div className='row align-items-end'>
        <div className='col-6'>
          <div className='logo col-md-3 col-12'>
            <Logo />
          </div>
        </div>
        <div className='col-6'>
          <div className='d-flex align-items-end justify-content-end'>
            <div className='navbar p-0 align-items-end gap-4'>
              <div className='d-flex justify-content-end align-items-end gap-4'>
                <div className='leftmenu float-start gap-4 d-flex'>
                  <span> <a className="button button--aylen button--round-l button--text-thick">My Cart</a></span>
                  <span> <a className="button button--aylen button--round-l button--text-thick">Login</a></span>
                </div>
                <div className='homecollection float-start d-grid'>
                  <h4 className='text-black'>Home Collection</h4>
                  <h3><a href='tel:0181-4667555'>0181-4667555</a></h3>
                </div>
              </div>
              <div className='menustn'>
                <div className={hamburgerClasses} onClick={toggleMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={menuClasses}>
                  <div className='container'>
                    <div className='row'>
                      <div className='slimenu d-flex justify-content-end'>
                        <ul className='d-flex gap-5 m-0'>
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
    </div>
  </header>
  )
}
