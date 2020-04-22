
function getInput(){
    let name = prompt("What is your name?", "Bob");
    alert("Hello, " + name + "! Welcome to this simple calculator!");
    let age = prompt("How old are you, " + name + "?", 18);
    let info = {
      userName : name,
      userAge : age
    }

    if((name === null) || (name === "")) {
      info.userName = "Anonymous";
    } else if ((age === null) || (age === "")){
      info.userAge = 18;
    } else if ((age < 0)){
      info.userAge = 18;
    } else {
      console.log("Both arguments passed");
    }
    
    return (info);
}




function homeInfo(input){
  let restricted = document.getElementById("Restricted");
  let p1 = document.getElementById("Calculator");
  let p2 = document.getElementById("Home");

  let deathYears = (82 - input.userAge);
  let deathMonths = (deathYears * 12);
  let deathWeeks = (deathYears * 52);
  let deathDays = (deathYears * 365);

  let info = ("Hey, " + input.userName + "! I hear you're " + input.userAge + " years old? That's pretty cool. Not to sound too strange, but according to the average Canadian life expectancy, you will most likely die within " + deathYears + " years. That is " + deathMonths + " months, " + deathWeeks + " weeks, and " + deathDays + " days (~+20). Enjoy the possible existential crisis!");
  let oldInfo = ("Damn, " + input.userName + "! " + input.userAge + " is crazy old! Congrats on living past the average life expectancy for Canada!");

  if (input.userAge >= 18){
    p1.innerHTML = "Move to Calculator";
    p2.innerHTML = "Move to Home";
    p1.href = "./calculator.html";
    p2.href = "./index.html";
    restricted.innerHTML = "";
    console.log(p1.href)
  } else if (input.userAge < 18){
    if ((p1.href === "https://ict-1112-html-2--scrimage.repl.co/calculator.html") || (p1.href === "file:///Users/walker/Desktop/Coding/ICTHTML/7ab/calculator.html")){
      restricted.innerHTML = '<p class="center">You already have access!</p>';
    } else {
      restricted.innerHTML = '<p class="center">You need to be 18 to use the calculator!</p>';
    }
      
  } else {
    return "Error";   
  }

  if (input.userAge >= 82){
    document.getElementById("info").innerHTML = oldInfo;
  } else {
    document.getElementById("info").innerHTML = info;
  }

}




function hoverOnImg(){
  let facts = ("<ol><li>The first mechanical calculator was invented by Blaise Pascal, a French mathematician, when he was 19 in 1642, to help is father calculate mathematic sums.</li><br>" + "<li>A contemporary pocket calculator has higher computing power than the Apollo 11 Guidance Computer. The computer weighed ~30 kg, and yet the frequency of its processor was only 2.048 MHz.</li><br>" + "<li>The calculator has had a profound impact on the world, making computations quicker and more exact. In the classroom, calculators have given many students the ability to learn about and put complex formulas and concepts into practice more easily.</li><br>" + "<li>Scientific calculators are devices that are able to deal with more complicated calculations, having more mathematical symbols, and can hold more than one number at a time, compared to the original calculator.</li><br></ol>");

  document.getElementById("facts").innerHTML = facts;
}




function hoverOffImg(){
  let facts = "";  
  
  document.getElementById("facts").innerHTML = facts;
}
