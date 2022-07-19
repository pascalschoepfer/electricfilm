import Nav from "../components/nav.js"
import {Button} from "@aws-amplify/ui-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";


const Home = () => {

    return (
        <div>
            <Nav/>
            <div className="container container-bottom-buttons text-center p-2 col-xl-4 col-md-6 col-sm-8 col-11">
                <div className="nav nav-pills row justify-content-center">
                        <a className='btn btn-lg col-5 mx-1' href='https://discord.gg/e2gRJCQbQW' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faDiscord} className='px-2'/>Discord
                        </a>
                        <a className='btn btn-lg col-5 mx-1' href='https://twitter.com/el3ctricfilm' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className='px-2'/>Twitter
                        </a>
                </div>
            </div>

        </div>
    )
}

export default Home;
