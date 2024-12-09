const makeChange = (c) => {
  // your name here
	const change = {};  
  
  // Calculate the number of quarters  
  change.q = Math.floor(c / 25);  
  c = c % 25; // Remainder after quarters  
  
  // Calculate the number of dimes  
  change.d = Math.floor(c / 10);  
  c = c % 10; // Remainder after dimes  
  
  // Calculate the number of nickels  
  change.n = Math.floor(c / 5);  
  c = c % 5; // Remainder after nickels  
  
  // What remains is the number of pennies  
  change.p = c; // This is the remaining amount in cents, which are pennies  
  
  return change;  
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
