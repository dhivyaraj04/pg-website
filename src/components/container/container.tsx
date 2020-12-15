import React, { ReactElement } from "react";
import { ContainerTag } from "./style";

export type ContainerProps = {
	children?: ReactElement[] | ReactElement;
	display?: "block" | "inline" | "flex" | "grid" | "none";
	gridAutoFlow?: "column" | "row" | "dense" | "inherit" | "revert" | "unset";
	justifyContent?:
		| "flex-start"
		| "flex-end"
		| "center"
		| "space-between"
		| "space-around"
		| "initial"
		| "inherit"
		| "space-evenly";
	className?: string;
};

export function Container({
	children,
	display,
	gridAutoFlow,
	justifyContent,
	className
}: ContainerProps) {
	return (
		<ContainerTag
			display={display}
			gridAutoFlow={gridAutoFlow}
			justifyContent={justifyContent}
			className={className}
		>
			{children}
		</ContainerTag>
	);
}
