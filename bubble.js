module.exports = {

    bubble_sort:    (array)=>{
        const e = require('./e04')
    
    let pivot = 0
    let turn = 0
    let i = 0
    let compteur =0
    for(i;i<array.length;i++) {
        if(array[i]>array[i+1]) {
            pivot = array[i+1]
            array[i+1] = array[i]
            array[i] = pivot
            compteur ++
        }
        if(i===array.length-1 ){
    i=0
    
        }
        
    
    
    }
    return array
    
    
    }













}