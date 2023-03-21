import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Wishlist from "./Pages/Wishlist";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

function App() {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/products' element={<Products />} />
				<Route path='/wishlist' element={<Wishlist />} />
				<Route path='/*' element={<h1>NOT FOUND!</h1>} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
