import Cookie from 'js-cookie';

const API_URL = process.env.REACT_APP_API;

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

const api = {
    marcas() {
        return handleFetch('marcas');
    },
    categoria(cat, data = {}) {
        return handleFetch(`categoria/${cat}`, data);
    },
    produtosCat(cat, data = {}) {
        return handleFetch(`produto/cat/${cat}`, data);
    },
    bestseller() {
        return handleFetch('produto/bestseller');
    },
    sideFilterCat(cat, data = {}) {
        return handleFetch(`categoria/${cat}/sidefilter`, data);
    },
    busca(data = {}) {
        return handleFetch('busca', data);
    }
};

export default api;