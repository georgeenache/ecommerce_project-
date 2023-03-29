import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import "./Wishlist.style.css";

function Wishlist() {
	const [wishlistProducts, setWishlistProducts] = useState([]);

	useEffect(() => {
		const productsString = localStorage.getItem("produse");
		if (productsString !== null) {
			const products = JSON.parse(productsString);
			setWishlistProducts(products);
		}
	}, []);

	const onDelete = (productId) => {
		const filteredProducts = wishlistProducts.filter(
			(product) => product.id !== productId
		);
		localStorage.setItem("produse", JSON.stringify(filteredProducts));
		setWishlistProducts(filteredProducts);
	};

	return (
		<>
			<img className='wishlist_image' src />
			<Table bordered>
				<thead>
					<tr>
						<th></th>
						<th>Product Name</th>
						<th>Product Price</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope='row'>1</th>
						<td>
							{wishlistProducts.map((product, index) => {
								return <li key={"product_" + index}>{product.title}</li>;
							})}
						</td>
						<td></td>
						<td>
							<Button
								className='buton_delete'
								color='danger'
								onClick={() => {
									onDelete(product.id);
								}}>
								Delete
							</Button>
						</td>
					</tr>
					<tr>
						<th scope='row'>2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>
							<Button
								className='buton_delete'
								color='danger'
								onClick={() => {
									onDelete(product.id);
								}}>
								Delete
							</Button>
						</td>
					</tr>
					<tr>
						<th scope='row'>3</th>
						<td>Larry</td>
						<td>the Bird</td>
						<td>
							<Button
								className='buton_delete'
								color='danger'
								onClick={() => {
									onDelete(product.id);
								}}>
								Delete
							</Button>
						</td>
					</tr>
				</tbody>
			</Table>

			<div className='wishlist_page'>
				<h2 className='title_wishlist'>Wishlist page</h2>
				<ul className='tabel_wishlist'>
					{wishlistProducts.map((product, index) => {
						return (
							<li key={"product_" + index} className='mt-2'>
								{product.title}
								<Button
									className='buton_delete'
									color='danger'
									onClick={() => {
										onDelete(product.id);
									}}>
									Delete
								</Button>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}

export default Wishlist;
