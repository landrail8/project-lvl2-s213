const program = require('commander');

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<file1> <file2>')
  .action((file1, file2) => {
    if (typeof file1 === 'undefined') {
      console.error('no file1 given!');
      process.exit(1);
    }

    if (typeof file2 === 'undefined') {
      console.error('no file2 given!');
      process.exit(1);
    }

    console.log(file1);
    console.log(file2);
  });

program.parse(process.argv);

if (!program.args.length) program.help();
