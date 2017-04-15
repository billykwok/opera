/* eslint-disable no-console, prefer-template */
import chalk from 'chalk';
import ip from 'ip';

const divider = chalk.gray('\n-----------------------------------');

const logger = {

  // Called whenever there's an error on the server we want to print
  error: (err) => {
    console.log(chalk.red(err));
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, tunnelStarted) => {
    console.log(`Server started ${chalk.green('✓')}`);

    // If the tunnel started, log that and the URL it"s available at
    if (tunnelStarted) {
      console.log(`Tunnel initialise ${chalk.green('✓')}`);
    }

    console.log(
      chalk.bold('\nAccess URLs:') +
      divider +
      '\nLocalhost: ' + chalk.magenta('http://localhost:' + port) +
      '\n      LAN: ' + chalk.magenta('http://' + ip.address() + ':' + port) +
      (tunnelStarted ? '\n    Proxy: ' + chalk.magenta(tunnelStarted) : '') +
      divider,
      chalk.blue('\nPress ' + chalk.italic('CTRL-C') + ' to stop\n')
    );
  }
};

export default logger;
/* eslint-enable no-console, prefer-template */
