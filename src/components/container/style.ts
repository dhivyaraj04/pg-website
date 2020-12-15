import styled from "styled-components";

export type ContainerProps = {
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
};
export const ContainerTag = styled.div<ContainerProps>`
	display: ${({ display }) => display};
	grid-auto-flow: ${({ gridAutoFlow }) => gridAutoFlow};
	justify-content: ${({ justifyContent }) => justifyContent};
`;
