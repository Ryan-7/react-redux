import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        console.log("the props the form received in this instance:")
        console.log(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),         // the date/time when the page is loaded
            calendarFocused: false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description: description
        }));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({
            note: note
        }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({
                amount: amount
            }))
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({
                createdAt: createdAt
            }))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            calendarFocused: focused
        }))
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: 'Please provide description and amount'
            }));
        } else {
            this.setState(() => ({
                error: ''
            }));

            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100, // format the number into just cents (no decimals)
                createdAt: this.state.createdAt.valueOf(), // use moment to set date to a number (milliseconds since epoch)
                note: this.state.note,
            });
        }
    }

    // onRemoveExpense = () => {
    //   //  this.props.removeExpense();
    //   console.log('works')
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Description" 
                        autoFocus 
                        value={this.state.description} 
                        onChange={this.onDescriptionChange} 
                    />
                    <input 
                        type="text" 
                        placeholder="Amount" 
                        value={this.state.amount}
                        onChange = {this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false} // pick days in the past / future 
                    
                    />

                    <textarea 
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange} 
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
                <button hidden={!this.props.expense} onClick={this.props.removeExpense}>Remove</button>
            </div>
        )
    }
}


