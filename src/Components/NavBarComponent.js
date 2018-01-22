import React, { Component } from 'react';
import $ from 'jquery';
class NavBarComponent extends Component {


    constructor(props) {
        super(props);
        console.log(this.props);
        this.openSideBar = this.openSideBar.bind(this);
    }

    openSideBar(){
        console.log('open side bar');
        $("#sidebar-wrapper").toggleClass("active");
        $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
        $(this).toggleClass("active");
        
    }


    render() {
        return (<div className="banner">
            <a className="menu-toggle rounded" onClick={this.openSideBar.bind(this)}>
                <i className="fa fa-bars"></i>
            </a><nav id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a className="js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#page-top">Home</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#about">About</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#services">Services</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <div>
            <div className="masthead d-flex">
                <div className="container text-center my-auto">
                <div className="banner-logo">
                        <img alt="ChemistandDruggist"
                        src="http://www.wlac.org/assets/siteDesq/5223/gallery/capital-chemist-logo.png">
                        </img>
                    </div>
                    <h3 className="mb-1">{this.props.title}</h3>
                   
                    <h5 className="mb-5">
                        {this.props.tag}
                    </h5>
                    <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">{this.props.stepIn}</a>
                </div>
                <div className="overlay"></div>
            </div>
            </div></div>)
    }

}

export default NavBarComponent;