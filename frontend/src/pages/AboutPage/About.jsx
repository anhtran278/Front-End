import React from 'react'
import backgroundFooter from '../../assets/images/backgound2.jpg';
import backgroundHeader from '../../assets/images/book_background.jpg';
import thuongHieu from '../../assets/images/thuonghieu.jpg';
import './about.css'

const NotFoundPage = () => {
    return (
        <>
            <section id="page_header" style={{backgroundImage: `url(${backgroundHeader})`}}>
                <h1>#know us</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            </section>

            <section id="about" class="section_p1">
                <img src={thuongHieu} alt=""/>
                <div>
                    <h2>Who we are ?</h2>
                    <p/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tempore amet veniam possimus! Animi ipsa incidunt iste consectetur modi soluta, blanditiis voluptas ea nam nostrum ipsum ex alias quasi placeat.
                    Veniam exercitationem numquam non aut accusantium delectus, earum possimus accusamus deleniti quas eligendi eaque, magni sequi illum? Placeat facere, repellendus odit, nesciunt reiciendis amet ex nobis iure quasi ullam officiis?
                    Consectetur facere modi ipsa inventore nulla corporis ratione quidem ea dolorem. Perferendis cum quod omnis sapiente, esse maiores eius aperiam asperiores doloremque incidunt quia dicta nam suscipit voluptatum molestiae. Magnam!
                    Quo similique perspiciatis cupiditate, fugiat dicta architecto sint necessitatibus illo eveniet quas soluta eos laborum vero deserunt animi suscipit earum officia explicabo eum. Enim commodi veniam voluptatibus aut adipisci nostrum.
                    Quidem facere tempore officia qui cum assumenda quod nihil quis. Cupiditate accusamus adipisci commodi soluta cum dolores pariatur, accusantium veritatis temporibus non molestiae natus ipsam numquam cumque repudiandae incidunt ad.
                </div>
            </section>

            <section id="newsletter" class="section_p1" style={{backgroundImage: `url(${backgroundFooter})`}}>
                <div class="newstext" >
                    <h4>Sign Up For Newsletters</h4>
                    <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
                </div>
                <div class="form">
                    <input type="text" placeholder="Your email address..."/>
                    <button>Sign Up</button>
                </div>
            </section>
            </>
    )
}

export default NotFoundPage