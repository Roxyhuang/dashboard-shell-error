const shell = require('shelljs');
const chalk = require('chalk');

const option = process.argv[2];

switch (option) {
    case 'dev':
      console.log(chalk.green('building for development...'));
      shell.exec('webpack-dashboard -p 3300 -c blue -t dashboard -- babel-node script/dev-server.js dev');
      break;
}
