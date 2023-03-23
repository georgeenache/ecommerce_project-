import { Card, CardBody, CardTitle, CardText, Button, Col } from "reactstrap";
import "./ProductComponent.style.css";

function ProductComponent({ product }) {
	const addToWishlist = () => {
		const productsString = localStorage.getItem("produse");

		if (productsString !== null) {
			const products = JSON.parse(productsString);

			const existNR = products.find((productElement) => {
				return productElement.id === product.id;
			});

			if (existNR === undefined) {
				products.push(product);
			}

			localStorage.setItem("produse", JSON.stringify(products));
		} else {
			const newProducts = [];
			newProducts.push(product);
			localStorage.setItem("produse", JSON.stringify(newProducts));
		}
	};
	return (
		<Col className='mt-4'>
			<Card className='card_style'>
				<img src={product.image} className='product_image' />
				<CardBody>
					<CardTitle tag='h5'>{product.title}</CardTitle>

					<CardText>{product.category}</CardText>

					<CardText>{product.price}$</CardText>

					<Button
						color='danger'
						onClick={() => {
							addToWishlist;
						}}>
						Add to Wishlist!
					</Button>
				</CardBody>
			</Card>
		</Col>
	);
}
export default ProductComponent;
