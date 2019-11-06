import React, { Component } from 'react';

class AddBuilding extends Component {

  constructor(props){
    super(props)
    this.state={
        id: '',
        code: '',
        name: '',
        address: '',
        latitude: '',
        longitude: ''
    };
  }

    handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var newBuilding = {
          id : this.state.id,
          code: this.state.code,
          name: this.state.name,
          address: this.state.address,
          coordinates: {
            longitude: this.state.longitude,
            latitude: this.state.latitude
          }
        }
        this.props.addBuilding(newBuilding)
        this.setState({
          //id: '',
          code: '',
          name: '',
          address: '',
          latitude: '',
          longitude: ''
        })
    }

    render() {
        return (

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h2>Add Building</h2>
                    <label htmlFor="name">Code:</label>
                    <input type="text" id="code" value={this.state.code} onChange={this.handleChange}/>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={this.state.name} onChange={this.handleChange}/>
                    <label htmlFor="name">Address:</label>
                    <input type="text" id="address" value={this.state.address} onChange={this.handleChange}/>
                    <label htmlFor="name">Latitude:</label>
                    <input type="number" id="latitude" value={this.state.latitude} onChange={this.handleChange}/>
                    <label htmlFor="name">Longitude:</label>
                    <input type="number" id="longitude" value={this.state.longitude} onChange={this.handleChange}/>
                    <button>Add Building</button>

                </form>

        )
    }
}

export default AddBuilding;
