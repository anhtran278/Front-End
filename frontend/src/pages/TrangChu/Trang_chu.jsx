import React from 'react';
import anh1 from '../../assets/images/Reader_s_Rest_Wide_4500x.webp';
import anh2 from '../../assets/images/black_man.jpg';
import anh3 from '../../assets/images/IMG_2049_1800x.webp';
import anh4 from '../../assets/images/Imports_-_1_of_1_7_1280x.webp';
import giay1 from '../../assets/images/giay.webp';
import giayXanh from '../../assets/images/giayxanh.webp';
import giayDen from '../../assets/images/giayden.webp';
import tuiXach from '../../assets/images/tuixach.webp';
import viewStore from '../../assets/images/view_store_auto_x2.jpg';
import backgroundFooter from '../../assets/images/backgound2.jpg';
import pro2_1 from '../../assets/images/02.1.webp';
import pro3 from '../../assets/images/03.webp';
import pro3_1 from '../../assets/images/03.1.webp';
import pro4 from '../../assets/images/02.webp';
import pro5_1 from '../../assets/images/05.1.webp';
import pro6_1 from '../../assets/images/06.1.webp';
import pro7_1 from '../../assets/images/07.1.webp';
import pro9_1 from '../../assets/images/09.1.webp';
import pro11 from '../../assets/images/11.1.webp';
import pro13 from '../../assets/images/13.1.webp';
import pro14 from '../../assets/images/14.1.webp';
import pro15 from '../../assets/images/15.1.webp';
import pro16 from '../../assets/images/16.1.webp';
import pro17 from '../../assets/images/17.1.webp';
import pro18 from '../../assets/images/18.1.webp';
import pro19 from '../../assets/images/19.1.webp';
import {
    Anh1,
    Content,
    Q,
    E,
    W,
    H4,
    Box4,
    KhungGiay,
    TuiXach,
    Quote,
    H2,
    Box5,
    Tree,
    Box6,
    NewsLetter,
} from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';


const Trang_chu = () => {

    
    return (
        <section>
            <Anh1 src={anh1}></Anh1>
            <Content>
                <h1>
                    NEW ARRIVAL: THE "READER'S REST"
                    <br />
                    BY BOOK/SHOP X GLOR
                </h1>
                <button className="button">SHOP NOW</button>
                </Content>
            <Q>
                <img src={anh2} alt=""/>
                <p>Our latest product gives you a cozy & colorful heads-up when reading on the floor. Made of vintage
                Moroccan textiles and stuffed with organic buckwheat, it's almost <em>too</em> comfortable for reading.
                </p>
            </Q>
            <W>
                <img src={anh3} alt=""/>
                <div>
                    <h2>
                        <em> POETRY AND DRAMA TEE </em>
                    </h2>
                    <p>New cut, new cloth, same Drama. Our collaboration with McSwain Studio is back in stock with an
                        updated style in thick, soft 100% cotton.</p>
                    <button>SHOP NOW</button>
                </div>
            </W>
            <E>
                <img src={anh4} alt=""/>
                <div>
                    <h3>THE LIBRERO 'OAKLAND'</h3>
                    <p>We're pleased to announce our signature wood bookcases are now being produced <br/> exclusively by
                    distinguished design brand Santa & Cole.</p>
                    <div className='bt '> 
                        <button>Shop the Librero Oakland</button>
                    </div>
                </div>
            </E>
            <H4>
                FURNATURE
            </H4>
            
            <SliderComponent arrImages={[
                { src: pro9_1, title: 'HECTOR TABLE LAMP BY ORIGINAL BTC', price: '$ 479.00' },
                { src: pro3_1, title: 'SSB-2 in Pure Orange', price: '$ 298.00' },
                { src: pro3, title: 'Librero Oakland by Book/Shop for Santa & Cole (Walnut)', price: '$ 198.00' },
                { src: pro4, title: 'SSB-2 in Black White', price: '$150.00' },
                { src: pro5_1, title: 'LBR-1 in SOLID WALNUT', price: '$ 2.250.00' },
                { src: pro6_1, title: 'LBR-2 in SOLID ASH', price: '$ 495.00' },
                { src: pro7_1, title: 'Librero Oakland by Book/Shop for Santa & Cole (Birch)', price: '$ 380.00' },
                { src: pro2_1, title: 'SSB-2 in Pure Orange', price: '$ 150.00' },
            ]} />

            <Box4 class="box4">
                <img src={giay1} alt=""/>
                <div>
                    <h2>
                        The Book/Shop Library Slipper
                    </h2>
                    <p>Our exclusive collaboration with shoemakers Stubbs & Wootton.  Mens & Womens sizing available. Beautifully made & embroidered in Spain.</p>
                </div>
            </Box4>

            <KhungGiay>
                <div class="anhtrai">
                    <img src={giayXanh} alt=""/>
                    <div class="bentrong">
                    <h5 class="aa">LIBRARY SLIPPER (WOMEN)</h5>
                    <p class="bb">Shop Now</p>
                    </div>
                </div>
                <div class="anhphai">
                    <img src={giayDen} alt=""/>
                    <div class="bentrong">
                    <h5 class="cc">LIBRARY SLIPPER (MEN)</h5>
                    <p class="dd">Shop Now</p>
                    </div>
                </div>
            </KhungGiay>

            <TuiXach>
                <img src={tuiXach} alt=""/>
            </TuiXach>

            <Quote>
                <h3>OUR SIGNATURE BOOKBAG: THE CISTA</h3>
                <p>Introducing a new finish for our favorite bit of book luggage, The Cista. The natural canvas from our original natural-canvas version is turned a rich Navy blue with sulfur dye and a high temperature wash to prevent color transfer. The leather strapping is given a rich sheen with natural oils and the deep black is the result of tannins extracted from the bark of mimosa trees. Hand sewn in Japan to exacting standards, these bags are true works of Japanese craft. Made in small runs exclusively for Book/Shop.</p>
                <button>SHOP THE CISTA BOOKBAG</button>
            </Quote>

            <H2>ACCESSORIES</H2>

            <SliderComponent arrImages={[
                { src: pro11, title: 'HECTOR TABLE LAMP BY ORIGINAL BTC', price: '$ 479.00' },
                { src: pro18, title: 'SSB-2 in Pure Orange', price: '$ 298.00' },
                { src: pro13, title: 'Librero Oakland by Book/Shop for Santa & Cole (Walnut)', price: '$ 198.00' },
                { src: pro14, title: 'SSB-2 in Black White', price: '$150.00' },
                { src: pro15, title: 'LBR-1 in SOLID WALNUT', price: '$ 2.250.00' },
                { src: pro16, title: 'LBR-2 in SOLID ASH', price: '$ 495.00' },
                { src: pro17, title: 'Librero Oakland by Book/Shop for Santa & Cole (Birch)', price: '$ 380.00' },
                { src: pro19, title: 'SSB-2 in Pure Orange', price: '$ 150.00' },
            ]} />

            <Box5>
                <p>
                    "If I were asked to say what is at once the most important production of art and the thing to be most longed for, I should answer, a beautiful House; and if I were further asked to name the production next in importance and the thing next to be longed for, I should answer, a beautiful Book. To enjoy good houses and good books in self-respect and decent comfort, seems to me to be the pleasurable end towards which all societies of human beings ought now to struggle."
                    <br/><br/> - William Morris
                </p>
            </Box5>

            <Tree>
                <img src={viewStore} alt=""/>
            </Tree>

            <Box6>
                <h2>VISIT OUR NEW SHOP</h2>
                <p>Come see us in historic Old Oakland. Shop the latest new book arrivals first, find shop-only vintage pieces and artwork, try our apparel selection for size and more.</p>
            </Box6>

            <NewsLetter style={{ backgroundImage: `url(${backgroundFooter})` }}>
                <div className="newstext">
                    <h4>Sign Up For Newsletters</h4>
                    <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
                </div>
                <div className="form">
                    <input type="text" placeholder="Your email address..." />
                    <button>Sign Up</button>
                </div>
            </NewsLetter>

        </section>
    );
};

export default Trang_chu;
