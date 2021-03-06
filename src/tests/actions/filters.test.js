import { setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount } from '../../actions/filters';
import moment from 'moment'

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({ type: 'SET_START_DATE', startDate: moment(0)});
})


test('should generate end date action object', () => {
    const action = setEndDate(moment(1000));
    expect(action).toEqual({ type: 'SET_END_DATE', endDate: moment(1000)});
})


test('should generate text filter action object with text value', () => {
    const text = 'Rent'
    const action = setTextFilter(text);
    expect(action).toEqual({ type: 'SET_TEXT_FILTER', text: text});
})

test('should generate text filter action object', () => {
    const action = setTextFilter();
    expect(action).toEqual({ type: 'SET_TEXT_FILTER', text: ''});
})


test('should generate sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({ type: 'SORT_BY_DATE'})
})

test('should generate sort by amount action object', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT'}) // could also save time and write it this way 
})