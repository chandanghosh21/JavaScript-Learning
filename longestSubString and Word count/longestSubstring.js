var str = 'aabbbcccb';
var obj = {};
var count=1;

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
var val = Object.keys(obj);
console.log(val);
console.log(max(val));


function max (val) {
var max = obj[val[0]];
var Key = val[0];
for(var i=1; i<val.length; i++) {
  if(max < obj[val[i]]){
    max = obj[val[i]];
    Key = val[i];
  }
}
return {[Key]: max};
} 