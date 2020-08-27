import React, { Component } from 'react'
import './CatDetails.css';
import {Link} from 'react-router-dom';

class CatDetails extends Component{
    render(){
        let {pet} = this.props;
        return(
           
            <div className="CatDetails row justify-content-center">
            <div className="col-11 col-lg-5">
                <div className="card CatDetails-card">
                    <img className='card-img-top card-img-center' src={pet.src} alt={pet.name} />
                    <div className='card-body'>
                    <h2 className='card-title text-center'>
                        {pet.name}
                    </h2>
                    <h4 className='card-subtitle text-muted'>
                       {pet.age} years old 
                    </h4>

                    </div>
                    <ul className="list-group list-group-flush">
                        {pet.facts.map((fact, i) => (
                        <li className="list-group-item" key={i}>{fact}</li>
                        ))}
                    </ul>
                    <div className="card-body text-center">
                       <Link to='/cats' className='btn btn-info'>Go Back</Link> 
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default CatDetails;