var Animal = function (n, s, f){
    this.name = n;
    this.speed = s;
    this.focus = f;
    this.position = 0;
    this.report = function() {
      return this.name + " is at " + this.position;
    };
    this.run = function() {
      if (this.focus > (Math.random() * 10)) {
        this.position += this.speed;
        //console.log(this.name + ":" + this.position);
      }
    };
    
  } 
 
var userName = prompt("What is your name?"),
    userSpeed = prompt("How fast can you run? (mph>"),
    userFocus = prompt("Enter your race focus (1-10).");
 
var turtle = new Animal("Rocky", 2, 8),
    rabbit = new Animal("Achilles", 8, 4),
    userAnimal = new Animal(userName, parseInt(userSpeed), parseInt(userFocus));
 
var distance = 25;
 
while (turtle.position < distance && rabbit.position < distance && userAnimal.position < distance) {
  turtle.run();
  rabbit.run();
  userAnimal.run();
  if (turtle.position >= 25) { 
    console.log(turtle.name + "wins the race!");
  }
  else if (rabbit.position >= 25){
    console.log(rabbit.name + "wins the race!");
  }
  else if (userAnimal.position >= 25){
    console.log("You won the race");
  }
}
 
console.log(turtle.report());
console.log(rabbit.report());
console.log(userAnimal.report()); 
 