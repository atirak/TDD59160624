function greet(name){
    if(name === null){
        return `Hello, my friend.`;
    }else if(Array.isArray(name)){
        return greetIsArray(name);            
    }else if(name == name.toUpperCase()){
        return `HELLO ${name}!`;
    }else{
        return `Hello, ${name}.`;
    }
    
}
function greetIsArray(name){
    if(name.length == 2){
        return `Hello, ${name[0]} and ${name[1]}.`;
    }else{
        var mess = `Hello,` 
        for(i =0; i < name.length; i++){
            if(i == name.length-1)            {
                mess = mess + ` and ${name[i]}.`
            }else{
                mess = mess + ` ${name[i]},`
            }
        }
        return mess;  
    }
}
module.exports = greet;