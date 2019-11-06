import React from 'react';

class BuilingList extends React.Component {
	render() {
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data
		.filter(building => {
			return building.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1 || building.code.toLowerCase().indexOf(filterText.toLowerCase()) > -1
		}
		).map(directory => {
			return (
				<tr
					key={directory.id}
					onClick={() => {selectedUpdate(directory.id)}}
				>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <tbody>{buildingList}</tbody>;
	}
}
export default BuilingList;
