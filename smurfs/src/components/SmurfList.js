import React from "react";
import { fetchSmurfs } from '../actions/index'
import Smurf from './Smurf'
import { connect } from 'react-redux'


class SmurfList extends React.Component {

    componentDidMount() {
        this.props.fetchSmurfs()
    }
    
    render() {
    return (
        <div>
            {this.props.loading ? <h1>LOADING....</h1> : null}
            {this.props.error !== null ? <h1>{this.props.error}</h1> : null}
            {this.props.smurfs.map(smurf =>
            <Smurf smurf={smurf} key={smurf.id + smurf.name}/>)}

        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurf.smurfs,
        error: state.smurf.error,
        loading: state.smurf.loading
    }
}
export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);