#!/usr/bin/env node
console.log('Welcome to the diffcalc!');

const commander = require('commander');

commander
  .option('-h', '--help', 'print description')
  .parse(process.argv);

if (commander.help) {
  console.log('Usage: gendiff [options] <firstConfig> <secondConfig>');
  console.log('');
  console.log('Compares two configuration files and shows a difference.');
  console.log('');
  console.log('Options:');
  console.log('');
  console.log('    -h, --help           output usage information');
  console.log('    -V, --version        output the version number');
  console.log('    -f, --format [type]  Output format');
}
