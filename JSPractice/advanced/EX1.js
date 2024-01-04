//Stopwatch

function Stopwatch() {
  let running, endTime, startTime, duration = 0;

  this.start = function(){
    if(running)
      throw new Error('Stopwatch is already started');
    running = true;
    startTime = new Date().getTime();
  }

  this.stop = function(){
    if(!running)
      throw new Error('Stopwatch not started.');
    running = false;
    endTime = new Date().getTime();
    duration += (endTime-startTime)/1000
  }

  this.reset = function(){
    if(running)
      throw new Error('While stopwatch is running cannot perform reset');
    duration = 0;
    running = false;
    startTime = null;
    endTime = null;
  }

  Object.defineProperty(this, 'duration',{
    get() { return duration; }
  });
}

const sw = new Stopwatch;