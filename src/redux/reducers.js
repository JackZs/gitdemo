import counter from './reducers/counter.js'
export default function combineReducres(state={},action){
	return {
		counter:counter(state.counter,action)
	}
}