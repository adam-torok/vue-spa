import { setAuthorization } from "./general";

export function login(credentials) {
    return new Promise((res, rej) => {
        axios.post('/api/auth/login', credentials)
            .then((response) => {
                setAuthorization(response.data.access_token);
                res(response.data);
            })
            .catch((err) =>{
                rej("Wrong email or password");
            })
    })
}

export function registrate(credentials) {
    return new Promise((res, rej) => {
        axios.post('/api/registrate', credentials)
            .then((response) => {
                console.log(response);
            })
            .catch((err) =>{
                rej("Hibak leptek fel");
            })
    })
}

export function getLocalUser() {
    const userStr = localStorage.getItem("user");

    if(!userStr) {
        return null;
    }

    return JSON.parse(userStr);
}
