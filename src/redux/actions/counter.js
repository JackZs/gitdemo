export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT = 'counter/DECREMENT'
export const RESET ='counter/RESET'
export function increment() {
	return {type:INCREMENT}
}
export function decrement(argument) {
	return {type:DECREMENT}
}
export function reset(argument) {
	return {type:RESET}
}