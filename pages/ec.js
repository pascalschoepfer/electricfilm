import Nav from "../components/nav.js"
import Image from "next/image";

const Ec = () => {
    if (typeof jQuery == 'undefined') {
        // jQuery IS NOT loaded, do stuff here.
        console.log("noope")
    }
    return (
        <div>
            <Nav/>
            <div className="container">
                <h2 className="text-center">Impressions from the sets – sketches by Aline Ulrich</h2>
                <div className="text-center container" id="text-aline">
                    <i>There were some quiet moments for me when I had time to observe the set
                        and the film crew.
                        I made quick sketches of the crew and surroundings with a ballpoint pen on A6 paper every day.
                        So it has 1-2 memories of what it looked like behind the camera for every day of shooting (in
                        which I was involved).</i>
                    <br/>
                    About me: Aline Ulrich, in Electric Child Props assistant for Zurich and Basel, currently
                    scenography student in Basel
                </div>
            </div>

            <div className="m-4 container-aline row justify-content-center text-center">

                {[...Array(32)].map((x, i) =>
                    <div className="col-xl-2 col-md-3 col-sm-6 col-11 m-0 p-2 container-card" data-bs-toggle="modal"
                         data-bs-target={`#modal${i}`} key={i}>
                        <div className="card">
                            <Image src={`/aline/alinetn${i + 10}.jpg`} alt={`Sketch Aline #${i + 1}`} priority={true}
                                   layout={"fill"}
                                   objectFit={"contain"}/>
                        </div>
                        <div className="modal" id={`modal${i}`} tabIndex="-1">
                            <div className="modal-dialog modal-xl modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div className="modal-body">
                                        <Image src={`/aline/aline${i + 10}.jpg`} alt={`Sketch Aline #${i + 1}`}
                                               layout={"fill"} priority={true}
                                               objectFit={"contain"} className="pb-3"/>
                                    </div>

                                    {
                                        (i === 31) ?
                                            <div className="modal-footer justify-content-between">
                                                <button type="button" className="btn btn-normal"
                                                        data-bs-toggle="modal"
                                                        data-bs-target={`#modal${i - 1}`}>Previous
                                                </button>
                                                <button type="button" className="btn btn-normal"
                                                        data-bs-toggle="modal" data-bs-target={`#modal${0}`}>Next
                                                </button>
                                            </div>
                                            :
                                            (i > 1) ?
                                                <div className="modal-footer justify-content-between">
                                                    <button type="button" className="btn btn-normal"
                                                            data-bs-toggle="modal"
                                                            data-bs-target={`#modal${i - 1}`}>Previous
                                                    </button>
                                                    <button type="button" className="btn btn-normal"
                                                            data-bs-toggle="modal"
                                                            data-bs-target={`#modal${i + 1}`}>Next
                                                    </button>
                                                </div>
                                                :
                                                <div className="modal-footer justify-content-between">
                                                    <button type="button" className="btn btn-normal"
                                                            data-bs-toggle="modal"
                                                            data-bs-target={`#modal${31}`}>Previous
                                                    </button>
                                                    <button type="button" className="btn btn-normal"
                                                            data-bs-toggle="modal"
                                                            data-bs-target={`#modal${i + 1}`}>Next
                                                    </button>
                                                </div>

                                    }


                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </div>
    )
}

export default Ec;
