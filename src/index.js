import store from './store'

console.log('Initial state: ', store.getState())

const unsubscribe = store.subscribe(() => {
  console.log('State after dispatch: ', store.getState())
})

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers'})
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' })

store.dispatch({ type: 'todos/todoToggled', payload: 0})
store.dispatch({ type: 'todos/todoToggled', payload: 'Learn about stores'})

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'red', changeType: 'added' }
})

unsubscribe()

store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' })