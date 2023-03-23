import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Carusel.style.css";
function Carusel() {
	return (
		<Carousel className='d-flex'>
			<Carousel.Item className='carousel_container'>
				<img
					className='carousel_img'
					src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
				/>
				<Carousel.Caption className='carusel_caption'>
					<h3 className='titlu_produs'>
						Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
					</h3>
					<p className='descriere_produs'>
						Un ghiozdan foarte util si comod. Cu un design simplu si elegant,
						este alegerea potrivita. De asemenea este realizat din materiale
						biodegradabile ceea ce inseamna ca este prietenos cu mediul
						incojurator.
					</p>
					<Button>
						<Link to='/products'>Products</Link>
					</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className='carousel_container'>
				<img
					className='carousel_img'
					src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
				/>

				<Carousel.Caption className='carusel_caption'>
					<h3 className='titlu_produs'>
						Mens Casual Premium Slim Fit T-Shirts
					</h3>
					<p className='descriere_produs'>
						Un tricou potrivit pentru zilele calduroase de vara. Este realizat
						din tesaturi fine si cu o croiala de o inalta calitate ce va asigura
						confortul sporit.
					</p>
					<Button>
						<Link to='/products'>Products</Link>
					</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className='carousel_container'>
				<img
					className='carousel_img'
					src='https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg'
				/>

				<Carousel.Caption className='carusel_caption'>
					<h3 className='titlu_produs'>
						Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin
					</h3>
					<p className='descriere_produs'>
						Un monitor exceptional. Este cea mai buna alegere pe care o veti
						putea gasi pe piata in raport calitate-pret. Culorile sunt vii, iar
						rata de reincarcare este una ridicata, fiind pe placul amatorilor de
						jocuri online.
					</p>
					<Button>
						<Link to='/products'>Products</Link>
					</Button>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
export default Carusel;
