const { exec } = require('child_process');

const paths = [
  'node_modules/cordova-plugin-fcm-with-dependecy-updated/scripts/install_ionic_dependencies.js ionic',
  'node_modules/cordova-plugin-fcm-with-dependecy-updated/scripts/install_ionic_dependencies.js ionic/ngx',
  'node_modules/cordova-plugin-fcm-with-dependecy-updated/scripts/install_ionic_dependencies.js ionic/v4'
];

function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${command}`);
        console.error(stderr);
        reject(error);
        return;
      }
      console.log(`Output for command: ${command}`);
      console.log(stdout);
      resolve(stdout);
    });
  });
}

async function runScripts() {
  try {
    for (const script of paths) {
      const command = `node ${script}`;
      await runCommand(command);
    }
    console.log('All scripts executed successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

runScripts();
