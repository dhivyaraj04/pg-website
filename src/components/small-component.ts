import styled from "styled-components";

export type TextProps = {
	color?: string;
	fontSize?: string;
	fontWeight?: string;
	letterSpacing?: string;
	lineHeight?: string;
};
export type FlexTagProps = {
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
export type HorizontaltagProps = {
	height?: string;
};

export type BannerProps = {
	banner?: any;
};
export const BannerImage = styled.section<BannerProps>`
	background-color: #ffffff;
	color: #818181;
	background-position: center;
	background-image: url(${({ banner }) => banner});
	background-repeat: no-repeat;
	height: 500px;
	background-size: cover;
	@media (max-width: 768px) {
		height: 280px;
	}
`;

export const CenterTag = styled.div`
	font-family: Cerebri Sans, sans-serif;
	font-style: normal;
	font-weight: normal;
	text-align: center;
`;

export const FlexTag = styled.div<FlexTagProps>`
	display: flex;
	justify-content: ${({ justifyContent }) => justifyContent};
`;

export const Text = styled.div<TextProps>`
	font-size: ${({ fontSize }) => fontSize};
	color: ${({ color }) => color};
	font-weight: ${({ fontWeight }) =>
		fontWeight === undefined ? "normal" : fontWeight};
	letter-spacing: ${({ letterSpacing }) =>
		letterSpacing === undefined ? "0px" : letterSpacing};
	line-height: ${({ lineHeight }) =>
		lineHeight === undefined ? "1.5" : lineHeight};
	font-family: Cerebri Sans, sans-serif;
	font-style: normal;
`;
export const Horizontaltag = styled.div<HorizontaltagProps>`
	height: ${({ height }) => height};
	overflow: auto;
`;

export const FooterTag = styled.div`
	width: -webkit-fill-available;
	background: #000000;
	bottom: 0;
	padding: 20px;
	line-height: 100px;
	position: absolute;
`;
export type HorizontalLineProps = {
	borderTop?: string;
	borderBottom?: string;
};
export const HorizontalLine = styled.div<HorizontalLineProps>`
	border-top: ${({ borderTop }) => borderTop};
	border-bottom: ${({ borderBottom }) => borderBottom};
`;
export const SearchBlock = styled.div`
	padding: 10px;
	margin-top: 5px;
	background: rgba(232, 228, 228, 0.76);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 50px;
`;
export const SectionFooter = styled.section`
	background-color: #f8f8f8;
	color: #818181;
	background-position: center center;
	background-repeat: no-repeat;
	height: 460px;
	margin-top: 30px;
	@media (max-width: 768px) {
		height: 640px;
	}
`;
export type SpaceTagProps = {
	marginTop?: string;
	marginBottom?: string;
	marginLeft?: string;
	marginRight?: string;
};
export const SpaceTag = styled.div<SpaceTagProps>`
	margin-top: ${({ marginTop }) => marginTop}px;
	margin-bottom: ${({ marginBottom }) => marginBottom}px;
	margin-left: ${({ marginLeft }) => marginLeft}px;
	margin-right: ${({ marginRight }) => marginRight}px;
`;
export const CircleTag = styled.div`
	padding: 10px;
	height: 30px;
	width: 30px;
	border-radius: 50%;
	background: #c4c4c4;
`;
export const InputTag = styled.input`
	border: none;
	margin: 10px;
	font-size: 16px;
	height: 30px;
	color: #979797;
	padding: 10px;
`;
export const SectionBookVisit = styled.section`
	background-color: #9a9d0f;
	color: #818181;
	background-position: center center;
	background-repeat: no-repeat;
	height: 200px;
	margin-top: 30px;
	@media (max-width: 768px) {
		height: 340px;
	}
`;
export const AmenitiesCircleTag = styled.div`
	padding: 10px;
	height: 60px;
	width: 60px;
	border-radius: 50%;
	background: #c4c4c4;
`;
export const AmenitiesCircleColor = styled.div`
	padding: 5px;
	height: 20px;
	width: 20px;
	border-radius: 50%;
	background: #fff;
	border: 20px solid #9a9d0f;
`;
export const SectionBannerRight = styled.section`
	background-color: #9a9d0f;
	background-position: center center;
	background-repeat: no-repeat;
	height: 500px;
	@media (max-width: 768px) {
		height: 390px;
	}
`;
export const BannerCircle = styled.div`
	padding: 10px;
	height: 60px;
	width: 60px;
	border-radius: 50%;
	background: #fff;
`;
export const BookVisitButton = styled.button`
	background: #fff;
	border-radius: 25px;
	padding: 10px;
	color: #000;
	border: none;
	font-size: 20px;
`;
export const BannerButton = styled.button`
	background: #fff;
	border-radius: 25px;
	padding: 10px;
	color: #000;
	border: none;
	font-size: 16px;
	margin: 10px;
`;
export const FlyButton = styled.div`
	justify-content: space-evenly;
	z-index: auto;
	position: inherit;
	margin-top: -60px;
`;
export const MenuButton = styled.button`
	background: none;
	border: none;
`;
export const SearchIconCircle = styled.div`
	background: rgba(154, 157, 15, 0.73);
	border-radius: 50%;
	width: 20px;
	height: 20px;
	padding: 10px;
`;
export const SearchInputTag = styled.input`
	background: none;
	color: #000;
`;
export const FloatingTag = styled.div`
	position: relative;
	z-index: 100;
	top: 25px;
`;
export const BookAVistitButton = styled.button`
	background: #fff;
	color: #000;
	border: none;
	padding: 10px;
	font-size: 20px;
`;
