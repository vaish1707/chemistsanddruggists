import React, { Component } from 'react'

export default class SubBearerComponent extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            <h4>
              <strong>{this.props.name}</strong>
            </h4>
            <p className="text-faded mb-0">{this.props.description}</p>
            </div>
        )
    }
}
