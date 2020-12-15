import React from "react";
import { IconDimensionsProps } from "../icons-props";

export function EyeIcon({ color = "#000" }: IconDimensionsProps) {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0)">
				<path
					d="M0.666656 8C0.666656 8 3.33332 2.66666 7.99999 2.66666C12.6667 2.66666 15.3333 8 15.3333 8C15.3333 8 12.6667 13.3333 7.99999 13.3333C3.33332 13.3333 0.666656 8 0.666656 8Z"
					stroke="#9AB1BD"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
					stroke="#9AB1BD"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="16" height="16" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}
