import 'dotenv/config';
import chalk from 'chalk';

const red = chalk.bold.red;
const green = chalk.green;
const yellow = chalk.yellow;   
const blue = chalk.blue;

class Config {
    port: number;
    authURL: string;
    authSecret: string|null;
    authToken: string|null;
    authTokenSecret: string|null;
    accessEmail: string|null;
    constructor() {
        this.port = Number(process.env.PORT) || 3000;
        this.authURL = process.env.AUTH_URL || 'https://api.dropboxapi.com/oauth2/token';
        this.authSecret = process.env.AUTH_SECRET || prompt(red('Enter your auth secret: '));
        this.authToken = process.env.AUTH_TOKEN || prompt(red('Enter your auth token: '));
        this.authTokenSecret = process.env.AUTH_TOKEN_SECRET || prompt(red('Enter your auth token secret: '));
        this.accessEmail = process.env.ACCESS_EMAIL || prompt(red('Enter your access email: '));
    }

    getAuthURL(): string {
        return this.authURL;
    }
    getAuthSecret(): string|null {
        return this.authSecret;
    }
    getAuthToken(): string|null {
        return this.authToken;
    }
    getAuthTokenSecret(): string|null {
        return this.authTokenSecret;
    }
    getAccessEmail(): string|null {
        return this.accessEmail;
    }
}

export default new Config();