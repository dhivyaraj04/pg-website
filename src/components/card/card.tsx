import React, { ReactElement } from "react";
import { CardBloclk, CenterTag } from "./style";

interface CardProps {
	children?: ReactElement | ReactElement[];
	border?: string;
	borderRadius?: string;
	flexDirection?: "row" | "column";
	borderColor?: string;
	textAlign?: string;
	margin?: string;
	width?: string;
}

export function Card({
	children,
	border = "1",
	borderRadius = "5",
	flexDirection = "row",
	borderColor = "#e8eef3",
	textAlign = "undefined",
	margin = "undefined",
	width = "undefined"
}: CardProps) {
	return (
		<>
			<CardBloclk
				border={border}
				borderRadius={borderRadius}
				borderColor={borderColor}
				flexDirection={flexDirection}
				width={width}
			>
				<CenterTag textAlign={textAlign} margin={margin}>
					{children}
				</CenterTag>
			</CardBloclk>
		</>
	);
}
