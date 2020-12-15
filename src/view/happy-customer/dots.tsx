import React from "react";
import { css, jsx } from "@emotion/core";

// export function Dot({ active }) {
// 	return (
// 		<span
// 			css={css`
// 				padding: 10px;
// 				margin-right: 5px;
// 				cursor: pointer;
// 				border-radius: 50%;
// 				background: ${active ? "black" : "white"};
// 			`}
// 		/>
// 	);
// }

export function Dots({ slides, activeSlide }) {
	console.log(slides, activeSlide);
	return (
		<div
			css={css`
				position: absolute;
				bottom: 25px;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			`}
		>
			{slides.map((slide, i) => (
				<span
					css={css`
						padding: 10px;
						margin-right: 5px;
						cursor: pointer;
						border-radius: 50%;
						background: ${activeSlide === i ? "black" : "white"};
					`}
				/>
			))}
		</div>
	);
}
