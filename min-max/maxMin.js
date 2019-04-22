var arr = [5,10,45,100,80,7,9,108,1,500];

var value = getMaxOrMin(arr,'min');
console.log(value);


function getMaxOrMin(arr,option) {
    var maxMin = option.toUpperCase();
    switch(maxMin){
        case 'MAX': 
        value = getMax(arr);
        break;
        case 'MIN':
        value = getMin(arr);
        break;
        default:
        value = "Invalid option. Provider 'MIN' or 'MAX'";
        break;
    }
    return value;
}


function getMax(arr) {
    var max = arr[0];
    for(i=1; i<arr.length; i++) {  
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

function getMin(arr) {
    var min = arr[0];
    for(i=1; i<arr.length; i++) {  
        if(min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
