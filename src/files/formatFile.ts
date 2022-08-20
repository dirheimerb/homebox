import {CreateFileRequestArgs} from './createFile';

export function formatFile(args: CreateFileRequestArgs): CreateFileRequestArgs {
    const d = new Date();
    const date = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const hour = d.getHours();
    const minute = d.getMinutes();
    const second = d.getSeconds();
    const now = `${date}-${month}-${year} ${hour}:${minute}:${second}`;
    return {
        ...args,
        deadline: now,
    };
}