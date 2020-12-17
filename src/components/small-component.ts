import styled from "styled-components";
import * as Banner from "../img/banner.png";
import * as MaskGroup from "../img/MaskGroup.png";
import * as FitnessConsultant from "../img/fitness-consultant.png";
import * as OnlineConsultantMobile from "../img/online-consultant-mobile.png";
import * as FitnessConsultantMobile from "../img/fitness-consultant-mobile.png";

export type ProfileImgProps = {
	width?: string;
	height?: string;
	borderRadius?: string;
};
export type SpaceTagProps = {
	marginTop?: string;
	marginBottom?: string;
	marginLeft?: string;
	marginRight?: string;
};
export type AtagProps = {
	color?: string;
	fontSize?: string;
};
export type PtagProps = {
	color?: string;
	fontSize?: string;
};
export type BoxProps = {
	background?: string;
	borderRadius?: string;
};
export type SubtextProps = {
	color?: string;
	fontSize?: string;
	fontWeight?: string;
	letterSpacing?: string;
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
export const ImageTag = styled.img<ProfileImgProps>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	border-radius: ${({ borderRadius }) => borderRadius};
`;
export const BannerBar = styled.section`
	background-color: #ffffff;
	color: #818181;
	background-position: center;
	background-image: url(${Banner});
	background-repeat: no-repeat;
	height: 272px;
	background-size: cover;
`;
export const H2tag = styled.h2`
	font-size: 26px;
	font-style: normal;
	font-weight: normal;
	text-transform: uppercase;
	letter-spacing: 1.24px;
	line-height: 20px;
	font-family: Cerebri, sans-serif;
	color: #ffffff;
`;
export const Spantag = styled.span`
	font-family: Cerebri, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 20px;
	letter-spacing: 1.26px;
	color: #ffffff;
`;
export const CenterTag = styled.div`
	font-family: Cerebri, sans-serif;
	font-style: normal;
	font-weight: normal;
	text-align: center;
`;
export const SpaceTag = styled.div<SpaceTagProps>`
	margin-top: ${({ marginTop }) => marginTop}px;
	margin-bottom: ${({ marginBottom }) => marginBottom}px;
	margin-left: ${({ marginLeft }) => marginLeft}px;
	margin-right: ${({ marginRight }) => marginRight}px;
`;
export const Atag = styled.a<AtagProps>`
	color: ${({ color }) => color};
	text-decoration: none;
	font-size: ${({ fontSize }) => fontSize}px;
	letter-spacing: 1.06px;
	font-family: Cerebri, sans-serif;
	font-style: normal;
	font-weight: normal;
	@media (min-width: 300px) {
		font-size: 15px !important;
	}
	@media (min-width: 400px) {
		font-size: 15px !important;
	}
	@media (min-width: 500px) {
		font-size: 15px !important;
	}
	@media (min-width: 667px) {
		font-size: 15px !important;
	}
	@media (min-width: 1025px) {
		font-size: ${({ fontSize }) => fontSize}px !important;
	}
`;
export const SectionConsultant = styled.section`
	background-color: #ffffff;
	color: #818181;
	margin-top: 60px;
	margin-bottom: 60px;
`;
export const H3tagConsultant = styled.h3`
	color: #000;
	font-size: 32px;
	margin-bottom: 30px;
	position: relative;
	word-wrap: break-word;
	line-height: 0.95;
	font-weight: 400;
	text-align: center;
	font-family: Cerebri, sans-serif;
	letter-spacing: 2.26px;
	margin-block-start: 10px;
	margin-block-end: 10px;
	@media (min-width: 300px) {
		font-size: 20px !important;
	}
	@media (min-width: 400px) {
		font-size: 20px !important;
	}
	@media (min-width: 500px) {
		font-size: 20px !important;
	}
	@media (min-width: 667px) {
		font-size: 22px !important;
	}
	@media (min-width: 684px) {
		font-size: 24px !important;
	}
	@media (min-width: 734px) {
		font-size: 26px !important;
	}
	@media (min-width: 1025px) {
		font-size: 32px !important;
	}
`;
export const Paratag = styled.p`
	color: #002e46;
	letter-spacing: 0.56px;
	font-family: Cerebri, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
`;
export const TextTag = styled.div`
	color: #4f5665;
	font-size: 14px;
	font-family: Rubik, sans-serif;
	font-style: normal;
	font-weight: 400;
	line-height: 30px;
`;
export const Ptag = styled.p<PtagProps>`
	color: ${({ color }) => color};
	letter-spacing: 0.96px;
	font-family: Cerebri, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: ${({ fontSize }) =>
		fontSize === undefined ? "14px" : fontSize};
	@media (min-width: 300px) {
		font-size: 15px;
		letter-spacing: 0.26px;
	}
	@media (min-width: 400px) {
		font-size: 15px;
		letter-spacing: 0.26px;
	}
	@media (min-width: 500px) {
		font-size: 15px;
		letter-spacing: 0.26px;
	}
	@media (min-width: 667px) {
		font-size: 16px;
		letter-spacing: 0.26px;
	}
	@media (min-width: 684px) {
		font-size: 16px;
		letter-spacing: 0.26px;
	}
	@media (min-width: 734px) {
		font-size: 16px;
		letter-spacing: 0.26px;
	}
	@media (min-width: 768px) {
		font-size: 16px;
		letter-spacing: 0.26px;
	}
	@media (min-width: 1025px) {
		font-size: ${({ fontSize }) =>
			fontSize === undefined ? "14px" : fontSize};
		letter-spacing: 0.96px;
	}
`;
export const SectionOnlineYoga = styled.section`
	background-color: #e3e3e3;
	color: #818181;
	background-position: right;
	background-image: url(${MaskGroup});
	background-repeat: no-repeat;
	height: 226px;
	border-radius: 9px;
	margin-bottom: 50px;
`;
export const SectionOnlineYogaMobile = styled.section`
	background-image: url(${OnlineConsultantMobile});
	height: 145px;
	margin-bottom: 25px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
`;
export const Boldtag = styled.span`
	font-weight: 600;
	font-size: 24px;
	color: #000;
	font-family: Cerebri, sans-serif;
	font-style: normal;
	@media (min-width: 300px) {
		font-size: 18px !important;
	}
	@media (min-width: 400px) {
		font-size: 18px !important;
	}
	@media (min-width: 500px) {
		font-size: 18px !important;
	}
	@media (min-width: 667px) {
		font-size: 18px !important;
	}
	@media (min-width: 684px) {
		font-size: 18px !important;
	}
	@media (min-width: 734px) {
		font-size: 18px !important;
	}
	@media (min-width: 1025px) {
		font-size: 24px !important;
	}
`;
export const ImageContainer = styled.div`
	position: relative;
	margin: 10px;
`;
export const ImageText = styled.div`
	position: absolute;
	top: 25px;
	left: 25px;
	width: 350px;
	@media (min-width: 300px) {
		width: 250px !important;
	}
	@media (min-width: 400px) {
		width: 250px !important;
	}
	@media (min-width: 500px) {
		width: 250px !important;
	}
	@media (min-width: 667px) {
		width: 250px !important;
	}
	@media (min-width: 684px) {
		width: 250px !important;
	}
	@media (min-width: 734px) {
		width: 250px !important;
	}
	@media (min-width: 1025px) {
		width: 350px !important;
	}
`;
export const DownloadMobile = styled.img`
	width: 201;
	height: 426;
`;
export const MobileImageTag = styled.img`
	width: 342px;
	height: 502px;
	@media (min-width: 300px) {
		height: 400px;
		width: 300px;
	}
	@media (min-width: 400px) {
		height: 400px;
		width: 300px;
	}
	@media (min-width: 500px) {
		height: 400px;
		width: 300px;
	}
`;
export const Heading = styled.h3`
	font-size: 28px;
	font-family: Cerebri, sans-serif;
	font-style: normal;
	color: #000;
	font-weight: 500;
	margin-block-start: 10px;
	margin-block-end: 10px;
	@media (min-width: 300px) {
		font-size: 18px !important;
	}
	@media (min-width: 400px) {
		font-size: 18px !important;
	}
	@media (min-width: 500px) {
		font-size: 18px !important;
	}
	@media (min-width: 667px) {
		font-size: 18px !important;
	}
	@media (min-width: 684px) {
		font-size: 18px !important;
	}
	@media (min-width: 734px) {
		font-size: 18px !important;
	}
	@media (min-width: 1025px) {
		font-size: 28px !important;
	}
`;
export const ImgTag = styled.img`
	width: -webkit-fill-available;
	@media (min-width: 300px) {
		width: 384.95px !important;
	}
	@media (min-width: 400px) {
		width: 384.95px !important;
	}
	@media (min-width: 500px) {
		width: 384.95px !important;
	}
	@media (min-width: 667px) {
		width: 384.95px !important;
	}
	@media (min-width: 684px) {
		width: 384.95px !important;
	}
	@media (min-width: 734px) {
		width: 384.95px !important;
	}
	@media (min-width: 760px) {
		width: 345.95px !important;
	}
	@media (min-width: 1000px) {
		width: 385px !important;
	}
	@media (min-width: 1025px) {
		width: -webkit-fill-available !important;
	}
`;
export const SectionFitness = styled.section`
	background-color: #f6b8bd;
	color: #818181;
	background-position: center;
	background-image: url(${FitnessConsultant});
	background-repeat: no-repeat;
	height: 227px;
	border-radius: 9px;
	margin-bottom: 50px;
`;
export const SectionFitnessMobile = styled.section`
	background-color: #f6b8bd;
	color: #818181;
	background-position: center;
	background-image: url(${FitnessConsultant});
	background-repeat: no-repeat;
	height: 145px;
	margin-bottom: 25px;
`;
export const SectionMultiConsultant = styled.section`
	background-color: #f8f8fb;
	color: #818181;
	background-position: center;
	background-repeat: no-repeat;
	height: 598px;
	margin-top: 30px;
	@media (min-width: 300px) {
		height: 932px;
	}
	@media (min-width: 400px) {
		height: 932px;
	}
	@media (min-width: 500px) {
		height: 932px;
	}
	@media (min-width: 667px) {
		height: 932px;
	}
	@media (min-width: 684px) {
		height: 932px;
	}
	@media (min-width: 734px) {
		height: 932px;
	}
	@media (min-width: 734px) {
		height: 932px;
	}
	@media (min-width: 768px) {
		height: 598px;
	}
`;
export const SectionHappyCustomer = styled.div`
	margin-top: 30px;
	margin-bottom: 30px;
`;
export const MobileAppHeading = styled.h1`
	font-size: 35px;
	letter-spacing: 1.26px;
	font-family: Cerebri, sans-serif;
	font-style: normal;
	font-weight: 500;
	color: #000;
	@media (min-width: 300px) {
		font-size: 26px;
	}
	@media (min-width: 400px) {
		font-size: 26px;
	}
	@media (min-width: 500px) {
		font-size: 26px;
	}
	@media (min-width: 667px) {
		font-size: 30px;
	}
`;
export const FlexTag = styled.div<FlexTagProps>`
	display: flex;
	justify-content: ${({ justifyContent }) => justifyContent};
`;
export const BoxContainer = styled.div<BoxProps>`
	background: ${({ background }) => background};
	border-radius: ${({ borderRadius }) => borderRadius};
	padding: 20px 35px 20px 35px;
`;
export const Subtext = styled.div<SubtextProps>`
	font-size: ${({ fontSize }) => fontSize};
	color: ${({ color }) => color};
	font-weight: ${({ fontWeight }) =>
		fontWeight === undefined ? "normal" : fontWeight};
	letter-spacing: ${({ letterSpacing }) =>
		letterSpacing === undefined ? "1.06px" : letterSpacing};
	font-family: Cerebri, sans-serif;
	font-style: normal;
`;
export const Horizontaltag = styled.div<HorizontaltagProps>`
	height: ${({ height }) => height};
	overflow: scroll;
`;
export const DotTag = styled.div`
	position: absolute;
	bottom: 25px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export type DotSpanProps = {
	background?: string;
};
export const DotSpanTag = styled.span<DotSpanProps>`
	padding: 10px;
	margin-right: 5px;
	cursor: pointer;
	border-radius: 50%;
	background: ${({ background }) => background};
`;
export const BackButtonTag = styled.button`
	background: #fff;
	border: 2px solid #029532;
	border-radius: 50%;
	width: 60px;
	height: 60px;
`;
export const RightButtonTag = styled.button`
	background: #029532;
	border: 2px solid #029532;
	border-radius: 50%;
	width: 60px;
	height: 60px;
`;
export const FooterTag = styled.div`
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
`;
export const ResposiveImag = styled.img`
	width: 130px;
	height: 130px;
	@media (min-width: 300px) {
		width: 100px;
		height: 103px;
	}
	@media (min-width: 400px) {
		width: 100px;
		height: 104px;
	}
	@media (min-width: 500px) {
		width: 100px;
		height: 104px;
	}
	@media (min-width: 600px) {
		width: 100px;
		height: 104px;
	}
	@media (min-width: 736px) {
		width: 100px;
		height: 90px;
	}
	@media (min-width: 768px) {
		width: 100px;
		height: 90px;
	}
	@media (min-width: 1020px) {
		width: 110px;
		height: 140px;
	}
	@media (min-width: 1025px) {
		width: 130px;
		height: 135px;
	}
`;
