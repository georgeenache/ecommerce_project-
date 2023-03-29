import { useState, useEffect } from "react";
import { Spinner, Row } from "reactstrap";
import ProductComponent from "./ProductComponent";
import "./TrendingComponent.style.css";

function TrendingComponent() {
	const [trendingList, setTrendingList] = useState(null);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products?limit=8")
			.then((res) => res.json())
			.then((trendingListAPI) => setTrendingList(trendingListAPI));
	}, []);

	return (
		<div className='trending_container'>
			{trendingList ? (
				<div>
					<div className='trending_list'>
						<h1 className='trending_title'>Trending List</h1>
						<Row xs='4'>
							{trendingList.map((product) => {
								return <ProductComponent product={product} key={product} />;
							})}
						</Row>
					</div>
				</div>
			) : (
				<Spinner>Loading Trending List</Spinner>
			)}
		</div>
	);
}
export default TrendingComponent;
