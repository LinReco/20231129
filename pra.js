const testP = document.getElementById("testP")

testP.innerText= "超酷的啦"

// storage
// localStorage / sessionStorage

//Json.Stringify  //將一個對象轉換成JOSN字符串
//Json.parse     //將一個JOSN字串轉回成物件或是數值

// let dog = {
//     name:"可口可樂",
//     tyep:"臘腸",
//     age:2
// }

let dog =[1,2,3,4,5]
let fuck = 785
// let dog = 11
console.log(typeof(fuck));
localStorage.setItem("dog",JSON.stringify(dog))
localStorage.setItem("fuck",JSON.stringify(fuck))
console.log(JSON.stringify(dog));
console.log(JSON.stringify(fuck));
console.log(typeof(JSON.stringify(dog)));

let obj = localStorage.getItem("dog")
console.log(JSON.parse(obj));
console.log(typeof(JSON.parse(obj)));

let obj1 = localStorage.getItem("fuck")
console.log(JSON.parse(obj1));
console.log(typeof(JSON.parse(obj1)));
// console.log(JSON.parse(dog));