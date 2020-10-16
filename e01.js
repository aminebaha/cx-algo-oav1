module.exports = {


howManyCamelCase: (str) => {

let count = 0

for(let i=0;i<str.length;i++) {
   
    if((str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90) && str.charCodeAt(i+1)>90) {
        count++
    }
}
return console.log(count)
    
} 




}    