import { program } from 'commander';

export = (args: string[]) => {
  program
    .command('run')
    .description('Runs the program')
    .action((run) => {
      console.log('Running the program');
    });

  program.parse();
}
