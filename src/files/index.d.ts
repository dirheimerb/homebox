import {CreateFileRequestArgs} from './createFile';
export declare type D = Date;
export {CreateFileRequestArgs};

export interface CreateFileRequestConfig {
    method: string;
    url: string;
    headers: {
        Authorization: string;
        'Content-Type': string;
    };
    body: {
        path: string;
        data: string;
    };
}

export declare function createFile(args: CreateFileRequestArgs): Promise<any>