import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { connect } from 'react-redux';
import { newSmurf } from '../actions/index';


class AddSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      name: "",
      age: "",
      height: "",
    }
  }

  handleSmurfInput = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    const newSmurf = Object.assign({}, this.state)
    if(newSmurf.name !== ""){
      this.props.newSmurf(newSmurf)
    }  
    
    this.setState({ 
      name: "",
      age: "",
      height: "",
    })

    console.log(newSmurf)
  }


  render() { 
    return (  
      <div className="row justify-content-center mt-4">
        <Form onSubmit={this.handleSubmit} className="col-4">
            <FormGroup>
              <Label for="SmurfName">Name</Label>
              <Input type="text" name="name" id="SmurfName" placeholder="New Name" value={this.state.name} onChange={this.handleSmurfInput}/>
            </FormGroup>
            <FormGroup>
              <Label for="SmurfAge">Age</Label>
              <Input type="text" name="age" id="SmurfAge" placeholder="New Age" value={this.state.age} onChange={this.handleSmurfInput}/>
            </FormGroup>
            <FormGroup>
              <Label for="SmurfHeight">Height</Label>
              <Input type="text" name="height" id="SmurfHeight" placeholder="New Height" value={this.state.height} onChange={this.handleSmurfInput}/>
            </FormGroup>          
            <Button type="submit">Submit</Button>
          </Form>
      </div>
    )
  }
}
 
export default connect(null, { newSmurf })(AddSmurf);