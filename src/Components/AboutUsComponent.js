import React, { Component } from 'react';
import '../index.css';

class AboutUsComponent extends Component {

    constructor(props) {
        super(props);
        this.readMore = this.readMore.bind(this);
    }

    readMore() {
        console.log("Readmore");

    }

    render() {
        return (<div className="about-us-content" id="about">
            <header className="masthead d-flex">
                <div className="container text-center my-auto">
                    <h1 className="mb-1">About Us</h1>
                    <p className="aboutus-text">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
</p>
                    <a className="btn btn-primary btn-xl js-scroll-trigger" onClick={this.readMore.bind(this)} href="/test.pdf">Read More</a>
                </div>
                <div className="overlay"></div>
            </header>
        </div>)

    }
}

export default AboutUsComponent;