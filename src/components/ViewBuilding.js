import React from 'react';
import RemoveBuilding from './RemoveBuilding'


class ViewBuilding extends React.Component {
	render() {

		const { data, selectedBuilding } = this.props
		const building = data
		.filter( directory => directory.id === selectedBuilding
		)
		.map( directory => {
			let address = directory.address;
			if (!directory.address) address = null;
			if(selectedBuilding != null){
			if(address != null){
				return (
					<div className="card">
						<h1 className="directoryHeader">
							{directory.name}
						</h1>
						<div className="card">
							<div className = "card-body">
						<ul className="list">
							<p className="ID">ABV:{' '}{directory.code}</p>
							<p className="Address">Address:{address}</p>
							<p className="Latitude">Latitude: {directory.coordinates.latitude}</p>
							<p className="Longitude">Longitude: {directory.coordinates.longitude}</p>
						</ul>
						</div>
						</div>
						<RemoveBuilding
              				data={this.props.data}
              				removeBuilding={this.props.removeBuilding}
              				selectedBuilding={this.props.selectedBuilding}
            			/>
					</div>
				)
			}

			else {
				return(
					<div>None Provided
						<RemoveBuilding
              				data={this.props.data}
              				removeBuilding={this.props.removeBuilding}
              				selectedBuilding={this.props.selectedBuilding}
            			/>
					</div>

				)

			}
		}

		});
		return (
			<div>
					{building}
			</div>
		);
	}
}
export default ViewBuilding;
