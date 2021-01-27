import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { PageArea, ProductList } from './styled';
import { Container } from '../../components/mainComponents';

import api from '../../helpers/api';
import { makeQueryString } from '../../helpers';
import { useQueryString } from '../../hooks';

import Breadcrumb from '../../components/Breadcrumb';
import ProductItem from '../../components/ProductItem';
import ProductOrder from '../../components/ProductOrder';
import Pagination from '../../components/Pagination';

let catOld = null;

function Page() {

	const query = useQueryString();
	const location = useLocation();
	const history = useHistory();
	const { cat } = useParams();
	const [category, setCategory] = useState();
	const [products, setProducts] = useState();
	const [currentPage, setCurrentPage] = useState();
	const [breadCrumb, setBreadCrumb] = useState();
	const [productOrder, setProductOrder] = useState(query.o || 'rel');
	const [bestseller, setBestseller] = useState([]);
	
	useEffect(() => {

		if (catOld !== cat) {
			catOld = cat;
			const getCategory = async () => {
				let data = {};
				let category = await api.categoria(cat, data).then(data => data.data);
				setBreadCrumb([{ name: category.nome }]);
				setCategory(category);
			};
			getCategory();
		}

		const getProdutos = async () => {
			let produtos = await api.produtosCat(cat, query).then(data => data.data);
			setProducts(produtos);
			setCurrentPage(produtos.page || 1);
		};
		getProdutos();

	}, [cat, location.search]);

	useEffect(() => {
		const getBestseller = async () => {
			let produtos = await api.bestseller().then(data => data.data);
			setBestseller(produtos);
		};
		getBestseller();
	}, []);

	
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


	return (
		<Container margin>
			<PageArea>

			<Breadcrumb items={breadCrumb} />

				<div className="cx">
					<section className="pr">
						<h2 className="tit">{category && category.nome}</h2>

						<ul className="list-un dek">
							<li>{products && products.total + ' produtos'}</li>
							<li><ProductOrder val={productOrder} onChange={handleChangeProductOrder} /></li>
						</ul>

						{products && products.items.length > 0 &&
							<ProductList>
								{products.items.map((item, k) =>
									<ProductItem key={k} item={item} />
								)}
							</ProductList>
						}
						
						{products && products.items.length > 0 &&
							<div className="cx-pagination">
								<Pagination 
									total={products.total} 
									limit={products.limit} 
									currentPage={currentPage}
									setCurrentPage={handlePagination} />
							</div>
						}

						{bestseller.length > 0 &&
							<div>
								<h2 className="tit-p">Os mais vendidos</h2>
								<ProductList>
									{bestseller.map((item, k) =>
										<ProductItem key={k} item={item} />
									)}
								</ProductList>
							</div>
						}

					</section>
					<aside className="as">Filters</aside>
				</div>

			</PageArea>
		</Container>
	)
}

export default Page;