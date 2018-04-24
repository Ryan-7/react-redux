import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';


import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props)

        console.log(this.props.filters.startDate)
        console.log(this.props.filters.endDate)
    }

    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => { // these arguments are provided by the library when we select different dates 
         this.props.dispatch(setStartDate(startDate));
         this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => {
            return  { 
                calendarFocused: calendarFocused 
            }    
        })
    }

    render() {
        return (
            <div>
                <input type='text' value={this.props.filters.text} onChange={(e) =>{
                    console.log(e.target.value);
                    this.props.dispatch(setTextFilter(e.target.value))
                }} />
                <select
                    value={this.props.filters.sortBy} 
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate());
                        } else if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount());
                        }
                }}>
                    <option></option>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);


