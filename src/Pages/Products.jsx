import { useState, useEffect } from "react";
import { Spinner, Input, Row } from "reactstrap";
import ProductComponent from "../Components/ProductComponent";
import "./Products.style.css";

function Products() {
	const [productList, setProductList] = useState(null);
	const [categoryList, setCategoryList] = useState(null);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((productListAPI) => setProductList(productListAPI));

		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((categoryListAPI) => setCategoryList(categoryListAPI));
	}, []);

	return (
		<>
			{productList ? (
				<div className='d-flex'>
					<div className='category_list'>
						<h2>Category List</h2>
						{categoryList.map((category, index) => {
							return <h6 key={"category_" + index}></h6>;
						})}
					</div>
					<div className='product_list'>
						<h2>SEARCH</h2>
						<Input className='w-25' />
						<Row>
							{productList.map((product, index) => {
								return (
									<ProductComponent
										product={product}
										key={"product_" + index}
									/>
								);
							})}
						</Row>
					</div>
				</div>
			) : (
				<Spinner>Loading...</Spinner>
			)}
		</>
	);
}
export default Products;
