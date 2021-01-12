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