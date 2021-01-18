import React from 'react';
import { Link } from 'react-router-dom';
import { MenuArea, MenuItem } from './styled';
import { Container } from '../../mainComponents';
import { asset, page } from '../../../helpers';

function Menu() {
	return (
		<MenuArea>
			<Container>
				<div className="flx flx-align-center">
					<nav>
						<span className="btn-nav">Navegue pela loja</span>
					</nav>
					<Link to={page('marcas')} className="btn-mar">Nossas Marcas</Link>
					<ul className="cat-list list-un flx">
						<MenuItem 
							name="Bicicletas" 
							link={page('categoria/bicicletas')} 
							image={asset('static/images/geral/mic-bicicletas-w.png')} />
						<MenuItem 
							name="Proteção e Segurança" 
							link={page('categoria/protecao-e-seguranca')} 
							image={asset('static/images/geral/mic-protecao-e-seguranca-w.png')} />
						<MenuItem 
							name="Treinamento" 
							link={page('categoria/treinamento')} 
							image={asset('static/images/geral/mic-treinamentos-w.png')} />
						<MenuItem 
							name="Calçados" 
							link={page('categoria/calcados')} 
							image={asset('static/images/geral/mic-calcados-w.png')} />
					</ul>
				</div>
			</Container>
		</MenuArea>
	);
}

export default Menu;