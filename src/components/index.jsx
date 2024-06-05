import { useEffect, useState } from "react";

export default function RandomColor() {
	const [typeOfcolor, setTypeOfColor] = useState("hex");
	const [color, setColor] = useState("#000000");
	function randomColorUtility(length) {
		return Math.floor(Math.random() * length);
	}
	function handleCreateRandomHexColor() {
		const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
		let hexColor = "#";
		for (let i = 0; i < 6; i++) {
			hexColor += hex[randomColorUtility(hex.length)];
		}
		setColor(hexColor);
	}
	function handleCreateRandomRgbColor() {
		const r = randomColorUtility(256);
		const g = randomColorUtility(256);
		const b = randomColorUtility(256);
		setColor(`rgb (${r}, ${g}, ${b})`);
		useEffect(() => {
			if (typeOfcolor === "rgb") handleCreateRandomRgbColor();
			else handleCreateRandomHexColor();
		}, [typeOfcolor]);
	}

	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				background: color,
			}}
		>
			<button onClick={() => setTypeOfColor("hex")}>Generate Hex Color</button>
			<button onClick={() => setTypeOfColor("rgb")}>Generate Rgb Color</button>
			<button
				onClick={
					typeOfcolor === "hex"
						? handleCreateRandomHexColor
						: handleCreateRandomRgbColor
				}
			>
				Generate Random Color
			</button>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					color: "#fff",
					fontSize: "60px",
					marginTop: "50px",
					flexDirection: "column",
				}}
			>
				<h3>{typeOfcolor === "rgb" ? "RGB" : "HEX"}</h3>
				<h1>{color}</h1>
			</div>
		</div>
	);
}
