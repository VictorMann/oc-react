import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { PageArea, ProductList } from './styled';
import { Container } from '../../components/mainComponents';

import api from '../../helpers/api';
import { makeQueryString, page } from '../../helpers';
import { useQueryString } from '../../hooks';

import ProductItem from '../../components/ProductItem';
import ProductOrder from '../../components/ProductOrder';
import Pagination from '../../components/Pagination';
import SideFilter from '../../components/SideFilter';
import SelectedFilters from '../../components/SelectedFilters';

function Page() {

	const query = useQueryString();
	const location = useLocation();
	const history = useHistory();
	const [products, setProducts] = useState();
	const [currentPage, setCurrentPage] = useState();
	const [productOrder, setProductOrder] = useState(query.o || 'rel');
	const [sideFilters, setSideFilters] = useState([]);
	const [selectedFilters, setSelectFilters] = useState([]);

	useEffect(() => {

		const getProdutos = async () => {
			let prods = await api.busca(query).then(data => data.data);
			setProducts(prods);
			setCurrentPage(prods.page || 1);
		};
		getProdutos();
	}, [location.search]);

	const handleChangeProductOrder = val => {
		setProductOrder(val);
		let q = {...query};
		delete q.page;
		q = makeQueryString(q, {o: val});
		history.push(q);
	};

	const handlePagination = page => {
		setCurrentPage(page);
		let q = makeQueryString(query, {page});
		history.push(q);
	};

	const handleClickSideFilter = data => {
		let q = {...query};
		delete q.page;
		
		if (data.group.slug === 'categoria') {
			q = makeQueryString(q);
			history.push(page(`categoria/${data.item.slug + q}`));
			return;
		}

		q[data.group.slug] = data.item.slug;
		q = makeQueryString(q);
		history.push(q);
	};

	const handleRemoveSelectedFilter = item => {
		let q = {...query};
		delete q.page;

		if (item) delete q[item.slug];
		else selectedFilters.forEach(item => delete q[item.slug]);

		q = makeQueryString(q);
		if (!q) q = location.pathname;
		history.push(q);
	};

	return (
		<PageArea>

			<Container margin className="ctn-txt-search">
				<div>
					{products && products.total
						? <p>Encontramos {products.total} resultados para <b>"{query.s}"</b></p>
						: <p>Sua busca <b>"{query.s}"</b> não correspondeu a nenhum de nossos produtos</p>
					}
				</div>
			</Container>
			

			<Container margin>
				<div className="cx">
					<section className="pr">
						
						{selectedFilters.length > 0 &&
							<SelectedFilters items={selectedFilters} handle={handleRemoveSelectedFilter} />
						}

						<ul className="list-un dek">
							<li></li>
							<li><ProductOrder val={productOrder} onChange={handleChangeProductOrder} /></li>
						</ul>

						{products && products.items.length > 0 &&
							<ProductList>
								{products.items.map((item, k) =>
									<ProductItem key={k} item={item} />
								)}
							</ProductList>
						}
						
						{products && products.total > products.limit &&
							<div className="cx-pagination">
								<Pagination 
									total={products.total} 
									limit={products.limit} 
									currentPage={currentPage}
									setCurrentPage={handlePagination} />
							</div>
						}

					</section>
					<aside className="as">
						
						{sideFilters.map((item, k) => 
							<SideFilter 
								key={k} 
								filter={item} 
								handle={handleClickSideFilter} />
						)}

					</aside>
				</div>
			</Container>
		</PageArea>
	)
}

export default Page;