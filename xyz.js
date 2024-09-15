console.log("hello i am in xyz")

var s = " myyyyyyyyy"

const calculate = (a,b)=>{
console.log(a+b)
};
(()=>{
    setTimeout(()=>{
        console.log("i am in set timeout")
    },5000)
})()
const my = ()=>{
    console.log(s)
}
// my()
module.exports ={calculate,my}

// console.log(module.exports)