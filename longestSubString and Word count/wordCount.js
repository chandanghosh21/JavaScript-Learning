var word = " My   name "
var count = 0;

foundCharacter = false; 
for (var i=0; i<word.length; i++) {
    if (word[i] != ' ' && !foundCharacter) { 
        count++;
        foundCharacter = true;
    } else if (word[i]===' ') {
        foundCharacter = false;
    }       
}            

console.log("The number of words are: " + count);