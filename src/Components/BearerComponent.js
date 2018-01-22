import React, { Component } from 'react'


const SubComponent = (props) => {
    console.log("SubComponentttt");
    console.log(props);
    const itemList = props.names;
    console.log("Prop.Names",props.names);
    const listItems = itemList.map((value, index,array) =>
       
            <div className = "col-lg-3 col-md-6 mb-5 mb-lg-0 bearer-names-content" key = {index}>
            <h4>
              <strong>{value.bearer}</strong>
            </h4>
            <p className="text-faded mb-0">{value.desc}</p>
            </div>
        
    );
    console.log('ListItemss',listItems);
    return listItems;
}

export default class BearerComponent extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <section className="content-section bg-primary text-white text-center" id="services">
      <div className="container">
        <div className="content-section-heading">
          <h2 className="mb-5">{this.props.sectionname}</h2>
        </div>
        <div className="row">
        <SubComponent names = {this.props.name}/>
        
        </div>
      </div>
    </section>
            </div>
        )
    }
}
