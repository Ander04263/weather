import React, {Component} from 'react';
import getUrlWeatherbyCiTy from '../services/getUrlWeatherByCity'

class WeatherLocation extends Component {
   constructor(props){
      super(props);
      var { city } = this.props;
      this.state = {
         city,
         name: null,
         lat: 0,
         lon: 0,
         humidity: null
      };
   }
    componentDidUpdate(prevProps) {
      // Uso tipico (no olvides de comparar las props):
      console.log(prevProps)
      if (this.props !== prevProps) {
         this.handleUpdateClick();
      }
    }
     handleUpdateClick = () => {

     const api_weather = getUrlWeatherbyCiTy(this.props.city);
     fetch(api_weather).then( resolve =>
      {
         return resolve.json();
      }).then(data => {
         this.setState({
            city: this.props.city,
            name: data.name,
            lat: data.lat,
            lon: data.lon,
            humidity: data.humidity
         });
      });
  }
  render()
   {
    return(
      <div>
         <table className="table">
         <thead>
         <tr>
            <th scope="col">City</th>
            <th scope="col">Lat</th>
            <th scope="col">Lon</th>
            <th scope="col">Humidity</th>
         </tr>
         </thead>
         <tbody>
         <tr>
            <td>{this.state.name}</td>
            <td>{this.state.lat}</td>
            <td>{this.state.lon}</td>
            <td>{this.state.humidity}</td>
         </tr>
         </tbody>
      </table>
    </div>
    );
   }
 }

 export default WeatherLocation;