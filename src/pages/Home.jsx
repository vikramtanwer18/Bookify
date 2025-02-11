import { useEffect } from "react";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
    const firebase = useFirebase();
    return (
<div className="scrolling">
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

            <div className="card-container">
                     {/* 1th card */}
                <div className="card">
                     <div className="logo-style"> 
                         <img src="/policeimage.png" alt="logo image" className="logo"/>
                         <span className="students"> ⚡ 244.9k Students </span>
                     </div>
                      <div className="content">Delhi Police MTS (Civilian) Mock Test Series</div>
                      <button type="submit" className="content-btn"> Go To Test Series </button>
                 </div>

                    {/* 2th card */}
                 <div className="card">
                     <div className="logo-style"> 
                         <img src="/policeimage.png" alt="logo image" className="logo"/>
                         <span className="students"> ⚡ 244.9k Students </span>
                     </div>
                      <div className="content">Delhi Police MTS (Civilian) Mock Test Series</div>
                      <button type="submit" className="content-btn"> Go To Test Series </button>
                 </div>

                     {/* 3th card */}
                 <div className="card">
                     <div className="logo-style"> 
                         <img src="/policeimage.png" alt="logo image" className="logo"/>
                         <span className="students"> ⚡ 244.9k Students </span>
                     </div>
                      <div className="content">Delhi Police MTS (Civilian) Mock Test Series</div>
                      <button type="submit" className="content-btn"> Go To Test Series </button>
                 </div>
                 
                    {/* 4th card */}
                 <div className="card">
                     <div className="logo-style"> 
                         <img src="/policeimage.png" alt="logo image" className="logo"/>
                         <span className="students"> ⚡ 244.9k Students </span>
                     </div>
                      <div className="content">Delhi Police MTS (Civilian) Mock Test Series</div>
                      <button type="submit" className="content-btn"> Go To Test Series </button>
                 </div>
                        {/* 5th card */}
                 <div className="card">
                     <div className="logo-style"> 
                         <img src="/policeimage.png" alt="logo image" className="logo"/>
                         <span className="students"> ⚡ 244.9k Students </span>
                     </div>
                      <div className="content">Delhi Police MTS (Civilian) Mock Test Series</div>
                      <button type="submit" className="content-btn"> Go To Test Series </button>
                 </div>
            </div>
            <div className="footer-style">footer part come</div>
</div>
    );
}

export default Home;
