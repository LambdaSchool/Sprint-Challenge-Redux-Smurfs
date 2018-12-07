import React, { Component } from 'react';
import { Break, Form, Input,  Button, H2 } from '../styles';

export default class SmurfForm extends Component {
	handleMode = () => {
	if (this.props.mode === 'Update') {
		return this.props.updateSmurf 
	} else {
		return this.props.addSmurf;
	} 
	};

	render() {
		return (
			<React.Fragment>
				<Form mode={this.props.mode} onSubmit={this.handleMode()}>
					<H2>{this.props.mode} a Smurf</H2>
					<Input
						placeholder="Name..."
						name="name"
						type="text"
						value={this.props.name}
						onChange={this.props.handleChange}
					/>
					<Input
						required
						placeholder="Age..."
						name="age"
						type="text"
						value={this.props.age}
						onChange={this.props.handleChange}
					/>
					<Input
						required
						placeholder="Height..."
						name="height"
						type="text"
						value={this.props.height}
						onChange={this.props.handleChange}
					/>
					<Button type="submit">{this.props.mode}</Button>
				</Form>
			</React.Fragment>
		);
	}
}
