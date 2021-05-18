import React, { useState, useEffect } from "react";

export function Home() {
	const [resourceType, setresourceType] = useState("posts");
	const [items, setItems] = useState([]);

	console.log("render");
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
			.then(response => response.json())
			.then(json => setItems(json));
	}, [resourceType]);

	return (
		<>
			<div className="text-center mt-5">
				<button onClick={() => setresourceType("posts")}>Posts</button>
				<button onClick={() => setresourceType("users")}>Users</button>
				<button onClick={() => setresourceType("comments")}>
					Comments
				</button>
			</div>
			<h1>{resourceType}</h1>
			{items.map((item, index) => {
				return <pre key={index}>{JSON.stringify(item)}</pre>;
			})}
		</>
	);
}
