import React, { Component } from 'react';
import $ from 'jquery';

export default class FooterComponent extends Component {

    componentDidMount() {

    }

    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidUpdate() {
        
      }

    scrollToTop(e) {
        $("html, body").animate({ scrollTop:  0 }, 600);
     
    }
    render() {
        return (
            <div>
                <footer className="footer text-center footer-content">
                    <div className="container">
                        <div className = "footerFont"><p><strong>Contact us</strong></p></div>
                        <div><p>#6, 3rd Floor, Bhattad Towers, 30 West Cott Road, Royapettah, Chennai - 600014.
        </p>
                        </div>
                        <div><p><strong>Phone : 2851 2926 / 2852 8891</strong></p></div>
                        <p><b>Copyright &copy;2018</b></p>
                    </div>
                </footer>


                <a className="scroll-to-top rounded js-scroll-trigger" onClick={this.scrollToTop.bind(this)}>
                    <i className="fa fa-angle-up"></i>
                </a>
            </div>
        )
    }
}
