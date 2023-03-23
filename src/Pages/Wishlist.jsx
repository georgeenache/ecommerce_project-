import { useEffect, useState } from "react";
import { Button } from "reactstrap";

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
			<h2>Wishlist page</h2>
			<ul>
				{wishlistProducts.map((product, index) => {
					return (
						<li key={"product_" + index} className='mt-2'>
							{product.title}
							<Button
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
		</>
	);
}

export default Wishlist;
