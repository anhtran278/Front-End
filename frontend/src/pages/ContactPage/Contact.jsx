import React from 'react'
import './contact.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import backgroundFooter from '../../assets/images/backgound2.jpg';
import backgroundHeader from '../../assets/images/book_background.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faEnvelope, faPhone, faClock } from 'font-awesome';

const ContactPage = () => {
    return (
    <>
        <section id="page_header" style={{backgroundImage: `url(${backgroundHeader})`}}>
            <h1>#readmore</h1>
            <p> Read all case studies about our product! </p>
        </section>

        <section id="contact_details" className="section_p1" >
            <div className="details">
                <span>GET IN TOUCH</span>
                <h2>Visit one of our  agency locations or contact us today</h2>
                <h3>Head Office</h3>
                <div>
                    <ul>
                    <li>
                        <FontAwesomeIcon icon={faMap} />            
                        <p>69/68 D. Dang Thuy Tram, Phuong 13, Binh Thanh, Thanh Pho Ho Chi Minh</p>       
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} />            
                        <p>contact@example.cpm</p>       
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPhone} />                        
                        <p>+84 97 886 7361</p>       
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faClock} />            
                        <p>Monday to Saturday: 8:00am to 8:00pm</p>       
                    </li>
                </ul>
                </div>
            </div>
            <div className="map">
            </div>
        </section>
        <section id="form_details">
            <form action="">
                <span>LEAVE US A MESSAGE</span>
                <h2>We love to hear from you</h2>
                <input type="text" placeholder="Your Name"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Subject"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                <button>Submit</button>
            </form>
            <div className="people">
                <div>
                    <img src="img/people1.jpg" alt=""/>
                    <p><span>Tran Tuan Anh</span> Software Engineer <br/> Phone: + 84 978 867 361
                    <br/>Email: sanatram278@gmail.com</p>
                </div>
                <div>
                    <img src="img/people2.jpg" alt=""/>
                    <p><span>Tran Lam Hoang</span> Software Engineer <br/> Phone: + 84 978 867 361
                    <br/>Email: sanatram278@gmail.com</p>
                </div>
                <div>
                    <img src="img/people3.jpg" alt=""/>
                    <p><span>Tran Phu Yen</span> Software Engineer <br/> Phone: + 84 978 867 361
                    <br/>Email: sanatram278@gmail.com</p>
                </div>
                <div>
                    <img src="img/people4.jpg" alt=""/>
                    <p><span>Nguyen Tan Phu</span> Software Engineer <br/> Phone: + 84 978 867 361
                    <br/>Email: sanatram278@gmail.com</p>
                </div>
            </div>
        </section>

        <section id="newsletter" className="section_p1" style={{backgroundImage: `url(${backgroundFooter})`}}>
            <div className="newstext">
                <h4>Sign Up For Newsletters</h4>
                <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
            </div>
            <div className="form">
                <input type="text" placeholder="Your email address..."/>
                <button>Sign Up</button>
            </div>
        </section>
    </>
    )
}

export default ContactPage