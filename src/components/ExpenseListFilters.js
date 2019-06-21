import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters'
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates'
class ExpenseListFilters extends React.Component{

    state={
      calendarFocused:null
    };

    onDatesChange=({startDate, endDate})=>{
       this.props.dispatch(setStartDate(startDate));
       this.props.dispatch(setEndDate(endDate))

    }
    onFocusChange=(calendarFocused)=>{

        this.setState(()=>{
            return {
                calendarFocused:calendarFocused
            }
        })
    }
    render(){
        return (

            <div>
            <input type="text" value={this.props.filters.text}
            onChange={(e)=>{
        
                this.props.dispatch(setTextFilter(e.target.value))
                console.log(e.target.value);
                
            }}
            />
            <select 
            onChange={(e)=>{
                if(e.target.value==='date')
                {
                    this.props.dispatch(sortByDate());
                }
                else if(e.target.value==='amount')
                {
                    this.props.dispatch(sortByAmount())
                }
            }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            
            </select>
        
        <DateRangePicker
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        // startDateId="ffdegdg"
        // endDateId="ggd"
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={()=> false}
        
        />
            </div>
        
        )
            
    
    }
}

const mapStateToProps=(state)=>{
    return {
        filters:state.filters,
    }
}

//connecting expenselistfilters to store
export default connect(mapStateToProps)(ExpenseListFilters)    
