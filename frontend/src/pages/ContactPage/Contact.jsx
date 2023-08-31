import React from 'react'
import './contact.css'
import {
EnvironmentOutlined,
MailOutlined,
PhoneOutlined,
ClockCircleOutlined
} from '@ant-design/icons';
import backgroundFooter from '../../assets/images/backgound2.jpg';
import backgroundHeader from '../../assets/images/book_background.jpg';
import people1 from '../../assets/images/people1.jpg';
import people2 from '../../assets/images/people2.jpg';
import people3 from '../../assets/images/people3.jpg';
import people4 from '../../assets/images/people4.jpg';

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
                        <EnvironmentOutlined className='i' />           
                        <p>69/68 D. Dang Thuy Tram, Phuong 13, Binh Thanh, Thanh Pho Ho Chi Minh</p>       
                    </li>
                    <li>
                        <MailOutlined className='i'/>           
                        <p>contact@example.cpm</p>       
                    </li>
                    <li>
                        <PhoneOutlined className='i'/>                        
                        <p>+84 97 886 7361</p>       
                    </li>
                    <li>
                        <ClockCircleOutlined className='i'/>            
                        <p>Monday to Saturday: 8:00am to 8:00pm</p>       
                    </li>
                </ul>
                </div>
            </div>
            <div className="map">
            <iframe title='Google Maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1496.423964936815!2d106.69950958115241!3d10.827476794341276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528f4a62fce9b%3A0xc99902aa1e26ef02!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBWxINuIExhbmc!5e0!3m2!1svi!2s!4v1693379867129!5m2!1svi!2s" style={{border: '0',borderRadius:'10px',width:"600", height:"450"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <img src={people1} alt=""/>
                    <p><span>Tran Tuan Anh</span> Software Engineer <br/> Phone: + 84 978 867 361
                    <br/>Email: sanatram278@gmail.com</p>
                </div>
                <div>
                    <img src={people2} alt=""/>
                    <p><span>Tran Lam Hoang</span> Software Engineer <br/> Phone: + 84 978 867 361
                    <br/>Email: sanatram278@gmail.com</p>
                </div>
                <div>
                    <img src={people3} alt=""/>
                    <p><span>Tran Phu Yen</span> Software Engineer <br/> Phone: + 84 978 867 361
                    <br/>Email: sanatram278@gmail.com</p>
                </div>
                <div>
                    <img src={people4} alt=""/>
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