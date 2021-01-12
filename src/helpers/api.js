import Cookie from 'js-cookie';

const API_URL = '';

function handleFetch(endpoint, dados = {}, verbo = 'GET') {

    return new Promise((resolve, reject) => {

        let url = API_URL + endpoint;
        let token = Cookie.get('token');
        
        if (verbo === 'POST' || verbo === 'PUT') {
            if (dados instanceof FormData) {
                fetch(url, {
                    method: verbo,
                    body: dados,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                })
                .then(res => res.ok ? res.json() : Promise.reject())
                .then(resolve)
                .catch(err => {
                    console.error(err);
                    reject(err);
                });
            } else {
                fetch(url, {
                    method: verbo,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(dados)
                })
                .then(res => res.ok ? res.json() : Promise.reject())
                .then(resolve)
                .catch(err => {
                    console.error(err);
                    reject(err);
                });
            }
        } else {
            let query = new URLSearchParams(dados).toString();
            fetch(query ? `${url}?${query}` : url, { 
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => res.ok ? res.json() : Promise.reject())
            .then(resolve)
            .catch(err => {
                console.error(err);
                reject(err);
            });
        }
    });
};

const api = {};

export default api;