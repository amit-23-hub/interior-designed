import React from 'react';
import classic from "../../../../assets/images/classic.jpg";
import luxury from "../../../../assets/images/luxury.jpg";
import surreal from "../../../../assets/images/surreal.jpg";
import bright from "../../../../assets/images/bright.jpg";
import './collection.css'; 

const Collections = () => {
	const collectionItems = [
		{
			title: "Classic",
			image: classic,
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias omnis, ad modi expedita, velit aperiam dignissimos voluptas",
		},
		{
			title: "Luxury",
			image: luxury,
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quibusdam sint culpa aperiam, maiores velit, delectus iure.",
		},
		{
			title: "Light , Bright",
			image: bright,
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quibusdam sint culpa aperiam, maiores velit, delectus iure.",
		},
		{
			title: "Surreal",
			image: surreal,
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quibusdam sint culpa aperiam, maiores velit, delectus iure.",
		},
	];
	return (
		<div className="collections-container">
			{collectionItems.map((item, index) => (
				<div
					key={index}
					className="collection-item"
					style={{ backgroundImage: `url(${item.image})` }}
				>
					<div className="overlay"></div>
					<div className="item-title">
						<div>{item.title}</div>
						<div>Collection</div>
					</div>
					<div className="item-desc">
						<p>{item.desc}</p>
						<a href="#">Read More</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default Collections;
