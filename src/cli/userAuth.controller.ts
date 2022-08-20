import config from "../../config";

const requestConfig = {
    method: 'POST',
    url: 'https://api.dropboxapi.com/2/users/get_current_account',
    headers: {
        Authorization: `Bearer ${config.accessToken}`,
        'Content-Type': 'application/json',
    },
};

export const userRequest = async () => {
    const response = await fetch(requestConfig.url, requestConfig);
    const json = await response.json();
    return json;
}