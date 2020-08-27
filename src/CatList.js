import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './CatList.css';

class DogList extends Component{
    render(){
        return(
            <div className="CatList">
                <h1 className="display-1 text-center">Cat List!</h1>
               
                    <div className="row">
                    {this.props.pets.map(p =>(
                        <div className="Cat col-md-6 col-lg-4 text-center" key={p.name}>
                        <img src={p.src} alt={p.name} />
                        <h3 className='mt-3'>
                        <Link className='underline' to={`/cats/${p.name}`}>
                        {p.name}
                        </Link>
                        </h3>
                        

                        </div>
                        ))}
                    </div>
                </div>
           
        )
    }
}

export default DogList;