import filtersReducer from '../../reducers/filters';
import moment from 'moment';
import filters from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')

    })
})


test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const action = {
        type: 'SORT_BY_DATE'
    }

    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
})

test('should set text filter', () => {
    const text = 'rent'
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: text})

    expect(state.text).toBe(text);
})

test('should set startDate', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment(1000)})
    expect(state.startDate).toEqual(moment(1000));
})

test('should set endDate', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment(5000)})
    expect(state.endDate).toEqual(moment(5000));
})