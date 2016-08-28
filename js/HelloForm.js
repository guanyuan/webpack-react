import React, { Component } from 'react'
import Select from 'react-select';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';
var options = [
	{ value: 'one', label: 'One' },
	{ value: 'two', label: 'Two' }
];


class DropdownSelectionExample extends Component {

	logChange (val) {
		console.log(val);
}
	render() {
		return (
				<div>
					<Select
							name="form-field-name"
							value="one"
							options={options}
							onChange={this.logChange}
					/>
				</div>

		)
	}
}

export default DropdownSelectionExample