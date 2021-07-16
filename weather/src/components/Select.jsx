import React from "react"

class Select extends React.Component {

  constructor(props) {
    super(props);
    const { city } = props;
    this.state = {value: city};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }


  render() {
    const { onSelectedLocation } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label>
          Pick your city:</label>
          <select className="form-control" value={this.state.value} onChange={this.handleChange}>
            <option value="" disabled>Select...</option>  
            <option value="miami">Miami</option>
            <option value="orlando">Orlando</option>
            <option value="new york">New York</option>
          </select>
        
        <input onClick={ () => onSelectedLocation(this.state.value)} className="btn btn-primary float-right m-3" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}


export default Select