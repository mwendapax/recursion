function fibs(num){
    let arr = [0,1];

    for(let i = 1; i< num-1; i++) {
        arr.push(arr[i] + arr[i - 1]);
    }

    return arr;
}

function fibsRec(num){

    if(num == 2){
        return [0,1];
    }

    let arr = fibsRec(num -1);
    let prev = arr.length - 1;
    let next = arr.length - 2;

    
    return arr.concat([arr[prev] + arr[next]])
    

}

function mergeSort(arr) {
    if (arr.length === 1){
        return arr;
    }

    let mid = arr.length / 2;
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);


    return mergeSort.sort(mergeSort(left), mergeSort(right));
}

mergeSort.sort = function(left, right){
    let sorted = [];
    let totalLength = left.length + right.length;
 

   while(totalLength > 1){
    if(left[0] < right[0]){
        sorted.push(left.shift());
    }else if(left[0] > right[0]){
        sorted.push(right.shift());
    }
    totalLength--;
   }

   sorted.push(...left,...right)
    return sorted;
}
