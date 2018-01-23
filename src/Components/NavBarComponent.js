import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
class NavBarComponent extends Component {


    constructor(props) {
        super(props);
        this.openSideBar = this.openSideBar.bind(this);
        this.scrollToOption = this.scrollToOption.bind(this);
        this.scrollToAboutUs = this.scrollToAboutUs.bind(this);
    }

    openSideBar() {
        $("#sidebar-wrapper").toggleClass("active");
        $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    }

  
    scrollToOption(e, id) {
        switch (e) {
            case 'about-us':
                $("html, body").animate({ scrollTop: $('#about').offset().top }, 600);
               this.closeSideBar();
                break;
            case 'contact':
                $("html, body").animate({ scrollTop: $('#contact').offset().top }, 600);
                this.closeSideBar();
                break;
            case 'bearer':
                $("html, body").animate({ scrollTop: $('#bearer').offset().top }, 600);
                this.closeSideBar();
                break;
            case 'home':
                $("html, body").animate({ scrollTop: 0 }, 600);
                this.closeSideBar();
                break;
        }

    }

    closeSideBar(){
        $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
        $("#sidebar-wrapper").removeClass("active");
        $(".menu-toggle").removeClass("active");
    }

    scrollToAboutUs(){
        $("html, body").animate({ scrollTop: $('#about').offset().top }, 600);
    }
 

    render() {
        return (<div className="banner">
            <a className="menu-toggle rounded" onClick={this.openSideBar.bind(this)}>
                <i className="fa fa-bars"></i>
            </a><nav id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a className="js-scroll-trigger scroll-pointer" >Step In for More Options !!</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger scroll-pointer" onClick={this.scrollToOption.bind(this, "home")}>Home</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger scroll-pointer"  onClick={this.scrollToOption.bind(this, "about-us")}>About</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger scroll-pointer"  onClick={this.scrollToOption.bind(this, "bearer")}>Office Bearer Members</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger scroll-pointer"  onClick={this.scrollToOption.bind(this, "contact")}>Contact Us</a>
                    </li>
                </ul>
            </nav>
            <div>
                <div className="masthead d-flex">
                    <div className="container text-center my-auto">
                        <div className="banner-logo">
                            <img alt="ChemistandDruggist"
                                src="/images/logo.png" width="150" height="120">
                            </img>
                        </div>
                        <h3 className="mb-1">{this.props.title}</h3>
                        <h5 className="frontfont">
                            Chennai District (Estd 1926 / Regd No. 6/1944/45)
                    </h5>
                        <h5 className="frontfont">
                            {this.props.tag}
                        </h5>
                        <a className="btn btn-primary btn-xl js-scroll-trigger" onClick={this.scrollToAboutUs.bind(this)}>{this.props.stepIn}</a>
                    </div>
                    <div className="overlay"></div>
                </div>
            </div></div>)
    }

}

export default NavBarComponent;