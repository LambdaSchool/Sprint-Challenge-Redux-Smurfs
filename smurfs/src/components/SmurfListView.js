import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf, deleteSmurf, updateSmurf } from "../actions";
import Smurfs from "./Smurfs";
import CreateSmurfForm from "./CreateSmurfForm";
import DeleteSmurfForm from "./DeleteSmurfForm";
import UpdateSmurfForm from "./UpdateSmurfForm";

class SmurfListView extends React.Component {
    componentDidMount() {
        this.props.fetchSmurfs();
    }

    render() {
        if (this.props.fetchingSmurfs) {
            return <h1>Gargamel can't stop them, the smurfs are on the way...</h1>
        }
        if (this.props.deletingSmurf) {
            return <h1>Well, Gargamel stopped that smurf...</h1>
        }
        return (
            <div>
                <Smurfs smurfs={this.props.smurfs} />
                <CreateSmurfForm addSmurf={this.props.addSmurf} />
                <DeleteSmurfForm deleteSmurf={this.props.deleteSmurf}/>
                <UpdateSmurfForm updateSmurf={this.props.updateSmurf}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        deletingSmurf: state.deletingSmurf,
    }
}

export default connect(
    mapStateToProps,
    { fetchSmurfs, addSmurf, deleteSmurf, updateSmurf }
)(SmurfListView);