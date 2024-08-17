
// -----------  string array only can add string
let strArr: string[] = ['one','two','three','four','five','six'];
/*

strArr.push(7)

strArr.push('seven')
*/


// ----------- number array only can add number
let  numArr: number[] = [1,2,3,4,5,6];
/*

strArr.push(7)

strArr.push('seven')
*/


// ----------- mixed array - union type array (only can add these type in the array)
let mix:(string|number|boolean|null)[] = [1,'two',3,'four',true,null]

/*
mix.push(undefined);

mix.push(7)

*/
// TUPLE

let myTuple :[string,number,boolean,boolean]=['tharanga',27,true,false];

/*
* what is the diffrent between tuple nad mix union type array
*
* -mix array didn't have na length but tuple have and array length
* -in union type mix array you can defined type and many element as you like
* -in tuple you can only add defined type and defined length; defined type count ie equal to defined length;
*
* -- in this case you cant assign myTuple to mix only you can add mix to myTuple
* */

// Example
mix = myTuple;

// myTuple = mix;
