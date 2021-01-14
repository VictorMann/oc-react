import React from 'react';
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
					<button className="btn-mar">Nossas Marcas</button>
					<ul className="cat-list list-un flx">
						<MenuItem 
							name="Bicicletas" 
							link={page('categoria/bicicletas')} 
							image={asset('static/images/mic-bicicletas-w.png')} />
						<MenuItem 
							name="Proteção e Segurança" 
							link={page('categoria/protecao-e-seguranca')} 
							image={asset('static/images/mic-protecao-e-seguranca-w.png')} />
						<MenuItem 
							name="Treinamento" 
							link={page('categoria/treinamento')} 
							image={asset('static/images/mic-treinamentos-w.png')} />
						<MenuItem 
							name="Calçados" 
							link={page('categoria/calcados')} 
							image={asset('static/images/mic-calcados-w.png')} />
					</ul>
				</div>
			</Container>
		</MenuArea>
	);
}

export default Menu;