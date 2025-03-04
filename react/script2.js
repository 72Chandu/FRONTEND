// immutable vs mutable 
// array objects destructuring import and export
// map filter arrow function (implicit return) spread operator

// arrays -> [1, 2, 3, 4, 5] [1,2,"apple"] [1,2,3.5]

var arr=[1,2,3,4]
var arr2=arr;
arr2.pop(); //reflect in both arr,arr2

// console.log(arr2); //[ 1, 2, 3 ]
// console.log(arr); //[ 1, 2, 3 ]

// this(change) is not allowwed in react
var state = [1,2,3,4,5];
state.pop();
state.pop();
//console.log(state) //[ 1, 2, 3 ]

var state1 = [1,2,3,4,5];
state1=[1,2,3]
// console.log(state1) //[ 1, 2, 3 ]

// allowed in react
var state2 = [1,2,3,4,5];
var copy = [...state2];
copy.pop();
//console.log(state2); //[ 1, 2, 3, 4, 5 ]
//console.log(copy); //[ 1, 2, 3, 4 ]

var state3 = {name:"apple",age:25};

state3.name="mango";  // not allowed in react 
//console.log(state3); //{ name: 'mango', age: 25 }

var copy1 = {...state3};
copy1.name="lichi";
// console.log(state3); //{ name: 'lichi', age: 25 }
// console.log(copy1); //{ name: 'lichi', age: 25 }

state3=copy1;
//console.log(state3);//{ name: 'lichi', age: 25 }

var obj={name:"chandu",age:25,email:"lalaldsds@gmail.com"};
let {name,age,email}=obj;
// console.log(name,age,email); //chandu 25 lalaldsds@gmail.com

var obj1={
    name:"string",
    social:{
        facebook:{
            first:"danu",
            sec:"dhanu",
        },
    },
};
const {sec ,first}=obj1.social.facebook;
// console.log(sec); //dhanu

var af=[12,function(){console.log("hello")} ,12.3];
var [first1,sec1,dec]=af;

// console.log(first1); //12
// console.log(sec1); //[Function (anonymous)]
// console.log(dec); //12.3
// sec1(); //hello
var[,,dec1]=af;
// console.log(dec1); //12.3

//hum log componenet banaate hai, component matlab page ka hissa , navbar,sidebar,cart,landing,second,ab dikkat ye aati hai ki har hissa alag component hai aur components ko hum log alag alag files mein rakhte hai to inko last mein jodhna bhi  padta hai ,jodne ke liye use hota hai import and export

const abcd=()=>({name:'abcd',age:12})
// console.log(abcd())
 
//map
var armap=[1,2,3,4,5];
const ans=armap.map((val)=>{
    return val*2;
})
// console.log(armap); //[ 1, 2, 3, 4, 5 ]
// console.log(ans); //[ 2, 4, 6, 8, 10 ]

var st=[11,23,4,23,4,5,6,7,8];
const ans1=st.map((val)=>{
    return val>5 ? val+5:val;
})
// console.log(ans1); //[ 16, 28, 9, 28, 9, 10, 11, 12, 13 ]

var arfilter=[1,2,3,4,5,6,7,8,9,10];
const ans2=arfilter.filter((val)=>{
    return val>5;
})
// console.log(ans2); //[ 6, 7, 8, 9, 10 ]

var arrr=[
    {product:"iphone",price:120000},
    {product:"airpods",price:50000},
    {product:"ipad",price:70000},
    {product:"munch",price:40},
]
const ans3 = arrr.filter(elem => elem.price < 50000);
console.log(ans3);//[ { product: 'munch', price: 40 } ]
