import counter from './reducers/counter.js'
import userInfo from './reducers/userInfo.js'
export default function combineReducres(state={},action){
	return {
		counter:counter(state.counter,action),
		userInfo:userInfo(state.userInfo,action)
	}
}