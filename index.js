#!/usr/bin/env node

import chalk from "chalk";
import cfonts from "cfonts";
import boxen from "boxen";
import gradient from "gradient-string";
import { createSpinner } from "nanospinner";

const displayInfo = async () => {
  // Spinner animation
  const spinner = createSpinner("Loading your info...").start();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  spinner.success({ text: "Here is my info:" });

  // Gradient header using cfonts
  const header = cfonts.render("WELCOME!", {
    font: "block",
    align: "center",
    gradient: ["cyan", "green"],
    background: "transparent",
    letterSpacing: 1,
    lineHeight: 0.5,
    space: true,
    maxLength: "0",
  });

  // Gradient string for the main message
  const welcomeMessage = gradient.pastel(`
Hey there, I am Tuhin Poddar,
a CS enthusiast graduating in 2027. Embracing Web Development and Data Structures and algorithms. Crafting MERN apps, exploring AI-ML, and thriving in competitive coding. Eager to innovate and collaborate, ready to bridge creativity and technology for dynamic solutions.
`);

  // Contact information with emojis
  const contactInfo = `
${chalk.bold.magenta("GitHub:")} ${chalk.cyan("https://github.com/Tuhin114")}
${chalk.bold.green("Twitter:")} ${chalk.cyan("https://twitter.com/4334Tuhin")}
${chalk.bold.white("LinkedIn:")} ${chalk.cyan(
    "https://www.linkedin.com/in/tuhin-poddar-a2a84b274/"
  )}
${chalk.bold.blue("Email:")} ${chalk.cyan("tuhinpoddar114@gmail.com")}
${chalk.bold.yellow("Instagram:")} ${chalk.cyan(
    "https://www.instagram.com/tuhinpoddar_2004/"
  )}
`;

  const footer = chalk.magenta.bold(`
  Please feel free to connect with me.
Thank you for using 'npx tuhin_poddar'.
Have a great day! 
`);

  // Combine everything into a single message
  const message = `
${header.string}
${welcomeMessage}

${contactInfo}

${footer}
`;

  // Display the message in a styled box
  const boxedMessage = boxen(message, {
    padding: 1,
    margin: 1,
    borderStyle: "double",
    borderColor: "white",
  });

  console.log(boxedMessage);
};

displayInfo();
