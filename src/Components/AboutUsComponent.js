import React, {Component} from 'react';
import '../index.css';

class AboutUsComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="about-us-content">
            <header className="masthead d-flex">
                <div className="container text-center my-auto">
                    <h1 className="mb-1">About Us</h1>
                    <p className="aboutus-text">
                        Who We Are?
SenSemColours is the new brainchild and an ambitious startup of Mr. Tamijarassane and Mrs. Gnanasoundary who wants to redefine “PRINTING INK” manufacturing industry by applying a unique blend of innovative services and outstanding customer experiences.

Having started his career in 1998 as a marketing manager with a similar startup, Mr. Tamijarassane, over the period of 19 years has gained an extensive experience in the Printing Ink industry that covered the entire Southern region of India. He also has contributed comprehensively in varied departments such as accounts and technical details in his previous stint in addition to being a marketing manager.

Mr. Tamijarassane himself holds a Bachelor’s degree (1995) in Physics from Pondicherry University whereas his sole partner Mrs. Gnanasoundary holds a Bachelor’s in Zoology (2001) from Krishnaswamy College in Cuddalore, Tamil Nadu.Their new yet vastly experienced (more than 18 years in printing ink manufacturing) team at SenSemColours are formed from the core of wildest dreams combined with positiveness, enthusiasm, business and financial acumen. Thus, promises doing business with them would be a stellar encounter and are very much looking forward to have you onboard.

Our motto - Customer, Company, Team.
</p>
                    
                </div>
                <div className="overlay"></div>
            </header>
        </div>)
        
    }
}

export default AboutUsComponent;