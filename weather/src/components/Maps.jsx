import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";
class Maps extends Component {
  render() {
    return (

      <div className="container">
        <GoogleMaps
          apiKey={"AIzaSyAIoaqD6zupornIMbdYcAfDaTSHjAjFWJ4"}
          style={{ height: "400px", width: "100%" }}
          zoom={12}
          center={{
            lat: 40.4127355,
            lng: -3.695428
          }}
          markers={[
          ]}
        />
      </div>
    );
  }
}
export default Maps