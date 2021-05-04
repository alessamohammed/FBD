const arr = [1, 3, 5, 7, 8, 9];
const binarySearch = (arr, x , strt=0, end=arr.length) => {
  if(end < strt) return false;
  let mid = Math.floor((strt + end) / 2);
  if(arr[mid] === x) {
    return true;
  }
  else if(arr[mid] < x) {
    return binarySearch(arr, x, mid+1, end);
  }
  else {
    return binarySearch(arr, x , strt, mid-1);
  }
}

console.log(binarySearch(arr, 7));