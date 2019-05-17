import React from 'react';
import { connect } from 'react-redux';
import {  Button,
            Modal,
            ModalHeader,
            ModalBody,
            ModalFooter,
            Input,
            Form,
            FormGroup,
            Tooltip,
            ListGroupItem,
            ListGroupItemHeading,
            ListGroupItemText } from 'reactstrap';

import { updateSmurf, deleteSmurf } from '../actions/index';

class Smurf extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        name: "",
        age: "",
        height: "",
        modal: false,
        tooltipOpen: false,
        tooltipOpenTwo: false,
        tooltipOpenThree: false,
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
        }

        toggleToolTip = () => {
        this.setState({
        tooltipOpen: !this.state.tooltipOpen
        });
    }

        toggleToolTipTwo = () => {
            this.setState({
            tooltipOpenTwo: !this.state.tooltipOpenTwo
            });
        }

        toggleToolTipThree = () => {
        this.setState({
        tooltipOpenThree: !this.state.tooltipOpenThree
        });
    }

        changeHandler = e => this.setState({[e.target.name]: e.target.value});

        clickHandler = () => {
        const smurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }
        this.props.updateSmurf(smurf, this.props.id);
        this.setState({
            name: '',
            age: '',
            height: ''
        })
        this.toggle();
        }

    render() {
    return  <div className="Smurf">
                <ListGroupItem color="info"style={{marginBottom: '5px'}}>
                    <ListGroupItemHeading>{this.props.name}</ListGroupItemHeading>
                    <ListGroupItemText><strong>{this.props.height} tall</strong></ListGroupItemText>
                    <ListGroupItemText>{this.props.age} smurf years old</ListGroupItemText>
                    <ListGroupItemText>
                        <i onClick={this.toggle} className="fas fa-edit"></i>
                        <i onClick={() => this.props.deleteSmurf(this.props.id)} className="fas fa-trash-alt"></i>
                        <i onClick={() => this.props.history.push(`/${this.props.id}`)} className="fas fa-info-circle"></i>
                    </ListGroupItemText>
                </ListGroupItem>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Update Smurf Info</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Input placeholder="Edit smurf's name here"
                                onChange={this.changeHandler} 
                                name="name" 
                                value={this.state.name}>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Edit smurf's age here" 
                                onChange={this.changeHandler} 
                                name="age" 
                                value={this.state.age}>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Edit smurf's height" 
                                onChange={this.changeHandler} 
                                name="height"  
                                value={this.state.height}>
                                </Input>
                            </FormGroup>
                        </Form>  
                    </ModalBody>
                    <ModalFooter>
                        <Button id="update" color="info" onClick={this.clickHandler}>Update Info</Button>
                        <Button id="cancel" color="secondary" onClick={this.toggle}>Cancel</Button>
                        <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="update" toggle={this.toggleToolTip}>
                            Update Info!
                        </Tooltip>
                        <Tooltip placement="bottom" isOpen={this.state.tooltipOpenTwo} target="cancel" toggle={this.toggleToolTipTwo}>
                            Go Back!
                        </Tooltip>
                    </ModalFooter>
                </Modal>
            </div>
    }
};

export default connect(()=>{return{}}, { updateSmurf, deleteSmurf })(Smurf);