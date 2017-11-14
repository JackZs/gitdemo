var obj1 = { 
	a:function (a,b) {
		return a - b  
	},
	b:function (argument) {
	   console.log(2222)
	}
}
// export default obj 
module.exports = obj1;
export function a(a,b) {
	return a - b
}