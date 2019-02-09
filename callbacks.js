class Clock {
  constructor() {
    const date = new Date()
    this.hours = date.getHours()
    this.minutes = date.getMinutes()
    this.seconds = date.getSeconds()
    this.printTime()

    this._tick = this._tick.bind(this);
    
    window.setInterval(this._tick, 1000)
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
  }

  _tick() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours += 1;
    }
    if (this.hours === 24) { 
      this.hours = 0;
    }
    // this.printTime()
    // debugger
    this.printTime();
  }
}
// ============================================================================================
const readline = require('readline');

let reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Enter a number!", res => {
      let num = parseInt(res);
      sum += num
      console.log(sum)
      addNumbers(sum, numsLeft - 1, completionCallback)
    })} else if (numsLeft === 0) {
      return completionCallback(sum);
  }
}

addNumbers(3, 5, sum => console.log(`Total Sum: ${sum}`));

// ============================================================================================
