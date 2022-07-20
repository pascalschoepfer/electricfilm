import Nav from "../components/nav.js"
import {Button} from "@aws-amplify/ui-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAndroid, faApple, faYoutube} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import mm1 from '../public/mm1.png';
import mm2 from '../public/mm2.png';
import mm3 from '../public/mm3.png';
import mm4 from '../public/mm4.png';
import poap1 from '../public/poap1.jpg';
import poap2 from '../public/poap2.jpg';
import poap3 from '../public/poap3.jpg';

const Poap = () => {

    return (
        <div>
            <Nav/>
            <div className="container d-md-flex">
                <div className="container p-2 col-md-5 col-sm-8 col-11">
                    <div className="row justify-content-center">
                        <h3>1 - Install Wallet (MetaMask)</h3>
                        <div className="accordion" id="accordionMM">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOneMM">
                                        1a - Download and install MetaMask
                                    </button>
                                </h2>
                                <div id="collapseOneMM" className="accordion-collapse collapse show"
                                     data-bs-parent="#accordionMM">
                                    <div className="accordion-body">
                                        <i>If you already have a Crypto Wallet, you can directly go to the second
                                            section "2 - Get the POAP".</i> <br/><br/>
                                        <div>Download and install a Crypto Wallet on your mobile phone, we recommend
                                            "MetaMask":
                                        </div>
                                        <br/>
                                        <a className='btn btn-lg mx-1 btn-acc' href='https://metamask.io/download/'
                                           target="_blank" rel="noopener noreferrer">
                                            Download MetaMask <svg id='svgMM' viewBox="0 0 318.6 318.6" width='5vh'>
                                            <path fill="#E2761B" stroke="#E2761B" strokeLinecap="round"
                                                  strokeLinejoin="round" d="M274.1 35.5L174.6 109.4 193 65.8z"/>
                                            <path fill="#E4761B" stroke="#E4761B" strokeLinecap="round"
                                                  strokeLinejoin="round" d="M44.4 35.5L143.1 110.1 125.6 65.8z"/>
                                            <path fill="#E4761B" stroke="#E4761B" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M238.3 206.8L211.8 247.4 268.5 263 284.8 207.7z"/>
                                            <path fill="#E4761B" stroke="#E4761B" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M33.9 207.7L50.1 263 106.8 247.4 80.3 206.8z"/>
                                            <path fill="#E4761B" stroke="#E4761B" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M103.6 138.2L87.8 162.1 144.1 164.6 142.1 104.1z"/>
                                            <path fill="#E4761B" stroke="#E4761B" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M214.9 138.2L175.9 103.4 174.6 164.6 230.8 162.1z"/>
                                            <path fill="#E4761B" stroke="#E4761B" strokeLinecap="round"
                                                  strokeLinejoin="round" d="M106.8 247.4L140.6 230.9 111.4 208.1z"/>
                                            <path fill="#E4761B" stroke="#E4761B" strokeLinecap="round"
                                                  strokeLinejoin="round" d="M177.9 230.9L211.8 247.4 207.1 208.1z"/>
                                            <path fill="#D7C1B3" stroke="#D7C1B3" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M211.8 247.4L177.9 230.9 180.6 253 180.3 262.3z"/>
                                            <path fill="#D7C1B3" stroke="#D7C1B3" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M106.8 247.4L138.3 262.3 138.1 253 140.6 230.9z"/>
                                            <path fill="#233447" stroke="#233447" strokeLinecap="round"
                                                  strokeLinejoin="round" d="M138.8 193.5L110.6 185.2 130.5 176.1z"/>
                                            <path fill="#233447" stroke="#233447" strokeLinecap="round"
                                                  strokeLinejoin="round" d="M179.7 193.5L188 176.1 208 185.2z"/>
                                            <path fill="#CD6116" stroke="#CD6116" strokeLinecap="round"
                                                  strokeLinejoin="round" d="M106.8 247.4L111.6 206.8 80.3 207.7z"/>
                                            <path fill="#CD6116" stroke="#CD6116" strokeLinecap="round"
                                                  strokeLinejoin="round" d="M207 206.8L211.8 247.4 238.3 207.7z"/>
                                            <path fill="#CD6116" stroke="#CD6116" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M230.8 162.1L174.6 164.6 179.8 193.5 188.1 176.1 208.1 185.2z"/>
                                            <path fill="#CD6116" stroke="#CD6116" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M110.6 185.2L130.6 176.1 138.8 193.5 144.1 164.6 87.8 162.1z"/>
                                            <path fill="#E4751F" stroke="#E4751F" strokeLinecap="round"
                                                  strokeLinejoin="round" d="M87.8 162.1L111.4 208.1 110.6 185.2z"/>
                                            <path fill="#E4751F" stroke="#E4751F" strokeLinecap="round"
                                                  strokeLinejoin="round" d="M208.1 185.2L207.1 208.1 230.8 162.1z"/>
                                            <path fill="#E4751F" stroke="#E4751F" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M144.1 164.6L138.8 193.5 145.4 227.6 146.9 182.7z"/>
                                            <path fill="#E4751F" stroke="#E4751F" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M174.6 164.6L171.9 182.6 173.1 227.6 179.8 193.5z"/>
                                            <path fill="#F6851B" stroke="#F6851B" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M179.8 193.5L173.1 227.6 177.9 230.9 207.1 208.1 208.1 185.2z"/>
                                            <path fill="#F6851B" stroke="#F6851B" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M110.6 185.2L111.4 208.1 140.6 230.9 145.4 227.6 138.8 193.5z"/>
                                            <path fill="#C0AD9E" stroke="#C0AD9E" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M180.3 262.3L180.6 253 178.1 250.8 140.4 250.8 138.1 253 138.3 262.3 106.8 247.4 117.8 256.4 140.1 271.9 178.4 271.9 200.8 256.4 211.8 247.4z"/>
                                            <path fill="#161616" stroke="#161616" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M177.9 230.9L173.1 227.6 145.4 227.6 140.6 230.9 138.1 253 140.4 250.8 178.1 250.8 180.6 253z"/>
                                            <path fill="#763D16" stroke="#763D16" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M278.3 114.2L286.8 73.4 274.1 35.5 177.9 106.9 214.9 138.2 267.2 153.5 278.8 140 273.8 136.4 281.8 129.1 275.6 124.3 283.6 118.2z"/>
                                            <path fill="#763D16" stroke="#763D16" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M31.8 73.4L40.3 114.2 34.9 118.2 42.9 124.3 36.8 129.1 44.8 136.4 39.8 140 51.3 153.5 103.6 138.2 140.6 106.9 44.4 35.5z"/>
                                            <path fill="#F6851B" stroke="#F6851B" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M267.2 153.5L214.9 138.2 230.8 162.1 207.1 208.1 238.3 207.7 284.8 207.7z"/>
                                            <path fill="#F6851B" stroke="#F6851B" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M103.6 138.2L51.3 153.5 33.9 207.7 80.3 207.7 111.4 208.1 87.8 162.1z"/>
                                            <path fill="#F6851B" stroke="#F6851B" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M174.6 164.6L177.9 106.9 193.1 65.8 125.6 65.8 140.6 106.9 144.1 164.6 145.3 182.8 145.4 227.6 173.1 227.6 173.3 182.8z"/>
                                        </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwoMM">
                                        1b - Configure MetaMask
                                    </button>
                                </h2>
                                <div id="collapseTwoMM" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionMM">
                                    <div className="accordion-body">
                                        <div>
                                            After starting the MetaMask app and selecting "Get Started", click on
                                            "Create a new wallet".
                                        </div>
                                        <div className='container px-xxl-5 mt-2'>
                                            <Image src={mm1} alt='mm1'/>
                                        </div>
                                        <div className="my-3">
                                            Create a new password and confirm it. You can also enable biometric
                                            authentication like
                                            "Face ID".
                                        </div>
                                        <div className='container px-xxl-5 mt-2'>
                                            <Image src={mm2} alt='mm2'/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThreeMM">
                                        1c - Finish wallet setup and copy your new address
                                    </button>
                                </h2>
                                <div id="collapseThreeMM" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionMM">
                                    <div className="accordion-body">
                                        <div className="mb-3">
                                            Next, it asks you to backup your recovery phrase. If you have time and a pen
                                            and
                                            paper, write it down and store it securely by following the steps in the
                                            app.<br/> <br/>
                                            If you dont have time or a pen and a paper, click "Remind me later" to get
                                            to
                                            the next step. Never share this with anyone and dont save it anywhere
                                            digitally!
                                        </div>
                                        <div className='container px-xxl-5 mt-2'>
                                            <Image src={mm3} alt='mm3'/>
                                        </div>
                                        <div className="my-3">
                                            When you are finished setting up, copy your account address (Starts with
                                            0x...)
                                            by tapping on it, you will need this in the next step.
                                        </div>
                                        <div className='container px-xxl-5 mt-2'>
                                            <Image src={mm4} alt='mm4'/>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container p-2 col-md-5 col-sm-8 col-11">
                    <div className="row justify-content-center">
                        <h3>2 - Get the POAP</h3>
                        <div className="accordion" id="accordionPOAP">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOnePOAP">
                                        2a - Download and install the POAP app
                                    </button>
                                </h2>
                                <div id="collapseOnePOAP" className="accordion-collapse collapse show"
                                     data-bs-parent="#accordionPOAP">
                                    <div className="accordion-body">
                                        <div>Download the POAP app for your mobile device:</div>
                                        <div className="row mt-2">
                                            <a className='btn btn-lg btn-acc col-4 mx-2' href='https://poap.xyz/ios'
                                               target="_blank" rel="noopener noreferrer">
                                                Apple iOS <FontAwesomeIcon icon={faApple}/>
                                            </a>
                                            <a className='btn btn-lg btn-acc col-4 mx-2' href='https://poap.xyz/android'
                                               target="_blank" rel="noopener noreferrer">
                                                Android <FontAwesomeIcon icon={faAndroid}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwoPOAP">
                                        2b - Connect to the POAP app
                                    </button>
                                </h2>
                                <div id="collapseTwoPOAP" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionPOAP">
                                    <div className="accordion-body">
                                        After downloading and starting the POAP app, paste your earlier copied wallet
                                        address into the field.
                                    </div>
                                    <div className='container pb-3'>
                                        <Image src={poap1} alt='poap1'/>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThreePOAP">
                                        2c - Mint (Claim) POAP
                                    </button>
                                </h2>
                                <div id="collapseThreePOAP" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionPOAP">
                                    <div className="accordion-body">
                                        Now you are ready to claim a POAP. Click "Mint" and then "Scan QR" to scan the
                                        QR code handed out by the team on site or use the "Secret word" if you have
                                        received one.
                                    </div>
                                    <div className='container px-xxl-5 mt-1'>
                                        <Image src={poap2} alt='poap2'/>
                                    </div>
                                    <div className='container px-xxl-5 mt-2'>
                                        <Image src={poap3} alt='poap3'/>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFourPOAP">
                                        2d - Celebrate!
                                    </button>
                                </h2>
                                <div id="collapseFourPOAP" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionPOAP">
                                    <div className="accordion-body">
                                        Congratulations, you are a part of electric.film!<br/><br/>
                                        You now own a specific and personal POAP <i>(Which is an NFT - Non-Fungible
                                        Token)</i> that can only be collected as a reward for participating in a special
                                        event. <br/><br/>
                                        Stay tuned, as the electric.film POAPs enable you to vote or access future drops
                                        and releases.ne.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container container-video text-center p-4 col-xl-4 col-md-6 col-sm-8 col-11">
                <div className="nav nav-pills row justify-content-center">
                    <a className='btn btn-lg col-8' href='https://youtu.be/pY17ck2Hx8k' target="_blank"
                       rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} className='px-2'/>Video Guide
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Poap;
