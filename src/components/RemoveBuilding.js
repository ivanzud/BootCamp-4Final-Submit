import React, { Component } from 'react';

class RemoveBuilding extends Component {
    render() {
        const {selectedBuilding, removeBuilding } = this.props;


        return (
            <button className="btn btn-danger" style={{margin: 5 + 'px'}}
                onClick={() => {removeBuilding(selectedBuilding)}}
            >
                Remove Building
            </button>
        );
    }
}

export default RemoveBuilding;
