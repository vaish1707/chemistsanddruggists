import React, { Component } from 'react';
import $ from 'jquery';
class NavBarComponent extends Component {


    constructor(props) {
        super(props);
        console.log(this.props);
        this.openSideBar = this.openSideBar.bind(this);
        this.scrollToOption = this.scrollToOption.bind(this);
    }

    openSideBar(){
        console.log('open side bar');
        $("#sidebar-wrapper").toggleClass("active");
        $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
        $(this).toggleClass("active");
        
    }

    scrollToOption(e,id) {
        let useragent =window.navigator.userAgent;

        switch(e) {
            case 'about-us' : 
            ((useragent.includes('Android')) || (useragent.includes('iPhone'))) ? 
            $("html, body").animate({ scrollTop:  $('body').height() + 100 }, 600) : $("html, body").animate({ scrollTop:  $('body').height() }, 600);
            break;
            case 'contact' :
             ((useragent.includes('Android')) || (useragent.includes('iPhone'))) ? 
            $("html, body").animate({ scrollTop:  7000 }, 600) : $("html, body").animate({ scrollTop:  3000 }, 600); 
            break;
            case 'bearer' :
            ((useragent.includes('Android')) || (useragent.includes('iPhone'))) ? 
            $("html, body").animate({ scrollTop:  1510 }, 600) : $("html, body").animate({ scrollTop:  1300 }, 600);
            break;
            case 'home' :
            $("html, body").animate({ scrollTop:  0 }, 600);
            break;
        }
    let scrollId = "#" + e;
    console.log('Eventt',e);
    
    }


    render() {
        return (<div className="banner">
            <a className="menu-toggle rounded" onClick={this.openSideBar.bind(this)}>
                <i className="fa fa-bars"></i>
            </a><nav id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a className="js-scroll-trigger" href="#page-top">Step In for More Options !!</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" onClick={this.scrollToOption.bind(this,"home")}>Home</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" onClick={this.scrollToOption.bind(this,"about-us")}>About</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" onClick={this.scrollToOption.bind(this,"bearer")}>Office Bearer Members</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" onClick={this.scrollToOption.bind(this,"contact")}>Contact Us</a>
                    </li>
                </ul>
            </nav>
            <div>
            <div className="masthead d-flex">
                <div className="container text-center my-auto">
                <div className="banner-logo">
                        <img alt="ChemistandDruggist"
                        src= "/images/logo.png" width="150" height="120">
                        </img>
                    </div>
                    <h3 className="mb-1">{this.props.title}</h3>
                    <h5 className="frontfont">
                        Chennai District (Estd 1926 / Regd No. 6/1944/45)
                    </h5>
                    <h5 className="frontfont">
                        {this.props.tag}
                    </h5>
                    <a className="btn btn-primary btn-xl js-scroll-trigger" onClick={this.scrollToOption.bind(this,"about-us")}>{this.props.stepIn}</a>
                </div>
                <div className="overlay"></div>
            </div>
            </div></div>)
    }

}

export default NavBarComponent;