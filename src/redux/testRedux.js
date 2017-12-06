import{increment,decrement,reset} from './actions/counter.js'
import store from './store.js'
console.log(store.getState())
let unsubscribe = store.subscribe(()=> console.log(store.getState()))
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())
// 停止监听 state 更新
unsubscribe();