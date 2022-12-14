/// @types index.d.ts file was autogenerated and can be modified
const d = new Date();
const date = d.getDate();
const month = d.getMonth() + 1;
const year = d.getFullYear();
const hour = d.getHours().toLocaleString();
const minute = d.getMinutes().toLocaleString();
const second = d.getSeconds();
const now = `${date}-${month}-${year} ${hour}:${minute}:${second}`;

d.getUTCDate();
d.getTimezoneOffset();
d.toLocaleString();
d.toLocaleDateString();
d.toLocaleTimeString();
d.toUTCString();
d.toISOString();
d.toDateString();
d.toTimeString();
d.toString();
d.toJSON();
d.toISOString();
d.toUTCString();

export function getCurrentDate() {
    return Timestamp();
}

export function Timestamp() {
    return formatDate(new Date());
}

export function formatDate(date: Date) {
    return date.toISOString().split('T')[0];
}

export function addDaysToDueDate(date: Date, days: number) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}

export function setTimeDueDate(date: Date, time: number) {
    const newDate = new Date(date);
    const [hour, minute] = time.toString().split(':');
    newDate.setMinutes(parseInt(minute));
    newDate.setHours(parseInt(hour));
    return newDate;
}
