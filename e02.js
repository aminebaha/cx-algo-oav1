module.exports = {


    IsAPangrams : (str) => {
    
        let alphabet = ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        let sentence = str.replace(/ /g,"").split('')
        //console.log(sentence)
         let ispangram = true
        for(let i=0;i<alphabet.length;i++) {
            if(sentence.indexOf(alphabet[i]) ==-1)  
                ispangram = false
                     
        }

    return ispangram
}
}