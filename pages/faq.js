import Nav from "../components/nav.js"
import Image from "next/image";
import mm1 from "../public/mm1.png";
import mm2 from "../public/mm2.png";
import mm3 from "../public/mm3.png";
import mm4 from "../public/mm4.png";

const Faq = () => {

    return (
        <div>
            <Nav/>
            <div className="container">
                <div className="container p-2 col-xxl-5 col-md-7 col-sm-8 col-11">
                    <div className="row justify-content-center">
                        <div className="accordion" id="accordionFAQ">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOneFAQ">
                                        What is electric.film?
                                    </button>
                                </h2>
                                <div id="collapseOneFAQ" className="accordion-collapse collapse show"
                                     data-bs-parent="#accordionFAQ">
                                    <div className="accordion-body">
                                        Our vision for electric.film is to become a decentralized, community-centric
                                        film production powerhouse with the option for modular extensions like our own
                                        streaming platform to generate revenue.<br/><br/>
                                        Film production funding and distribution in the current state of the industry
                                        and the used legacy systems tend to generate a lot of additional costs,
                                        complications and friction.<br/><br/>
                                        To challenge the status quo of the film industry, we build a blockchain-based
                                        alternative.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwoFAQ">
                                        Who is electric.film?
                                    </button>
                                </h2>
                                <div id="collapseTwoFAQ" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionFAQ">
                                    <div className="accordion-body">
                                        <b>YOU</b> are electric.film!<br/><br/>
                                        Electric.film is a decentralized community, open to anyone interested in the
                                        future of Web3 and film production.
                                    </div>

                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThreeFAQ">
                                        What is a POAP?
                                    </button>
                                </h2>
                                <div id="collapseThreeFAQ" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionFAQ">
                                    <div className="accordion-body">
                                        A POAP (pronounced poh-ap, not pope / short for Proof Of Attendance Protocol) is
                                        a special kind of NFT, accessible to everyone who participated in a certain
                                        event.
                                        These NFTs are called POAPs. <br/><br/>
                                        POAPs are digital mementos, minted in celebration of lifes remarkable moments.
                                        Each POAP is a gift from an issuer (electric.film) to collectors (YOU), in
                                        celebration of a special shared memory.<br/><br/>
                                        By minting these memories to the blockchain, collectors can build a rich
                                        tapestry of tokenized experiences, which unlock a world of possibilities.

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFourFAQ">
                                        What can I do with my POAP?
                                    </button>
                                </h2>
                                <div id="collapseFourFAQ" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionFAQ">
                                    <div className="accordion-body">
                                        POAPs will keep you connected with electric.film and enable you to vote or
                                        access future drops and releases. <br/><br/>
                                        You probably don`t want to miss that!
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFiveFAQ">
                                        Roadmap?
                                    </button>
                                </h2>
                                <div id="collapseFiveFAQ" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionFAQ">
                                    <div className="accordion-body">
                                        We are near the end of the concept phase. The pre-launch of electric.film will take place soon.
                                        <br/><br/>
                                        Simultaneously, the Electric Child movie is being shot.
                                        <br/><br/>
                                        Stay tuned for whats to come! 🙂
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

export default Faq;
