import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { Button } from 'reactstrap';
import { updateSmurf } from '../actions/index';
import smurfvillage from './smurfs-village.jpg'
import '../index.css'

class SmurfCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        const smurf = this.props.smurfs.find(smurf => `${smurf.id}` === id);
        this.setState(smurf)
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    handleUpdateSubmit = (event) => {
        event.preventDefault();
        const id = this.props.match.params.id;
        this.props.updateSmurf(id, this.state);
        event.target.reset();

    }

    render() {
        const id = this.props.match.params.id;
        const smurf = this.props.smurfs.find(smurf => `${smurf.id}` === id);
        if (!smurf) {
            return "Loading Smurf"
        }
        return (
            <div className="smurfCard">
                <div>
                    <NavLink className="link" to='/'>
                        <p>Click Here To Go Back To Smurf Village.</p>
                    </NavLink>
                    <form onSubmit={this.handleUpdateSubmit}>
                        <input
                            onChange={this.changeHandler}
                            placeholder="name"
                            value={this.state.name}
                            name="name"
                        />
                        <input
                            onChange={this.changeHandler}
                            placeholder="age"
                            value={this.state.age}
                            name="age"
                        />
                        <input
                            onChange={this.changeHandler}
                            placeholder="height"
                            value={this.state.height}
                            name="height"
                        />
                        <Button outline color="primary" type="submit">Update your Smurf</Button>
                    </form>
                </div>
                <div className="Smurf">
                    <h3>{smurf.name}</h3>
                    <strong>{smurf.height} tall</strong>
                    <p>{smurf.age} smurf years old</p>
                </div>
                <img src={smurfvillage} alt='village' />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        loading: state.loading,
        smurfs: state.smurfs
    };

};

export default connect(
    mapStateToProps,
    {
        updateSmurf
    }
)(SmurfCard);
