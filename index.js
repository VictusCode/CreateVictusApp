#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const dir = process.argv[2];

const colorError = "\x1b[31m";
const printError = (message) => console.error(colorError, message);

if (!dir)
  return printError(
    "please enter project name, run: npm create victus-app <NAME>"
  );

if (fs.existsSync(dir))
  return printError("directory exists, please choose another name");

fs.copyDir = (src, dest) => {
  fs.mkdirSync(dest);
  fs.readdirSync(src).forEach((file) => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);
    const srcFileStat = fs.lstatSync(srcFile);
    if (srcFileStat.isDirectory()) {
      fs.copyDir(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
};

fs.copyDir(path.join(__dirname, "template", "base"), dir);
