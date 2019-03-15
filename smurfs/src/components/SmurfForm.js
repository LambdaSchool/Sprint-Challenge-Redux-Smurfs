import React from 'react';
import { connect } from 'react-redux';

import {addSmurf} from '../actions/index';

class SmurfForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    };

    inputHandler = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addSmurf(this.state);
    }


    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input name="name" placeholder="name" value={this.state.name} onChange={this.inputHandler} />
                    <input name="age" placeholder="age" value={this.state.age} onChange={this.inputHandler}/>
                    <input name="height" placeholder="height" value={this.state.email} onChange={this.inputHandler}/>
                    <input type="submit" value="Create Smurf"/>
                </form>
            </div>
        )
    }
};

export default connect(() => ({}), { addSmurf })(SmurfForm);