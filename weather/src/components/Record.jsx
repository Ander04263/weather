import React, {Component} from 'react';
import getUrlRecord from '../services/getUrlRecord';

class Record extends Component {
   constructor(props){
      super(props);
      this.state = {
         data: [],
      };
   }
    componentDidMount()
    {
       this.handleUpdateClick();
    }
     handleUpdateClick = () => {
     const api_weather = getUrlRecord()

     fetch(api_weather).then( resolve =>
      {
         return resolve.json();
      }).then(data => {
         this.setState({
            data: data,
         });
      });
  }
  render()
   {
    const listItems = this.state.data.map((number,idx) =>
    <tr key={idx}><td>{number.city}</td>
    <td>{number.lat}</td>
    <td>{number.lon}</td>
    <td>{number.humidity}</td>
    <td>{number.created_at}</td></tr>       
  );
    return(
        <table className="table">
            <thead>
                <tr>
                <th scope="col">City</th>
                <th scope="col">Lat</th>
                <th scope="col">Lon</th>
                <th scope="col">Humidity</th>
                <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </table>
      );
    
   }
 }

 export default Record;