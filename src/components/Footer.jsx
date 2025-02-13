import "./Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";


function MyFooter(){
    return(
        <footer className="footer-style">
            <div className="footer-container">
                <div className="row">
                    <div className="footer-section">
                        <h4>Test Book</h4>
                        <p>Best mock tests and study materials to help you ace competitive exams.</p>
                    </div>

                    <div class="footer-links">
                        <h5>Quick Links</h5>
                        <ul className="footer-somelinks">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Mock Tests</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>

                    <div class="footer-contact">
                            <h5>Contact Us</h5>
                            <p>Email: <a href="mailto:support@testbook.com">abc@gmail.com</a></p>
                            <p>Phone: +91 xxxxxxxxx</p>
                            <p>Email: <a href="mailto:support@testbook.com">xyz@gmail.com</a></p>
                            <p>Phone: +91 xxxxxxxxx</p>
                        <div class="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon" /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon" /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /></a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube className="icon" /></a>
                        </div>
                    </div>
                            
               </div>
               <div className="footer-privacy">
                <p><a href="/privacy">Privacy Policy</a> </p>
                <p><a href="/terms">Terms & Conditions</a></p>
            </div>
            </div><hr></hr>
        </footer>
    )
}

export default MyFooter;