"use client"
import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';

export const Accordian = () => {
  return (
   <>
    <div className='faqcont col-lg-11 col-12'>
                                        <Accordion allowZeroExpanded="true">

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                       <p>Uric Acid</p>
                                                        <span>1</span>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                            </AccordionItem>
                                            <AccordionItem >
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                    <p>Blood Urea</p>
                                                    <span>1</span>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                   <p> Creatinine</p>
                                                    <span>1</span>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                              
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                    <p>Electrolytes (Na, K, Ca)</p>
                                                    <span>1</span>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                    <p>Glucose (Fasting)</p>
                                                    <span>1</span>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                               
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                   <p> Glycosylated Haemoglobin (HBA1C)</p>
                                                   <span>1</span>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                  <p>  Iron Profile Serum</p>
                                                  <span>1</span>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                   <p> PSA Total</p>
                                                   <span>1</span>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                    <p>Thyroid Profile </p>
                                                    <span>3</span>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div className='accordiancont'>
                                                        <ul>
                                                            <li>pH Urine</li>
                                                            <li>Specific gravity</li>
                                                            <li>Alkaline Phosphatase, Serum</li>
                                                            <li>GGTP (Gamma GT)</li>
                                                            <li>Proteins, Serum</li>
                                                            <li>pH Urine</li>
                                                            <li>Specific gravity</li>
                                                            <li>Alkaline Phosphatase, Serum</li>
                                                            <li>GGTP (Gamma GT)</li>
                                                            <li>Proteins, Serum</li>
                                                            <li>pH Urine</li>
                                                            <li>Specific gravity</li>
                                                            <li>Alkaline Phosphatase, Serum</li>
                                                            <li>GGTP (Gamma GT)</li>
                                                            <li>Proteins, Serum</li>
                                                        </ul>
                                                    </div>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                  <p>  Vitamin B12</p>
                                                  <span>1</span>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                            </AccordionItem>
                                        </Accordion>

                                    </div>
   </>
  )
}
