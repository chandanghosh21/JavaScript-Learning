var str = 'abcccddde';
var obj = {};
var count=1;

function max (alphabetCounterObject) {
  let keys = Object.keys(alphabetCounterObject);
  let maxAlphabetPair = { key: keys[0], value: alphabetCounterObject[keys[0]]};
  let resultList = [maxAlphabetPair];
  for(var i=1; i<keys.length; i++) {
      if( alphabetCounterObject[keys[i]] > maxAlphabetPair.value){
        maxAlphabetPair = { key: keys[i], value: alphabetCounterObject[keys[i]]};
        resultList = [maxAlphabetPair];
      }else if(alphabetCounterObject[keys[i]] == maxAlphabetPair.value){
        resultList.push({ key: keys[i], value: alphabetCounterObject[keys[i]]});
      }
  }
  resultList.forEach(pair => {
    let resultString = '';
    for(let i = 0; i < pair.value; i++){
      resultString += pair.key + '';
    }
    console.log(resultString);
  })
} 

for(var i=0; i< str.length; i++) {
if(str[i] === str[i+1]){
    count++;
 } else {
   if(obj.hasOwnProperty(str[i]) && (obj[str[i]] < count) ) {
    obj[str[i]] = count;
   } else if (!obj.hasOwnProperty(str[i])) {
    obj[str[i]] = count;
   }
   count=1;
 }
};

console.log(obj);
max(obj);