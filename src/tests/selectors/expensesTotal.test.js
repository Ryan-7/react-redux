import expenses from '../fixtures/expenses';
import expensesTotal from '../../selectors/expensesTotal';

test('should return 0 if no expense', () => {
    const total = expensesTotal([]);
    expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
    const total = expensesTotal([expenses[0]]); // single expense
    expect(total).toBe(195);
})

test('should add up multiple expenses', () => {
    const total = expensesTotal(expenses);
    expect(total).toBe(114195)
})