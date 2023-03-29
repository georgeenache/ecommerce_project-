import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Carusel.style.css";
function Carusel() {
	return (
		<Carousel className='carousel_container'>
			<Carousel.Item className='carousel_item'>
				<img
					className='w-100
								'
					src='https://images.unsplash.com/photo-1577733975197-3b950ca5cabe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80	'
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
					<Button outline>
						<Link className='link_produse' to='/products'>
							Products
						</Link>
					</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className='carousel_item'>
				<img
					className='w-100'
					src='https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80'
				/>

				<Carousel.Caption className='carusel_caption'>
					<h3 className='titlu_tricou'>
						Mens Casual Premium Slim Fit T-Shirts
					</h3>
					<p className='descriere_tricou'>
						Un tricou potrivit pentru zilele calduroase de vara. Este realizat
						din tesaturi fine si cu o croiala de o inalta calitate ce va asigura
						confortul sporit.
					</p>
					<Button outline>
						<Link className='link_produse' to='/products'>
							Products
						</Link>
					</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className='carousel_item'>
				<img
					className='w-100'
					src='https://images.unsplash.com/photo-1578091879915-33ee869e2cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1302&q=80'
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
					<Button outline>
						<Link className='link_produse' to='/products'>
							Products
						</Link>
					</Button>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
export default Carusel;
