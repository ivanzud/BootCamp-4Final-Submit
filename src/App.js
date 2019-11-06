import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';
import Data from './data/data.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: null
    };
  }


  filterUpdate(value) {
    this.setState({
      filterText: value
    })
    //Here you will need to set the filterText property of state to the value passed into this function
  }

  selectedUpdate(id) {
    this.setState({
      selectedBuilding: id
    })
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
  }

  removeBuilding(id) {
    if (Data.indexOf(Data.find(object => object.id === id)) >= 0){
        Data.splice(Data.indexOf(Data.find(object => object.id === id)), 1);
      }
    this.setState({
      selectedBuilding: null
    })

  }

  addBuilding = (building) => {
    building.id = Math.floor(Math.random() *100) +1;
    Data.push(building)
    this.setState({
      selectedBuiding: building.id
    })
  }

  render() {

    return (
      <div className="bg container">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
          />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code{' '}Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                data={this.props.data}
                selectedBuilding={this.state.selectedBuilding}
                removeBuilding={this.removeBuilding.bind(this)}
              />
            </div>
          </div>
          <div>
              <AddBuilding
                addBuilding={this.addBuilding.bind(this)}
              />
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
