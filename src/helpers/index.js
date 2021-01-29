import qs from 'qs';

/**
 *  Definição de Rotas de páginas
 * 
 * @param {String} page 
 *      Exp.:   page("login")
 *              page("produtos/3")
 *              page("prodtuos?limit=20")
 */
export const page = (rota = "") => {
    // acresta barra caso não exista
    if (!rota.match(/^\//)) rota = "/" + rota;
    return process.env.REACT_APP_ROUTE_BASE + rota;
};

/**
 * Rota dos arquivos públicos
 * Exemplo:
 *      public("imgs/avatar.png")
 *      public("logo.png")
 * 
 * @param {String} filename 
 */
export const asset = filename => {
    // acresta barra caso não exista
    if (!filename.match(/^\//)) filename = "/" + filename;
    return process.env.REACT_APP_PUBLIC_URL + filename;
};

/**
 * Formanta para moeda
 * @param {Float} val 
 */
export const formatMoeda = val => {
    val = parseFloat(val);
    return val.toFixed(2).replace('.', ',');
};

/**
 * Cria uma query string apartir de objetos
 * alem de substitur os dados do o1 com o do o2
 * @param {Object} o1 
 * @param {Object} o2 
 */
export const makeQueryString = (o1, o2) => {
    let r = extend(o1, o2);
    r = qs.stringify(r);
    return r ? '?' + r : '';
};

/**
 * Copia um objeto
 * @param {Object|Array} data 
 */
export const copyD = data => {
    return JSON.parse(JSON.stringify(data));
};

const extend = (o1, o2) => {
    let r = {...o1};
    for (let prop in o2) r[prop] = o2[prop];
    return r;
};