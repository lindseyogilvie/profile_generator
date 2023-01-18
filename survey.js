const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${name}`);
  rl.question("What's an activity you like doing?", (activity) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${activity}`);
    rl.question("What do you listen to while doing that?", (listenTo) => {
      // TODO: Log the answer in a database
      console.log(`Thank you for your valuable feedback: ${listenTo}`);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)?", (meal) => {
        // TODO: Log the answer in a database
        console.log(`Thank you for your valuable feedback: ${meal}`);
        rl.question("What's your favourite thing to eat for that meal?", (eatForMeal) => {
          // TODO: Log the answer in a database
          console.log(`Thank you for your valuable feedback: ${eatForMeal}`);
          rl.question("Which sport is your absolute favourite?", (sport) => {
            // TODO: Log the answer in a database
            console.log(`Thank you for your valuable feedback: ${sport}`);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (superpower) => {
              // TODO: Log the answer in a database
              console.log(`Thank you for your valuable feedback: ${superpower} \n`);

              console.log(`${name} loves listening to ${listenTo} while ${activity}, devouring ${eatForMeal} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`)
            
              rl.close();
            });
          });
        });
      });
    });
  });
});

