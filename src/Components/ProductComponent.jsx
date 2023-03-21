import { Card, CardBody, CardTitle, CardText, Button, Col } from "reactstrap";

function ProductComponent({ product }) {
	return (
		<Col className='mt-4'>
			<Card>
				<img src={"https://fakestoreapi.com/products" + product.id} />
				<CardBody>
					<CardTitle tag='h5'>{product.title}</CardTitle>
					<CardText>{product.body}</CardText>
					<Button>Add to Wishlist!</Button>
				</CardBody>
			</Card>
		</Col>
	);
}
export default ProductComponent;
