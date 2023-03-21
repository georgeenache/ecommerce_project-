import { Link } from "react-router-dom";
import "./Navigation.style.css";

function Navigation() {
	return (
		<div className='navbar_ecommerce'>
			<div>
				<Link to='/home'>Home</Link>
				<Link to='/products'>Products</Link>
			</div>
			<div>
				<h1>OUTSTOCK</h1>
			</div>
			<div>
				<Link to='/wishlist'>Wishlist</Link>
			</div>
		</div>
	);
}
export default Navigation;
