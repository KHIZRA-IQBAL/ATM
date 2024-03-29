#! user/bin/env node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let balance = 2000;
let mypin = 2345;

let pincode = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your  pin number",
    type: "Number",
  },
]);
if (pincode.pin == mypin) {
  console.log(" correct! ");

  let operationchoices = await inquirer.prompt([
    {
      name: "operation",
      message: "plz select option",
      type: "list",
      choices: ["Withdraw", "Balance check", "fast cash"],
    },
  ]);
  console.log(operationchoices);
  if (operationchoices.operation === "Withdraw") {
    let amountans = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);

    if (amountans.amount < balance) {
      balance -= amountans.amount;
      console.log(`your remaining balance:${balance}`);
    } else {
      console.log("your amount is  unsufficient ");
    }
  } else if (operationchoices.operation === "balance check") {
    console.log(`your balance is ${balance}`);
  } else if (operationchoices.operation === "fast cash") {
    let amountans = await inquirer.prompt([
      {
        name: "select",
        message: "select your choice",
        type: "list",
        choices: [400, 1000, 1200, 1800, 2000,]
      },
    ]);
    if (amountans.select < balance) {
      balance -= amountans.select;
      console.log(`your remaining balance is ${balance} `);
    }
  }
} else {
  console.log("plz correct your code");
}
