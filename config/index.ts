import 'dotenv/config';

class Config {
    appKey: string|undefined;
    appSecret: string|undefined;
    accessToken: string|undefined;
    accessEmail: string|undefined;
    baseAuthUrl: string|undefined;

    constructor() {
        this.appKey = process.env.APP_KEY;
        this.appSecret = process.env.APP_SECRET;
        this.accessToken = process.env.ACCESS_TOKEN;
        this.accessEmail = process.env.ACCESS_EMAIL;
        this.baseAuthUrl = process.env.BASE_AUTH_URL;
    }

    getAppKey(): string|undefined {
        return this.appKey;
    }
    getAppSecret(): string|undefined {
        return this.appSecret;
    }
    getAccessToken(): string|undefined {
        return this.accessToken;
    }
    getAccessEmail(): string|undefined {
        return this.accessEmail;
    }

    getBaseAuthUrl(): string|undefined {
        return this.baseAuthUrl;
    }

    setAppKey(appKey: string): void {
        this.appKey = appKey;
    }

    setAppSecret(appSecret: string): void {
        this.appSecret = appSecret;
    }

    setAccessToken(accessToken: string): void {
        this.accessToken = accessToken;
    }

    setAccessEmail(accessEmail: string): void {
        this.accessEmail = accessEmail;
    }

    setBaseAuthUrl(baseAuthUrl: string): void {
        this.baseAuthUrl = baseAuthUrl;
    }
}

const config = new Config()

//console.log(config)
export default config;