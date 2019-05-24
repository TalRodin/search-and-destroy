'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	console.log('empty  array', array.length+' '+ array, 'target', target)
	// console.log(array.length)
	if (array.length===0){
		console.log('----', target)
		return false
	}
	else if(array.length>0){
		
	let midPoint=Math.floor(array.length/2)
	if(array[midPoint]===target){
		// console.log('hit', array[midPoint])
		return true
	}else if(array[midPoint]>target){

		let leftArray=array.slice(0,midPoint)
		// console.log('left array', leftArray)
		return  binarySearch(leftArray, target)

	}else{
		let rightArray=array.slice(midPoint+1)
		// console.log('right array', rightArray)
		return  binarySearch(rightArray, target)
	}
   
}else  {return  false}}
;

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch