import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.style.css";

function Footer() {
	return (
		<div className='footer_ecommerce'>
			<div>
				<h1>
					<Link to='/home'>Home</Link>-<Link to='/products'>Products</Link>
				</h1>
			</div>
			<div>
				<h2>OUTSTOCK</h2>
			</div>
			<div></div>
		</div>
	);
}
export default Footer;
