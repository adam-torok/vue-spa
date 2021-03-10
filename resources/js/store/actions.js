export const login = ({ commit }, credentials) => {
       return new Promise((res, rej) => {
        axios.post('/api/auth/login', credentials)
            .then((response) => {
                console.log(credentials);
                setAuthorization(response.data.access_token);
                res(response.data);
            })
            .catch((err) =>{
                console.log(err);
                rej("Wrong email or password");
            })
    })
}

function setAuthorization(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}