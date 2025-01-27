#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.bgYellow("\tWelcome Game Zone"));


class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}
class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}

let player = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: (chalk.bold.bgGreen("Please Enter Your Name:",))
  },
]);
let opponent = await inquirer.prompt([
  {
    name: "select",
    type: "list",
    message: (chalk.bold.bgGreen("Select Your Opponent")),
    choices: ["Skeleton", "Alien", "Zombie"],
  },
]);

let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

do {
  //Skeleton
  if (opponent.select == "Skeleton") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: (chalk.bold.bgBlue("What would you like to do?")),
        choices: ["Attack", "Drink Portion", "Run For Your Life.."],
      },
    ]);
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log(chalk.bold.bgCyan("You Loose, Better Luck Next Time"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log(chalk.bold.bgYellow("You Win"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(chalk.bold.bgBlueBright(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
    }
    if (ask.opt == "Run For Your Life..") {
      console.log(chalk.bold.bgCyan("You Loose, Better Luck Next Time"));
      process.exit();
    }
  }
  //Alien
  if (opponent.select == "Alien") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: (chalk.bold.bgBlue("What would you like to do?")),
        choices: ["Attack", "Drink Portion", "Run For Your Life.."],
      },
    ]);
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log(chalk.bold.bgCyan("You Loose, Better Luck Next Time"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log(chalk.bold.bgYellow("You Win"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(chalk.bold.bgBlueBright(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
    }
    if (ask.opt == "Run For Your Life..") {
      console.log(chalk.bold.bgCyan("You Loose, Better Luck Next Time"));
      process.exit();
    }
  }
  //Zombie
  if (opponent.select == "Zombie") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: (chalk.bold.bgBlue("What would you like to do?")),
        choices: ["Attack", "Drink Portion", "Run For Your Life.."],
      },
    ]);
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log(chalk.bold.bgCyan("You Loose, Better Luck Next Time"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log(chalk.bold.bgYellow("You Win"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(chalk.bold.bgBlueBright(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
    }
    if (ask.opt == "Run For Your Life..") {
      console.log(chalk.bold.bgCyan("You Loose, Better Luck Next Time"));
      process.exit();
    }
  }
}
 while (true);
