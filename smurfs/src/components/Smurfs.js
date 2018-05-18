import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/index';


class Smurfs extends Component {

    componentDidMount() {
        this.props.fetchSmurfs();
    }

    render() { 
        return ( 
            <div className="smurf-container">
                {this.props.fetchingSmurfs ? (
                    <span>Fetching Smurfs</span>
                ) : (
                    <ul>
                        {this.props.smurfs.map(smurf => {
                            return(
                                <div key={smurf.name + smurf.age} className="smurf-card">
                                    <h2>{smurf.name}</h2>
                                    <h4>{smurf.age}</h4>
                                    <h4>{smurf.height}</h4>
                                </div>
                            ) 
                        })}
                    </ul>
                )}
            </div>
         )
    }
}

const mapStateToProps = state => {
    console.log("STATE:", state)
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs
    }
}
 
export default connect(mapStateToProps, { fetchSmurfs }) (Smurfs);