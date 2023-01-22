// Challenge 1- Push Front (inserts a value at the beginnign of an array- create a for loop)


function pushFront (arr, val) {
    for(let i= arr.Length; i>=0; i--) {
        arr [i]= arr [i-1]
    }

    arr[0]=val

    return arr
}

console.log(pushFront([5,7,2,3], 8))
console.log(pushFront([99], 7))


// Challenge 2 Pop Front 
// remove and return the value of an array. Dont froget to prove that the value is removed by printing the value
// use "pop" to remove a value

function popFront(arr) {
    // save first value in the array
    // loop through the awway shifting all the values to the left
    let firstValue= arr[0]
    // loop through the aeeay shifting all values to the left
    for (let i=0; i<arr.Length; i++){
        arr[i]=arr[i+1]
        // decrease the length of the array by one
        arr.length=arr.length-1
        // log the array
        console.log(arr)
        return firstValue
    }

}

console.log (popFront([0,5,10,15]))

console.log (popFront([4,5,7,9]))






// Challenge 3 Insert At- insert a value at any given index 

// Examples:

// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

function insertAt(arr, index, value) {
// we need to insert the value in the array at a certain index
// loop through the array shifting values to the right until you get to the given index
for (let i=arr.Length; i >= index; i--){
    arr [i] =arr [i-1]

}
// set arr[index] rqual to the given value
    arr [index]= value
// return the given array
    return arr

}

console.Log (insertAt([100,200,5], 2, 311))
console.Log (insertAt([9,33,7], 1, 42))

// Bonus Challenge
// Given an array and index into array, remove and return the array value at that index. Must print value to prove that the value is removed. 
// pop (front) is equivalent to removeAt(arr,0)


