import { Timestamp } from "dropbox";

export interface FileRequest {
    id: string;
    url: string;
    title: string;
    created: Timestamp;
    is_open: boolean;
    file_count: number;
    destination?: string;
    deadline?: Timestamp;
    description?: string;
}