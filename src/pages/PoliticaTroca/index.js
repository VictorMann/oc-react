import React from 'react';
import { PageArea } from './styled';
import { Container } from '../../components/mainComponents';

import Breadcrumb from '../../components/Breadcrumb';

function Page() {

	let breadCrumb = [{name: 'Política de troca'}];

	return (
		<Container margin>
			<PageArea>

				<Breadcrumb items={breadCrumb} />
				
				<h1>Política de troca</h1>
				<p>Se receber algum produto em desacordo com o pedido, não abra o lacre original e entre imediatamente em contato com a Loja Virtual para orientação de como proceder.</p>
				<p>Na hipótese de seu produto apresentar problemas técnicos de funcionamento ou avarias, exceto aquelas decorrentes do mau uso, você deverá entrar em contato com a Loja Virtual para orientação de como proceder.</p>
				<p>O produto deverá estar acompanhado de nota fiscal de venda, manual de instruções e todos os acessórios que o acompanham e não deve conter indícios de avarias por mau uso.</p>
				<p>A compra poderá ser cancelada em até 7 (sete) dias contados da data da entrega do produto, e desde que o produto esteja acompanhado de nota fiscal de venda, embalagem, manual de instruções e todos os seus acessórios, e desde que não haja qualquer indício de mau uso.</p>
				<p>Caso deseja cancelar a compra, você pode entrar em contato com a Loja Virtual ou acessar o site e entrar em sua área "Meus Pedidos", procurar o pedido em questão e, clicar em "Cancelar o pedido". Após isso, confirme o pedido de cancelamento.</p>
			</PageArea>
		</Container>
	)
}

export default Page;