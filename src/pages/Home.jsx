import { useEffect } from "react";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";
// import Img1 from '../..public/first.jpg';
// import Img2 from '../..public/second.jpg';
// import Img3 from '../..public/third.png';
import "./Home.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

function Home() {
    const firebase = useFirebase();

    return (
<div>
            {/* <button onClick={() => firebase.signoutUser()}>Sign out</button> */}
            
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/first.jpg" className="d-block w-100" alt="first img" />
                    </div>
                    <div className="carousel-item">
                        <img src="/second.jpg" className="d-block w-100" alt="second img" />
                    </div>
                    <div className="carousel-item">
                        <img src="/third.png" className="d-block w-100" alt="third img" />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="footer-style">footer part come</div>

 </div>
    );
}

export default Home;
