import React, { Component } from 'react'

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
       
     
    }
    render() {
        return (
            <div>
                <footer className="footer text-center footer-content">
                    <div className="container">
                        <div><p><strong>Registration No : 123456789567</strong></p></div>
                        <div><p>#19, Jeth Nagar First Main Road,
            Mandaveli,Chennai-600028.
        </p>
                        </div>
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
