const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than (>) ${el2}?`, res => {
    if (res === 'yes') {
      return callback(true);
    } else if (res === 'no') {
      return callback(false);
    } else {
      console.log("Please enter 'yes' or 'no'.");
    }
  })
}
// reader.close();
// askIfGreaterThan(2, 1, console.log);


function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
 if (i === (arr.length - 1)) {
   outerBubbleSortLoop(madeAnySwaps);
  // console.log("This is the outer loop")
  // reader.close()
} else 
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
      if (isGreaterThan === true) {
        [arr[i], arr[i + 1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true; 
      } 
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
    });
  }
}
// innerBubbleSortLoop([3,2,1], 0, false)

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
    } else if (madeAnySwaps === false) {
      sortCompletionCallback(arr)
    }
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});