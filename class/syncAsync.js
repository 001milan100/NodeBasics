function myApp() {
  var age = 30;

  if (age > 18) {
    console.log("Age greater than 18");
  } else {
    console.log("Uderaged");
  }

  setTimeout(() => {
    console.log("Inside asynchronous function");
  }, 3000);

  console.log("Inside synchronous function");
}

function second() {
  console.log("This is the second function");
}

function goodbye() {
  console.log("Goodbye");
}

myApp();
