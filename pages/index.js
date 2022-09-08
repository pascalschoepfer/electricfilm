import Nav from "../components/nav.js"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faTwitter} from '@fortawesome/free-brands-svg-icons'


const Home = () => {

    return (
        <div className="bg-home">
            <div className="bg-transparent-layer">
                <Nav/>

                <div className='text-center container-title'>
                    <h1 className="mobile-show">electric.</h1>
                    <h1 className="mobile-show">film</h1>
                    <h1 className="desktop-show">electric.film</h1>
                </div>
                <div
                    className="container container-bottom-buttons text-center p-md-2 col-xl-4 col-md-6 col-sm-8 col-12">
                    <div className="nav nav-pills row justify-content-center">
                        <a className='btn btn-lg col-11 col-lg-9 my-2 btn-highlight'
                           href='https://discord.gg/e2gRJCQbQW' target="_blank"
                           rel="noopener noreferrer">
                            Join our community on Discord
                        </a>
                        <a className='btn btn-lg col-11 col-lg-9 my-2 btn-normal'
                           href='https://twitter.com/el3ctricfilm' target="_blank"
                           rel="noopener noreferrer">
                            Follow us on Twitter
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
