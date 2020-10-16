module.exports = {

    bubble_sort:    (array)=>{
    let pivot = 0
    let swap 
   do {
    swap = false
    for (let i = 0; i < array.length; i++) {
   
        if(array[i]>array[i+1]) {
            pivot = array[i]
            array[i] = array[i+1]
            array[i+1] = pivot
            
        }
    }
}while(swap);


    return array
    }

    
}