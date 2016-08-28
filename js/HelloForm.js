//https://github.com/JedWatson/react-select
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
				<Select
						name="form-field-name"
						value="one"
						options={options}
						autofocus={true}
						searchable={true}
						openOnFocus={true}
						onChange={this.logChange}
				/>

		)
	}
}

export default DropdownSelectionExample