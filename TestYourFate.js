function random(maxDieVal) {
  return Math.ceil(Math.random() * maxDieVal);
}

// const validate = (die) => {
//   const vals = {};

//   for (let i = 0; i <= 100000; i++) {
//     const temp = random(die);
//     vals[temp] = vals[temp] ? (vals[temp] += 1) : 1;
//   }
//   return vals;
// };

function doTheThing() {
  const offset = `     `;
  const actionDie = random(6);
  const actionDieStringifed = `${offset}     0${actionDie}`;
  const firstChallengeDie = random(10);
  const firstCDLeadingZero =
    firstChallengeDie < 10 ? `0${firstChallengeDie}` : `${firstChallengeDie}`;
  const secondChallengeDie = random(10);
  const secondCDLeadingZero =
    secondChallengeDie < 10
      ? `0${secondChallengeDie}`
      : `${secondChallengeDie}`;
  const challengeDiceStringified = `${offset}${firstCDLeadingZero}       ${secondCDLeadingZero}\n`;
  const match = firstChallengeDie === secondChallengeDie;
  const matchStringified = match ? `${offset}~~~MATCH~~~\n` : ``;

  console.log(
    `\n${matchStringified}${challengeDiceStringified}${actionDieStringifed}\n`
  );
}

doTheThing();
