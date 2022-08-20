import { Dropbox, Error, sharing } from 'dropbox';
import fs from 'fs';
import prompt from 'prompt';
import chalk from 'chalk'


prompt.start();

prompt.get({
    properties: {
        accessToken: {
            description: chalk.bold.red('Enter your access token: ')
        },
        sharedLink: {
            description: chalk.blue('Enter the shared link: ')
        },
    },
}, (err:any, result:any) => {
    const dbx = new Dropbox({accessToken: result.accessToken});
    dbx.sharingGetSharedLinkFile({url: result.sharedLink})
        .then((data: any) => {
            fs.writeFile(data.name, (<any> data.fileBinary, {encoding: 'binary' }, (err:any) => {
                if(err) {throw err;}
                console.log(chalk.bold.blue(`File: ${data.name} downloaded successfully`));
        });
    }).catch((err: Error<sharing.GetSharedLinkFileError>) => {
            throw err
        })
    });