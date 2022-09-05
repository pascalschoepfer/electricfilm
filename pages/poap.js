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
            <div className="container container-video text-center p-4 col-xl-4 col-md-6 col-sm-8 col-11">
                <div className="nav nav-pills row justify-content-center">
                    <a className='btn btn-lg col-8 btn-highlight' href='https://youtu.be/pY17ck2Hx8k' target="_blank"
                       rel="noopener noreferrer">
                        Video Guide
                    </a>
                </div>
            </div>
            <div className="container d-md-flex">

                <div className="container p-2 col-md-5 col-sm-8 col-11">
                    <div className="row justify-content-center">
                        <h3 className="korium-title">Install Wallet (MetaMask)</h3>
                        <div className="accordion" id="accordionMM">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOneMM">
                                        1. Download MetaMask
                                    </button>
                                </h2>
                                <div id="collapseOneMM" className="accordion-collapse collapse show"
                                     data-bs-parent="#accordionMM">
                                    <div className="accordion-body">
                                        <i>If you already have a Crypto Wallet, you can directly go to the second
                                            section &quot;Get the POAP&quot;.</i> <br/><br/>
                                        <div>Download and install a Crypto Wallet on your mobile phone, we recommend
                                            &quot;MetaMask&quot;:
                                        </div>
                                        <div className='my-4 text-center'>
                                            <a className='btn btn-lg col-9 btn-normal' href='https://metamask.io/download/'
                                               target="_blank" rel="noopener noreferrer">
                                                MetaMask
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwoMM">
                                        2. Configure MetaMask
                                    </button>
                                </h2>
                                <div id="collapseTwoMM" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionMM">
                                    <div className="accordion-body">
                                        <div>
                                            After starting the MetaMask app and selecting &quot;Get Started&quot;, click on
                                            &quot;Create a new wallet&quot;.
                                        </div>
                                        <div className='container px-xxl-5 mt-2'>
                                            <Image src={mm1} alt='mm1' priority={true}/>
                                        </div>
                                        <div className="my-3">
                                            Create a new password and confirm it. You can also enable biometric
                                            authentication like
                                            &quot;Face ID&quot;.
                                        </div>
                                        <div className='container px-xxl-5 mt-2'>
                                            <Image src={mm2} alt='mm2' priority={true}/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThreeMM">
                                        3. Finish setup
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
                                            If you don&rsquo;t have time or a pen and paper, click &quot;Remind me later&quot; to get
                                            to
                                            the next step. Never share this with anyone and don&rsquo;t save it anywhere
                                            digitally!
                                        </div>
                                        <div className='container px-xxl-5 mt-2'>
                                            <Image src={mm3} alt='mm3' priority={true}/>
                                        </div>
                                        <div className="my-3">
                                            When you are finished setting up, copy your account address (starts with
                                            0x...)
                                            by tapping on it, you will need this in the next step.
                                        </div>
                                        <div className='container px-xxl-5 mt-2'>
                                            <Image src={mm4} alt='mm4' priority={true}/>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container p-2 col-md-5 col-sm-8 col-11">
                    <div className="row justify-content-center">
                        <h3 className="korium-title">Get the POAP</h3>
                        <div className="accordion" id="accordionPOAP">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOnePOAP">
                                        1. Download POAP app
                                    </button>
                                </h2>
                                <div id="collapseOnePOAP" className="accordion-collapse collapse show"
                                     data-bs-parent="#accordionPOAP">
                                    <div className="accordion-body">
                                        <div>Download the POAP app for your mobile device:</div>
                                        <div className="row my-3 justify-content-center">
                                            <a className='btn btn-lg col-9 mb-2 btn-normal' href='https://poap.xyz/ios'
                                               target="_blank" rel="noopener noreferrer">
                                                iPhone
                                            </a>
                                            <a className='btn btn-lg col-9 btn-normal' href='https://poap.xyz/android'
                                               target="_blank" rel="noopener noreferrer">
                                                Android
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwoPOAP">
                                        2. Connect to the POAP app
                                    </button>
                                </h2>
                                <div id="collapseTwoPOAP" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionPOAP">
                                    <div className="accordion-body">
                                        After downloading and starting the POAP app, paste your earlier copied wallet
                                        address into the field.
                                    </div>
                                    <div className='container pb-3'>
                                        <Image src={poap1} alt='poap1' priority={true}/>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThreePOAP">
                                        3. Mint (Claim) POAP
                                    </button>
                                </h2>
                                <div id="collapseThreePOAP" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionPOAP">
                                    <div className="accordion-body">
                                        Now you are ready to claim a POAP. Click &quot;Mint&quot; and then &quot;Scan QR&quot; to scan the
                                        QR code handed out by the team on site or use the &quot;Secret word&quot; if you have
                                        received one.
                                    </div>
                                    <div className='container px-xxl-5 mt-1'>
                                        <Image src={poap2} alt='poap2' priority={true}/>
                                    </div>
                                    <div className='container px-xxl-5 mt-2'>
                                        <Image src={poap3} alt='poap3' priority={true}/>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFourPOAP">
                                        4. Celebrate!
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
                                        and releases.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Poap;
