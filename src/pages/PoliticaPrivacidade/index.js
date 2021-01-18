import React from 'react';
import { PageArea } from './styled';
import { Container } from '../../components/mainComponents';

import Breadcrumb from '../../components/Breadcrumb';

function Page() {

	let breadCrumb = [{name: 'Política de Privacidade'}];

	return (
		<Container margin>
			<PageArea>

				<Breadcrumb items={breadCrumb} />
				
				<h1>Política de Privacidade</h1>
				<h4>Obtenção e Armazenamento dos dados</h4>
				<p>O OCiclista zela pela segurança e privacidade de seus clientes, portanto todas as informações fornecidas durante a navegação e compra no site são armazenadas de forma automática no banco de dados, não sendo vendidas, trocadas ou divulgadas à terceiros - exceto quando estas informações forem necessárias para processo de entrega, cobrança, participação de promoções solicitadas pelos clientes, confirmação de dados objetivando a segurança na finalização da compra, ordem judicial e administrativa.</p>
				<p>Para a preservação de seus dados, o OCiclista não aconselha a divulgação de senha a terceiros, mesmo que familiares ou amigos.</p>
				<p>O OCiclista também poderá utilizar outras tecnologias padrões as quais coletam informações para melhorar a experiência de navegação do usuário, baseada nos hábitos e preferências deste, como os Cookies, que são os dados enviados para o navegador do usuário após acesso ao site OCicista. Recordando que, para bloqueios dos Cookies, caberá ao próprio visitante/usuário configurar o seu navegador.</p>
				<p>O usuário consente que o OCiclista utilize as informações para realização de marketing direto.</p>
				<h4>Disposições Finais</h4>
				<p>O conteúdo constante nesta Política de Privacidade poderá ser atualizado ou modificado a qualquer momento, cabendo aos usuários verificá-lo sempre que efetuar o acesso ao site.</p>
				<p>O usuário, ao colocar informações em uma área pública do OCiclista, está ciente de que elas estarão disponíveis a outros visitantes e usuários do site.</p>
				<p>Caso persistir dúvida em relação ao conteúdo dessa Política, o usuário deverá entrar em contato com a Central de Atendimento.</p>
				<p>Atualizado em 22 de janeiro de 2020.</p>
			</PageArea>
		</Container>
	)
}

export default Page;