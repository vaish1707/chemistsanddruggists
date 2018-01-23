import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

let h = "";

const Dummy = (prop) => {
    return (
        <div id={prop.pid}>
            <p>Lorem ipsum dolor sit amet, postea alienum sensibus usu ex, ex usu eros copiosae convenire. Et pro omnis prompta assentior, ex vim zril laudem, sea quem pericula ut. Illum possim ne vim, mei cu clita splendide comprehensam. An eum case delenit accusam.
Per ne ludus tollit, amet appetere verterem eum ne, in cum hendrerit delicatissimi. Dolorem petentium duo id. Movet verear accumsan ea pro, at elit vidit senserit mei. Cu veniam senserit dissentiunt eos, solum audire propriae cu sea. No vis everti consulatu vituperatoribus, tale latine eu vis.
Atqui debet honestatis pri cu, eam ut melius tibique consetetur, mei eu libris euismod inimicus. Te mel invenire dignissim maiestatis, unum soluta ne sed, in diam alterum accusata usu. Deleniti temporibus vituperatoribus eam ei, usu malis scripserit ad, eos id magna consulatu forensibus. Putent detracto electram ius ex.
No veniam vivendum sit. Pri ei fabulas corrumpit, ut mei erat electram. Dolorem molestiae splendide cu sea. In mel eruditi euripidis. Sea cu diceret fierent pertinacia. Sit reque ocurreret id, pri semper intellegat id.
Vix id propriae eleifend, ius ancillae imperdiet vituperata ad, ius ornatus dolores suavitate et. Ea cum harum legimus moderatius. Ex wisi inani nullam per, vel ea adhuc phaedrum. Novum malorum ancillae ne cum, elitr accommodare eos ut. Ut eloquentiam vituperatoribus pro.</p>
        </div>
    )
}

 let handleClick=(event, value)=> {
    var rect = ReactDOM.findDOMNode(value)
    .getBoundingClientRect();
    console.log(rect);
    console.log($(element).offset(event).top);
    let element = `#${value}`;
 //   let offset = $(element).offset().bind(this)
   
   

    $('html, body').animate({
        scrollTop: $(element).height()
    }, 600);
}


const LinkRef = (prop) => {
    let item = prop.list.map((v, i, a) => {
        let val = v.toUpperCase();
        return (
            <a style={{ margin: 20, fontSize: 18, fontStyle: 'bold', cursor: 'pointer' }}
                key={i}
                onClick={e => handleClick(e, v)}>
                {val}
            </a>)
    })
    return (<div>{item}</div>);
}

const createDummyList = (list) =>{
    console.log('list',list);
    //let dummyItem = [];
      let dummyItem = list.map((v,i,a)=>{
        return(
            <Dummy key={i} pid="first" />
        )
    })
    return(<div>{dummyItem}</div>)
}

let linkList = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth'];

class ScrollComponent extends Component {
   componentDidMount(){
    var rect = ReactDOM.findDOMNode(this)
    .getBoundingClientRect();
    console.log(rect);
   }
    render() {
        return (
            <div>
                <p>ScrollComponent</p>
                <LinkRef list={linkList} />
                {createDummyList(linkList)}
                {/* <Dummy pid="first" />
                <Dummy pid="second" />
                <Dummy pid="third" />
                <Dummy pid="fourth" />
                <Dummy pid="fifth" />
                <Dummy pid="sixth" />
                <Dummy pid="seventh" />
                <Dummy pid="eighth" />
                <Dummy pid="ninth" /> */}
            </div>
        );
    }
}

export default ScrollComponent;