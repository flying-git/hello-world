console.log("hello world")
var Die = new Array(6)
Die[1]=0
Die[2]=2
Die[3]=4
Die[4]=6
Die[5]=8
Die[0]=100

n = (Math.floor(Math.random() * 6))
m = (Math.floor(Math.random() * 6))
console.log(Die[n])
console.log(Die[m])
