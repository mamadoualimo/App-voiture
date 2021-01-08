import React, { Component } from 'react';
import Car from './Cars';

class Mycars extends Component {

    // noCopy = () => {
    //     alert('merci de ne pas copier le texte');
    // }

    // addStyle = (e) => {
    //     if(e.target.classList.contains('styled')) {
    //         e.target.classList.remove('styled');
    //     }else {
    //         e.target.classList.add('styled');
    //     }
    // }

    state = {
        voitures: [
            {name: 'Ford', color: 'red', year: 2000},
            {name: 'Mercedes', color: 'black', year: 2010},
            {name: 'Peugeot', color: 'green', year: 2018},
        ]
    }

    render() {
        return (
        <div>
            <h1 /*onMouseOver={this.addStyle}*/>{this.props.title}</h1> 

            {/* <h2 onCopy={this.noCopy}>Lorem ipsum, dolor sit amet consectetur adipisicing.</h2> */}

            <Car year={"2000"} color="red">Ford</Car>
            <Car color="">Mercedes</Car>
            <Car color="green"></Car>
        </div>
        )
    }
}
export default Mycars;
