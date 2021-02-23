import React from "react";
import { IconDimensionsProps } from "../icons-props";

export function UploadIcon({ color = "#000" }: IconDimensionsProps) {
	return (
		<svg
			id="bold"
			enable-background="new 0 0 24 24"
			height="38"
			viewBox="0 0 24 24"
			width="38"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="m13.25 18h-2.5c-.689 0-1.25-.561-1.25-1.25v-5.75h-2.75c-.657 0-.998-.791-.543-1.268l5.25-5.5c.283-.296.803-.296 1.086 0l5.25 5.5c.455.477.114 1.268-.543 1.268h-2.75v5.75c0 .689-.561 1.25-1.25 1.25z"
				fill="#fff"
			/>
			<path
				d="m21 24h-18c-1.654 0-3-1.346-3-3v-5c0-1.654 1.346-3 3-3h1.5c.552 0 1 .448 1 1s-.448 1-1 1h-1.5c-.551 0-1 .449-1 1v5c0 .551.449 1 1 1h18c.551 0 1-.449 1-1v-5c0-.551-.449-1-1-1h-1.5c-.552 0-1-.448-1-1s.448-1 1-1h1.5c1.654 0 3 1.346 3 3v5c0 1.654-1.346 3-3 3z"
				fill="#fff"
			/>
		</svg>
	);
}
