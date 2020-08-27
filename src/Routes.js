import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import CatList from './CatList';
import CatDetails from './CatDetails';

class Routes extends Component{
    render(){
        const getCat = props => {
            let name = props.match.params.name;
            let currentPet = this.props.pets.find(
              pet => pet.name.toLowerCase() === name.toLowerCase()
            );
            return <CatDetails {...props} pet={currentPet} />}
        return(
            <Switch>
            <Route exact path='/cats' render={() => <CatList pets={this.props.pets}/>} />
            <Route exact path='/cats/:name' render={getCat} />
            <Redirect to='/cats' /> 
            </Switch>
        )
    }
}
export default Routes;