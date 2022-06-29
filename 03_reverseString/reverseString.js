const reverseString = function(text) {
    if(typeof text !== 'string'){
        text = String(text);
    }

    const chars = text.split('');
    let i = 0;
    let reversedText = '';
    
    while(chars.length > 0){
        reversedText += chars.pop();
    }
    
    return reversedText;
   
};

// Do not edit below this line
module.exports = reverseString;
