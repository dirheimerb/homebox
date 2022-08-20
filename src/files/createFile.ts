import config from '../../config';
import axios from 'axios';

export interface CreateFileRequestArgs {
    title: string;
    destination: string;
    deadline: string;
    open: boolean;
    description: string;    
}

export const createFile = async (args: CreateFileRequestArgs) => {
    const urlPath = JSON.stringify({
        path: `${args.destination}/${args.title}`,
        autorename: true,
    });
    const bodyFile = JSON.stringify({
        name: args.title,
        deadline: args.deadline,
        open: args.open,
        description: args.description,
    });

    const createConfig = {
        method: 'POST',
        url: 'https://api.dropboxapi.com/2/file_requests/create',
        headers: {
            Authorization: `Bearer ${config.accessToken}`,
            'Content-Type': 'application/json',
        },
        body: {
            path: urlPath,
            data: bodyFile,
        }
    };

    const response = await axios(createConfig);
    const data = response.data;
    return data;
}


//     const d = new Date();
//     const date = d.getDate();
//     const month = d.getMonth() + 1;
//     const year = d.getFullYear();
//     const hour = d.getHours();
//     const minute = d.getMinutes();
//     const second = d.getSeconds();
//     const now = `${date}-${month}-${year} ${hour}:${minute}:${second}`;
 
// d.getUTCDate();

// function getCurrentDate() {
//     return Timestamp();
// }

// function Timestamp() {
//     return formatDate(new Date());
// }


// function formatDate(date: Date) {
//     return date.toISOString().split('T')[0];
// }

// function addDaysToDueDate(date: Date, days: number) {
//     const newDate = new Date(date);
//     newDate.setDate(newDate.getDate() + days);
//     return newDate;
// }