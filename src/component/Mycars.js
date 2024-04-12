import { Component } from 'react'
import Car from './Cars'


class Mycars extends Component {

    state = {
        voitures: [
            {name: "Ford", color: "Red",  year: 2015},  
            {name: "Mercedes", color: "", year: 2017},
            {name: "Tesla", color: "Black", year: 2022},
            {name: "Range Rover", color: "Green", year:2023}
        ]
    }

    addTenYears = () => {
        const updatedState = this.state.voitures.map((param) =>{
            return param.year -= 10;
        })
        this.setState({
            updatedState
        })
    }

    getAge = year => {
        const now = new Date().getFullYear();
        const age = now - year;

        //ans ou an
        let frenchYearStr = "";
        if (age === 1){
            frenchYearStr = 'an';
        } else if (age > 1){
            frenchYearStr = 'ans';
        }
        return `${age} ${frenchYearStr}`;
    }
    
    
    // bonjour = () => {
    //     console.log("Hello");
    // }

    // bonsoir = arg => {
    //     console.log(arg);
    // }


   

    render() {
        const yearsOld = new Date().getFullYear();
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.addTenYears}>+10 ans</button>

                <Car color = {this.state.voitures[0].color} year = {yearsOld - this.state.voitures[0].year + ' ans'}>{this.state.voitures[0].name}</Car> 
                <Car color = {this.state.voitures[1].color}  year = {yearsOld - this.state.voitures[1].year + ' ans'}>{this.state.voitures[1].name}</Car> 
                <Car color = {this.state.voitures[2].color}  year = {yearsOld - this.state.voitures[2].year +' ans'}>{this.state.voitures[2].name}</Car> 

                {/* <Car year= {"2000"} color="red">Ford</Car>
                <Car>Mercedes</Car>
                <Car color="green"></Car> */}

                {
                    this.state.voitures.map(({name, color, year}, voiture, index, frenchYearStr) => {
                        return( 
                            // <div key={index}>
                            //     <Car color={voiture.color}  year = {yearsOld-voiture.year + ' ans'}>{voiture.name}</Car>
                            // </div>
                            // en destructuring voici ce que ca donne
                            <div key={index}>
                                <Car 
                                    nom={name}
                                    color={color}
                                    year= {yearsOld-year+frenchYearStr}>{name}</Car>
                            </div>

                        )
                    }) 
                }

                {/* <button onClick={this.bonjour}>Invoquer une fonction</button>
                <br/> */}

                {/* <button onClick={() => bonsoir ("Bonsoir")}>Invoquer une fonction avec arg "Bonsoir"</button>
                <br/> */}

                {/* <button onClick={() =>console.log ("Bonne nuit !")}>Console log sur le bouton</button>
                <br/> */}
            </div>
           
        )
    }
}

export default Mycars