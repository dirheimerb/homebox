import {Dropbox} from 'dropbox';
import prompt from 'prompt';
import chalk from 'chalk';
import config from '../../config';

prompt.start();

prompt.get({
    properties: {
        authSecret: {
            description: (chalk.blue('Enter your Access Token: ')),
        },
    },
},
(err, result) => {
    const dbx = new Dropbox({
        accessToken: config.accessToken,
});
dbx.filesListFolder({path: ''})
    .then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });
});