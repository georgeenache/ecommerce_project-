import {
	CardGroup,
	Card,
	CardBody,
	CardTitle,
	CardImg,
	CardText,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./Categories.style.css";

function Categories() {
	return (
		<>
			<CardGroup>
				<Card>
					<CardImg
						src='https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
						top
						width='100%'
						height='50%'
					/>
					<CardBody>
						<CardTitle tag='h5'>
							<Link className='link_products' to='/products'>
								Dicover Now
							</Link>
						</CardTitle>

						<CardText>Men's clothing</CardText>
					</CardBody>
				</Card>
				<Card>
					<CardImg
						src='https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
						top
						width='100%'
						height='50%'
					/>
					<CardBody>
						<CardTitle tag='h5'>
							<Link className='link_products' to='/products'>
								Dicover Now
							</Link>
						</CardTitle>

						<CardText>Jewelery</CardText>
					</CardBody>
				</Card>
				<Card>
					<CardImg
						src='https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
						top
						width='100%'
						height='50%'
					/>
					<CardBody>
						<CardTitle tag='h5'>
							<Link className='link_products' to='/products'>
								Dicover Now
							</Link>
						</CardTitle>

						<CardText>Women's clothing</CardText>
					</CardBody>
				</Card>
				<Card>
					<CardImg
						src='https://images.unsplash.com/photo-1566647387313-9fda80664848?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
						top
						width='100%'
						height='50%'
					/>
					<CardBody>
						<CardTitle tag='h5'>
							<Link className='link_products' to='/products'>
								Dicover Now
							</Link>
						</CardTitle>

						<CardText>Electronics</CardText>
					</CardBody>
				</Card>
			</CardGroup>
		</>
	);
}
export default Categories;
