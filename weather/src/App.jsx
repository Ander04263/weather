import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Select from './components/Select'
import WeatherLocation from './components/WeatherLocation'
import Maps from './components/Maps'
import Record from './components/Record';
class App extends Component {
    constructor()
    {
      super();
      this.state = { 
        city: '',
        lat: 10,
        lon: 10 };
    }
     handleSelectedLocation = city => {
       this.setState({ city });
      console.log(`handleSelectedlocation ${city}`);
    }
    handleSelected = (lat,lon) => {
      this.setState({ lat: lat, lon: lon  });
     console.log(`handleSelectedlocation ${lat} y  ${lon}`);
   }
    render(){
      
      return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-8 col-xs-12 col-sm-12 col-md-12 border">
                    <h1 className="text-center mt-3">Weather App</h1>
                        <Select city={this.state.city} onSelectedLocation={this.handleSelectedLocation}></Select>
                        <WeatherLocation city={this.state.city} onSelectedLocation={this.handleSelectedLocation}></WeatherLocation>
                        <Maps  latitud={this.state.lat} longitud={this.state.lon}></Maps>
                    </div>
            <div className="col-lg-4 col-xs-12 col-sm-12 col-md-12 border">
                    <h1 className="text-center  mt-3">Record Consulting</h1>
                        <Record></Record>
            </div>
            
            </div>
    </div>
         
      );
    }
      
    };


export default App