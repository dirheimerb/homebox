import { Dropbox, Error, sharing } from 'dropbox';
import fs from 'fs';
import prompt from 'prompt';
import chalk from 'chalk'


prompt.start();

prompt.get({
    properties: {
      accessToken: {
        description: chalk.red('Please enter an API V2 access token'),
      },
      sharedLink: {
        description: chalk.bgMagenta('Please enter a shared link to a file'),
      },
    },
  }, (error: any, result: any) => {
    const dbx = new Dropbox({ accessToken: result.accessToken });
    dbx.sharingGetSharedLinkFile({ url: result.sharedLink })
      .then((data: any) => {
        // Note: The fileBinary field is not part of the Dropbox SDK
        // specification, so it is not included in the TypeScript type.
        // It is injected by the SDK.
        fs.writeFile(data.name, (<any> data).fileBinary, { encoding: 'binary' }, (err) => {
          if (err) { throw err; }
          console.log(chalk.blue(`File: ${data.name} saved.`));
        });
      })
      .catch((err: Error<sharing.GetSharedLinkFileError>) => {
        throw err;
      });
  });