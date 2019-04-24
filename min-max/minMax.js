var arr = [5,10,45,100,80,7,9,108,1,500];

function minMax(arr) {
    var maxMin = {
        max: arr[0],
        min: arr[0]
    };
    for(i=1; i<arr.length; i++) {  
        if(maxMin.max < arr[i]) {
            maxMin.max = arr[i];
        } else if(maxMin.min > arr[i]) {
            maxMin.min = arr[i];
        }
    }
    return maxMin;
}

var value = minMax(arr);
console.log(value);
console.log("The maximum value is:" + ' ' + value.max);
console.log("The minimum value is:" + ' ' + value.min);

