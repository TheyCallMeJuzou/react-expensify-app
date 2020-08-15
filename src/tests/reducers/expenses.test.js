import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set default state', () =>{
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expenses if id not found ', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add expense', () =>{
    const expense = {
        id: '-1',
        description:'testdescription',
        note:'testnote',
        amount:100,
        createdAt: moment()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses.concat(expense))
})

test('should edit an expense', () =>{
    const time = moment().add(1,'day')
    const updates = {
        description:'updateddescription',
        note:'updatednote',
        amount: 1000,
        createdAt: time
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates
    }

    const state = expensesReducer(expenses,action)
    expect(state[1]).toEqual({
        id: expenses[1].id,
        description:'updateddescription',
        note:'updatednote',
        amount: 1000,
        createdAt: time
    })
})

test('should not edit an expense if id not found', () =>{
    const time = moment().add(1,'day')
    const updates = {
        description:'updateddescription',
        note:'updatednote',
        amount: 1000,
        createdAt: time
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '0',
        updates
    }

    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})

test('should set expenses', () =>{
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[1]])
})