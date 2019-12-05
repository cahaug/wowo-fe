
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from 'react-dates';

class Schedule extends Component {
    state = {  }





    render() { 
        return ( <div className='s'>
            <SingleDatePicker
  date={this.state.date} // momentPropTypes.momentObj or null
  onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
  focused={this.state.focused} // PropTypes.bool
  onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
  id="your_unique_id" // PropTypes.string.isRequired,
/></div>

         );
    }
}
 
export default Schedule;