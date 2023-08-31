import React from 'react';
import './blog.css'
import backgroundFooter from '../../assets/images/backgound2.jpg';
import backgroundHeader from '../../assets/images/book_background.jpg';
import blog1 from '../../assets/images/blog1.jpg';
import blog2 from '../../assets/images/blog2.jpg';
import blog3 from '../../assets/images/blog3.jpg';
import blog4 from '../../assets/images/blog4.jpg';
import blog5 from '../../assets/images/blog5.jpg';
import blog6 from '../../assets/images/blog6.jpg';
import blog7 from '../../assets/images/blog7.jpg';
import blog8 from '../../assets/images/blog8.jpg';

const Blog = () => {
    return (
        <>
            <section id="page_header" style={{backgroundImage: `url(${backgroundHeader})`}}>
                <h1>#readmore</h1>
                <p> Read all case studies about our product! </p>
            </section>
            <section id="blog">
            <div className="blog_box">
                <div className="blog_img">
                    <img src={blog1} alt=""/>
                </div>
                <div className="blog_details">
                    <h4>ONE GREAT READER, SERIES 3, NO. 15: ADRIAN DANNATT</h4>
                    <p>We're very pleased to have writer, curator, artist, and critic Adrian Dannatt as our guest for the final interview of One Great Reader, Series 3. We've been fans of his insider view of all things art-world since coming across his column for The Art Newspaper in the early 2000s. His tone is that of an endlessly curious, self-effacing bon vivant; gossipy, knowing, literate, and with a touch of theatric English flourish. In other words, good fun. Click to read more...</p>
                    <a href="blog2.html">Read more</a> 
                </div>
                <h1>2 7 / 0 8</h1> 
            </div>
            <div className="blog_box">
                <div className="blog_img">
                    <img src={blog2} alt=""/>
                </div>
                <div className="blog_details">
                    <h4>ONE GREAT READER, SERIES 3, NO. 14: KATRIEN DE BLAUWER</h4>
                    <p>Collage is an art form usually made by cutting up books & magazines, but we like it anyway. :) Belgian artist Katrien De Blauwer makes collage with directness and simplicity, turning disparate moments into small monuments of tenderness, strength, and sophistication. We think good books do that too, so it's no wonder we find so much to like in Katrien's conversation with interviewer Wes Del Val for this week's installment of One Great Reader. Click to read more...
                    </p>
                    <a href="blog1.html">Read more</a> 
                </div>
                <h1>0 5 / 0 2</h1> 
            </div>
            <div className="blog_box">
                <div className="blog_img">
                    <img src={blog3} alt=""/>
                </div>
                <div className="blog_details">
                    <h4>ONE GREAT READER, SERIES 3, NO. 13: RACHEL TASHJIAN</h4>
                    <p>Fashion can be over-serious, mysterious, and pretentious. Fashion writers can walk both paths as well, and GQ magazine writer Rachel Tashjian excels at channeling the latter. Interviewer Wes Del Wal finds that energy contagious in this week's installment of One Great Reader, which overflows with recommendations of colorful things to read and people to learn about. Click to read more...</p>
                    <a href="blog3.html">Read more</a> 
                </div>
                <h1>2 5 / 0 4</h1> 
            </div>
            <div className="blog_box">
                <div className="blog_img">
                    <img src={blog4} alt=""/>
                </div>
                <div className="blog_details">
                    <h4>ONE GREAT READER, SERIES 3, NO. 12: JULIE PEETERS</h4>
                    <p>For some people, a book is just words, delivered on pages. For people like Brussels-based designer Julie Peeters (and for us, needless to say), a book is also everything else that makes a book; from its paper, binding and printing quality, to its feel in the hand, beauty for the eye, and conceptual originality. In this week's One Great Reader, interviewer Wes Del Val asks Peeters to share the books that have educated her own vision and trained her exacting eye. Click to read more...</p>
                    <a href="blog4.html">Read more</a> 
                </div>
                <h1>0 9 / 0 4</h1> 
            </div>
            <div className="blog_box">
                <div className="blog_img">
                    <img src={blog5} alt=""/>
                </div>
                <div className="blog_details">
                    <h4>ONE GREAT READER, SERIES 3, NO. 11: LILI ANOLIK</h4>
                    <p>There remains a lingering mystique over the bohemian L.A. of the 1970s, even though so many of its bright dreams ended in all-too-human disillusionment or tragedy. But it's probably that combination of limelight & darkness that creates the period's fascination. It's a contrast especially well served by writer Lili Anolik, who among other feats many readers are thankful for, brought Eve Babitz back to public attention. In this week's installment of One Great Reader with Wes Del Val, Lili shares her surprising childhood reading experiences and tells us why Bennington in the 1980's was sexy (in a literary way). Click to read more...
                    </p>
                    <a href="blog5.html">Read more</a> 
                </div>
                <h1>0 4 / 1 1</h1> 
            </div>
            <div className="blog_box">
                <div className="blog_img">
                    <img src={blog6} alt=""/>
                </div>
                <div className="blog_details">
                    <h4>ONE GREAT READER, SERIES 3, NO. 10: PAUL GORMAN</h4>
                    <p>We love Paul's work, which covers that glamorous and entertainingly seedy intersection where rock, fashion, and commerce meet, and we can't help but recognize him as our kind of person when he says "Second-hand books have been my life-blood since my early teens". Amen to that, Paul (plus, we didn't think anyone but us read The Oldie. Bravo to that.) Interviewer Wes Del Val brings us possibly our longest One Great Reader to date, & it's pure fun the whole way. Click to read more..</p>
                    <a href="blog6.html">Read more</a> 
                </div>
                <h1>1 1 / 1 1</h1> 
            </div>
            <div className="blog_box">
                <div className="blog_img">
                    <img src={blog7} alt=""/>
                </div>
                <div className="blog_details">
                    <h4>ONE GREAT READER, SERIES 3, NO. 9: GEOFFREY O'BRIEN</h4>
                    <p> For 25 years, Geoffrey O'Brien tackled that task at the Library of America, an incredibly ambitious project started in 1982 (and continuing to this day). It makes sense that doing that kind of editorial work for a quarter-century means ending up with good stories to tell and good recommendations to make, and we're pleased that Geoffrey has shared both in this week's installment of One Great Reader with interviewer Wes Del Val. Click to read more...
                    </p>
                    <a href="blog7.html">Read more</a> 
                </div>
                <h1>0 5 / 0 1</h1> 
            </div>
            <div className="blog_box">
                <div className="blog_img">
                    <img src={blog8} alt=""/>
                </div>
                <div className="blog_details">
                    <h4>
                        ONE GREAT READER, SERIES 3, NO. 7: JOSIAH WOLFSON                    
                    </h4>
                    <p>Josiah Wolfson is the proprietor of Aeon Books in New York City. It's a small shop in a Lower East Side basement, but it has a big heart and a strong point of view. All things any good bookstore needs to be. Josiah shares a peek behind the curtain with interviewer Wes Del Val in this week's installment of One Great Reader. Click to read more...

                    </p>
                    <a href="blog8.html">Read more</a> 
                </div>
                <h1>0 7 / 0 3</h1> 
            </div>
        </section>
        <section id="newsletter" class="section_p1" style={{backgroundImage: `url(${backgroundFooter})`}}>
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
    );
};
export default Blog;
