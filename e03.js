module.exports = {



marsos: (str) => {

    let count = 0
    for(let i=0;i<str.length;i++) {
        if(str[i]!=="S" && str[i]!== "O")
            count ++
    }
    return count
}






}