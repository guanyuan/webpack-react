import React, { Component } from 'react'
import { Dropdown, Grid, Header } from 'stardust'

const options = [
	{ text: 'English', value: 'English' },
	{ text: 'French', value: 'French' },
	{ text: 'Spanish', value: 'Spanish' },
	{ text: 'German', value: 'German' },
	{ text: 'Chinese', value: 'Chinese' },
]

class DropdownSelectionExample extends Component {
	constructor() {
		super()
		this.state = { optionsSingle: options, optionsMultiple: options }
	}

	handleChangeSingle (e, value) {
		this.setState({ currentValue: value })
	}

	render() {
		const { currentValue, currentValues } = this.state

		return (
				<Grid>
					<Grid.Column width={8}>
						<Header>Single Option</Header>
						<pre>Current value: {currentValue}</pre>
						<Dropdown
								options={this.state.optionsSingle}
								placeholder='请选择产品'
								search
								selection
								fluid
								onChange={this.handleChangeSingle.bind(this)}
						/>
					</Grid.Column>
				</Grid>
		)
	}
}

export default DropdownSelectionExample