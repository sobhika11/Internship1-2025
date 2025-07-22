let a = [10,"swathi",false];
a.shift(); //8
a.pop();
a.unshift(15);
a.push(true); //7
console.log(a);
console.log(a.length); //9
//11
console.log(a.reverse());
//12 
let b = [1,2,3,4,5];
let sum = 0;
for(let i=0;i<b.length;i++){
    sum+=b[i];
}
console.log(sum); 
//10
let c = ["apple" , "banana", "orange","kiwi","goava"] //6
for(let i=0;i<c.length;i++){
    console.log(c[i]); 
}