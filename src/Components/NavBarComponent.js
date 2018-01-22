import React, { Component } from 'react';

class NavBarComponent extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (<div>
            <a className="menu-toggle rounded" href="#">
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
            <header className="masthead d-flex">
                <div className="container text-center my-auto">
                    <h1 className="mb-1">{this.props.title}</h1>
                    <h3 className="mb-5">
                        <em>{this.props.tag}</em>
                    </h3>
                    <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">{this.props.stepIn}</a>
                </div>
                <div className="overlay"></div>
            </header></div>)
    }

}

export default NavBarComponent;