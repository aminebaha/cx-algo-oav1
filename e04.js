module.exports = {



count: (array) =>{

let i =0 
while(array[i]!=null) {

    i++
}
return i

},

average:  (array) =>{
let result=0
for(let i=0;i<array.length;i++) {
    result += array[i]
}
return result/array.length
},


min:    (array) =>{
    let min = array[0]
    for(let i=1;i<array.length;i++) {
        if(min>=array[i]) {
            min = array[i]
        }

    } 
    return min  
},

max:    (array)=>{
    let max = array[0]
    for(let i=1;i<array.length;i++) {
        if(max<=array[i]) {
            max = array[i]
        }

    } 
    return max  
},

shift:  (array) =>{
    let result = []
    for(let i=1;i<array.length;i++) {
        result += array[i]

    }
        return result
},

diff:   (array) => {
    const e = require('./e04')
    return Math.abs(e.max(array)-e.min(array))
}






}
