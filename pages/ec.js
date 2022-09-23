import Nav from "../components/nav.js"
import Image from "next/image";

const Ec = () => {

    return (
        <div>
            <Nav/>
            <div className="m-4 container-aline row justify-content-center">
                {[...Array(32)].map((x, i) =>
                    <div className="col-xl-2 col-md-3 col-sm-6 col-11 m-0 p-2 container-card" data-bs-toggle="modal"
                         data-bs-target={`#modal${i}`} key={i}>
                        <div className="card">
                            <Image src={`/aline/aline${i + 10}.jpg`} alt='aline01' priority={true} layout={"fill"}
                                   objectFit={"contain"}/>
                        </div>
                        <div className="modal fade" id={`modal${i}`} tabIndex="-1">
                            <div className="modal-dialog modal-xl modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div className="modal-body">
                                        <Image src={`/aline/aline${i + 10}.jpg`} alt={`Sketch #${i+1}`} priority={true} layout={"fill"}
                                               objectFit={"contain"} className="pb-3"/>
                                    </div>
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
