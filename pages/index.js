import Nav from "../components/nav.js"

const Home = () => {

    return (
        <div>
            <Nav/>
            <video playsInline autoPlay muted loop id="bgvid">
                <source src="/bgvid.mp4" type="video/mp4"/>
            </video>
        </div>
    )
}

export default Home;
