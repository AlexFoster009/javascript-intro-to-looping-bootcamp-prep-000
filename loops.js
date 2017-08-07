
function forLoop(){
  for (var i = 0; i < 25 ; i++) {
    return "i am a ${i}";
  }
}


function whileLoop(int){
  while(int){
    console.log (int--);
  }
  console.log("done");
}


// while loop
function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

// run until `maybeTrue()` returns `false`
// (so the body of the loop might _never_ run!)
while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}


// coundown

let countdown = 100;

while (countdown > 0) {
  console.log(--countdown)
}


//Do while

function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());
