import { Dropbox, Error, files } from 'dropbox'; // eslint-disable-line no-unused-vars
import fs from 'fs';
import path from 'path';
import prompt from 'prompt';
import chalk from 'chalk';

prompt.start();

prompt.get({
    properties: {
      accessToken: {
        description: chalk.magenta('Please enter an API V2 access token'),
      },
    },
  }, (error: any, result: any) => {
    const dbx = new Dropbox({ accessToken: result.accessToken });
  
    fs.readFile(path.join(__dirname, '/basic.js'), 'utf8', (err, contents) => {
      if (err) {
        console.log(chalk.bold.red('Error: ', err));
      }
  
      // This uploads basic.js to the root of your dropbox
      dbx.filesUpload({ path: '/basic.js', contents })
        .then((response: any) => {
          console.log(chalk.blue(response));
        })
        .catch((uploadErr: Error<files.UploadError>) => {
          console.log(uploadErr);
        });
    });
  });