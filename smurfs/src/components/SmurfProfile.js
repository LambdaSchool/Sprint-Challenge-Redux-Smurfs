import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader,} from 'reactstrap';
import { connect } from 'react-redux';

const SmurfProfile = props => {
    const smurf = props.smurfs.find(smurf => `${smurf.id}` === props.match.params.id);
    if (!smurf) return null;
    return  <Card color="info" className="text-white">
                <CardBody>
                    <CardHeader>Welcome to {smurf.name}'s Smurf Profile</CardHeader>
                    <CardTitle>I am {smurf.age} smurf years old</CardTitle>
                    <CardSubtitle>My height is {smurf.height}</CardSubtitle>
                    <CardTitle>Some more details about me</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
                        optio omnis qui deleniti, dolore odit temporibus voluptates
                        exercitationem debitis eaque, saepe sed porro voluptatibus provident
                        aliquid cumque facilis ducimus. Accusamus.
                    </CardText>
                </CardBody>
            </Card>
};

const mapStateToProps = state => {
    return {smurfs: state.smurfs}
}

export default connect(mapStateToProps)(SmurfProfile);