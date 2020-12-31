import styled from "styled-components";

export interface CardProps {
	border?: string;
	borderRadius?: string;
	flexDirection?: "row" | "column";
	borderColor?: string;
	margin?: string;
	textAlign?: string;
	width?: string;
	height?: string;
}
export const CardBloclk = styled.div<CardProps>`
	border: ${({ border }) => border}px solid;
	border-color: ${({ borderColor }) => borderColor};
	border-radius: ${({ borderRadius }) => borderRadius}px;
	display: flex;
	padding: 10px;
	margin: 5px;
	flex-direction: ${({ flexDirection }) => flexDirection};
	width: ${({ width }) => (width ? width : "-webkit-fill-available")};
	height: ${({ height }) => (height ? height : "")};
`;
export const CenterTag = styled.div<CardProps>`
	margin: ${({ margin }) => margin};
	text-align: ${({ textAlign }) => textAlign};
`;
