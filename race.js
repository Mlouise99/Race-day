
let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 25;

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}
if (age > 18 && registeredEarly) {
  console.log(`Your race starts at 9:30 am. Your race number is ${raceNumber}.`);
}

else if (age > 18 && !registeredEarly) {
  console.log('Late adults run at 11:00 am '+raceNumber);
}

else if (age <= 18) {
  console.log('Youth registrants run at 12:30 pm'+raceNumber)
}

else {
  console.log('Please see the registration desk for your race details.');
}
console.log("Runners who are"+" "+age+"years old and registered early will run at 9:30 am")