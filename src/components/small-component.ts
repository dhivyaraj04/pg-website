import styled from "styled-components";
import * as FitnessConsultant from "../img/fitness-consultant.png";
import * as OnlineConsultantMobile from "../img/online-consultant-mobile.png";

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
export const ImageTag = styled.img<ProfileImgProps>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	border-radius: ${({ borderRadius }) => borderRadius};
`;
export const ImageView = styled.img`
	width: -webkit-fill-available;
	@media (min-width: 300px) {
		width: 370px !important;
	}
	@media (min-width: 400px) {
		width: 380px !important;
	}
	@media (min-width: 500px) {
		width: 390px !important;
	}
	@media (min-width: 500px) {
		width: -webkit-fill-available !important;
	}
`;
export type BannerProps = {
	banner?: any;
};
export const BannerBar = styled.section<BannerProps>`
	background-color: #ffffff;
	color: #818181;
	background-position: center;
	background-image: url(${({ banner }) => banner});
	background-repeat: no-repeat;
	height: 272px;
	background-size: cover;
`;
export type Banner2Props = {
	banner?: any;
};
export const BannerBar2 = styled.section<Banner2Props>`
	background-color: #ffffff;
	color: #818181;
	background-position: center;
	background-image: url(${({ banner }) => banner});
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
	font-family: Cerebri Sans, sans-serif;
	color: #ffffff;
`;
export const Spantag = styled.span`
	font-family: Cerebri Sans, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 20px;
	letter-spacing: 1.26px;
	color: #ffffff;
`;
export const CenterTag = styled.div`
	font-family: Cerebri Sans, sans-serif;
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
	font-family: Cerebri Sans, sans-serif;
	font-style: normal;
	line-height: 21px;
	font-weight: normal;
	@media (min-width: 300px) {
		font-size: 14px !important;
	}
	@media (min-width: 400px) {
		font-size: 14px !important;
	}
	@media (min-width: 500px) {
		font-size: 14px !important;
	}
	@media (min-width: 667px) {
		font-size: 14px !important;
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
	font-size: 36px;
	margin-bottom: 30px;
	position: relative;
	word-wrap: break-word;
	line-height: 0.95;
	font-weight: 400;
	text-align: center;
	font-family: Cerebri Sans, sans-serif;
	letter-spacing: 0.26px;
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
		font-size: 36px !important;
	}
`;
export const Paratag = styled.p`
	color: #002e46;
	letter-spacing: 0.56px;
	font-family: Cerebri Sans, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
`;
export const TextTag = styled.div`
	color: #4f5665;
	font-size: 14px;
	font-family: Cerebri Sans, sans-serif;
	font-style: normal;
	font-weight: 400;
	line-height: 30px;
`;
export const Ptag = styled.p<PtagProps>`
	color: ${({ color }) => color};
	font-family: Cerebri Sans, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: ${({ fontSize }) =>
		fontSize === undefined ? "14px" : fontSize};
	@media (min-width: 300px) {
		font-size: 15px;
	}
	@media (min-width: 400px) {
		font-size: 15px;
	}
	@media (min-width: 500px) {
		font-size: 15px;
	}
	@media (min-width: 667px) {
		font-size: 16px;
	}
	@media (min-width: 684px) {
		font-size: 16px;
	}
	@media (min-width: 734px) {
		font-size: 16px;
	}
	@media (min-width: 768px) {
		font-size: 16px;
	}
	@media (min-width: 1025px) {
		font-size: ${({ fontSize }) =>
			fontSize === undefined ? "14px" : fontSize};
	}
`;
export type OnlineYogaPros = {
	banner?: string;
};
export const SectionOnlineYoga = styled.section<OnlineYogaPros>`
	background-color: #e3e3e3;
	color: #818181;
	background-position: right;
	background-image: url(${({ banner }) => banner});
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
	font-family: Cerebri Sans, sans-serif;
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
	font-family: Cerebri Sans, sans-serif;
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
		width: 310.95px !important;
	}
	@media (min-width: 400px) {
		width: 324.95px !important;
	}
	@media (min-width: 500px) {
		width: 324.95px !important;
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
		width: 530px !important;
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
	line-height: 50px;
	font-family: Cerebri Sans, sans-serif;
	font-style: normal;
	font-weight: 500;
	color: #000;
	@media (min-width: 300px) {
		font-size: 26px;
		line-height: 39px;
	}
	@media (min-width: 400px) {
		font-size: 26px;
		line-height: 39px;
	}
	@media (min-width: 500px) {
		font-size: 26px;
		line-height: 39px;
	}
	@media (min-width: 667px) {
		font-size: 26px;
		line-height: 39px;
	}
	@media (min-width: 770px) {
		font-size: 35px;
		line-height: 50px;
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
	position: absolute;
	width: -webkit-fill-available;
	background: #0e254d;
	bottom: 0;
	padding: 20px;
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
export type ImageBackgroundProps = {
	background?: any;
};
export const ImageBackgroundTag = styled.section<ImageBackgroundProps>`
	filter: alpha(opacity=50);
	transition: all 1s;
	-webkit-transition: all 1s;
	background-image: url(${({ background }) => background});
	height: 80px;
	width: 180px;
	background-repeat: no-repeat;
	border-radius: 10px;
	@media (min-width: 300px) {
		width: 150px;
		height: 55px;
	}
	@media (min-width: 400px) {
		width: 150px;
		height: 55px;
	}
	@media (min-width: 500px) {
		width: 150px;
		height: 55px;
	}
	@media (min-width: 600px) {
		width: 150px;
		height: 55px;
	}
	@media (min-width: 736px) {
		width: 160px;
		height: 80px;
	}
	@media (min-width: 768px) {
		width: 180px;
		height: 80px;
	}
	@media (min-width: 1020px) {
		width: 180px;
		height: 80px;
	}
	@media (min-width: 1025px) {
		width: 180px;
		height: 80px;
	}
`;
export const Opacity = styled.div`
	background: rgba(0, 0, 0, 0.46);
	border-radius: 10px;
	height: 78px;
	width: 180px;
	@media (min-width: 300px) {
		width: 150px;
		height: 55px;
	}
	@media (min-width: 400px) {
		width: 150px;
		height: 55px;
	}
	@media (min-width: 500px) {
		width: 150px;
		height: 55px;
	}
	@media (min-width: 600px) {
		width: 150px;
		height: 55px;
	}
	@media (min-width: 736px) {
		width: 160px;
		height: 80px;
	}
	@media (min-width: 768px) {
		width: 180px;
		height: 80px;
	}
	@media (min-width: 1020px) {
		width: 180px;
		height: 80px;
	}
	@media (min-width: 1025px) {
		width: 180px;
		height: 80px;
	}
`;
export const TextWidth = styled.div`
	width: 130px;
`;
export const TextTitle = styled.div`
	position: absolute;
	bottom: 10px;
	left: 8px;
	@media (min-width: 300px) {
		bottom: 5px;
	}
	@media (min-width: 400px) {
		bottom: 5px;
	}
	@media (min-width: 500px) {
		bottom: 5px;
	}
	@media (min-width: 600px) {
		bottom: 10px;
	}
	@media (min-width: 736px) {
		bottom: 10px;
	}
	@media (min-width: 768px) {
		bottom: 20px;
	}
	@media (min-width: 1020px) {
		bottom: 20px;
	}
	@media (min-width: 1025px) {
		bottom: 10px;
	}
`;
export const SectionIconText = styled.section`
	background-color: #f3f3fa;
	color: #818181;
	background-position: center;
	background-repeat: no-repeat;
	height: 340px;
	margin-bottom: 20px;
	@media (min-width: 300px) {
		height: 800px;
	}
	@media (min-width: 400px) {
		height: 800px;
	}
	@media (min-width: 500px) {
		height: 800px;
	}
	@media (min-width: 667px) {
		height: 800px;
	}
	@media (min-width: 684px) {
		height: 800px;
	}
	@media (min-width: 734px) {
		height: 800px;
	}
	@media (min-width: 734px) {
		height: 800px;
	}
	@media (min-width: 768px) {
		height: 340px;
	}
`;
export type CardBlock = {
	border?: string;
	borderRadius?: string;
	padding?: string;
};
export const CardBlock = styled.div<CardBlock>`
	border: ${({ border }) => border};
	border-radius: ${({ borderRadius }) => borderRadius};
	padding: ${({ padding }) => padding};
	margin: 5px;
	height: auto;
	overflow: auto;
`;
export const Player = styled.video`
	width: 500px;
	height: 500px;
`;
export type loadMoreProps = {
	width?: string;
	height?: string;
	fontSize?: string;
	padding?: string;
	background?: string;
	color?: string;
	border?: string;
};
export const LoadMorebutton = styled.button<loadMoreProps>`
	border: ${({ border }) => border};
	box-sizing: border-box;
	border-radius: 4px;
	background: ${({ background }) => background};
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	font-size: ${({ fontSize }) => fontSize};
	padding: ${({ padding }) => padding};
	color: ${({ color }) => color};
	text-transform: capitalize;
`;
export const ViewMoreButton = styled.button`
	color: #009846;
	background: none;
	border: none;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
`;
export const ImageWidth = styled.img`
	height: 260px;
	width: 323px;
	@media (min-width: 300px) {
		height: 230px;
		width: 230px;
	}
	@media (min-width: 330px) {
		height: 230px;
		width: 254px;
	}
	@media (min-width: 374px) {
		height: 260px;
		width: 303px;
	}
	@media (min-width: 400px) {
		height: 270px;
		width: 342px;
	}
	@media (min-width: 500px) {
		height: 214px;
		width: 214px;
	}
	@media (min-width: 667px) {
		height: 214px;
		width: 214px;
	}
	@media (min-width: 684px) {
		height: 214px;
		width: 214px;
	}
	@media (min-width: 734px) {
		height: 214px;
		width: 214px;
	}
	@media (min-width: 768px) {
		height: 260px;
		width: 304px;
	}
	@media (min-width: 771px) {
		height: 183px;
		width: 183px;
	}
	@media (min-width: 990px) {
		height: 260px;
		width: 263px;
	}
	@media (min-width: 1025px) {
		height: 260px;
		width: 263px;
	}
	@media (min-width: 1026px) {
		height: 260px;
		width: 262px;
	}
	@media (min-width: 1200px) {
		height: 260px;
		width: 323px;
	}
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
`;
export const OrderTag = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
`;
export const ListTag = styled.li`
	padding: 5px;
`;
export const ChatContainer = styled.div`
	position: fixed;
	bottom: 10%;
	right: 5%;
	@media (min-width: 300px) {
		bottom: 2%;
		right: 3%;
	}
	@media (min-width: 735px) {
		bottom: 10%;
		right: 5%;
	}
`;
export const ChatBot = styled.div`
	position: fixed;
	height: 450px;
	width: 400px;
	bottom: 20%;
	right: 10%;
	background: #fff;
	border-radius: 10px 10px 10px 10px;
	box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
	@media (min-width: 300px) {
		height: 425px;
		width: 300px;
		right: 17%;
	}
	@media (min-width: 330px) {
		height: 425px;
		width: 300px;
		right: 17%;
	}
	@media (min-width: 374px) {
		height: 422px;
		width: 340px;
		right: 5%;
		bottom: 14%;
	}
	@media (min-width: 400px) {
		height: 425px;
		width: 365px;
		right: 6%;
		bottom: 12%;
	}
	@media (min-width: 414px) {
		height: 450px;
		width: 380px;
		right: 4%;
		bottom: 11%;
	}
	@media (min-width: 500px) {
		height: 450px;
		width: 380px;
		right: 4%;
		bottom: 11%;
	}
	@media (min-width: 667px) {
		height: 214px;
		width: 214px;
	}
	@media (min-width: 668px) {
		height: 450px;
		width: 380px;
		right: 4%;
		bottom: 11%;
	}
	@media (min-width: 684px) {
		right: 5%;
		height: 240px;
		width: 450px;
		bottom: 12%;
	}
	@media (min-width: 734px) {
		right: 10%;
		height: 200px;
		width: 420px;
		bottom: 15%;
	}
	@media (min-width: 768px) {
		height: 450px;
		width: 375px;
		bottom: 10%;
		right: 5%;
	}
	@media (min-width: 771px) {
		height: 450px;
		width: 375px;
		bottom: 15%;
		right: 5%;
	}
	@media (min-width: 990px) {
		height: 400px;
		width: 400px;
		bottom: 15%;
		right: 4%;
	}
	@media (min-width: 1025px) {
		height: 450px;
		width: 400px;
		bottom: 20%;
		right: 10%;
	}
	@media (min-width: 1026px) {
		height: 450px;
		width: 400px;
		bottom: 20%;
		right: 10%;
	}
	@media (min-width: 1200px) {
		height: 450px;
		width: 400px;
		bottom: 20%;
		right: 5%;
	}
`;
export const ChatHeader = styled.div`
	background: #009846;
	border-radius: 10px 10px 0px 0px;
	padding: 20px;
	@media (max-width: 300px) {
		padding: 8px;
	}
	@media (max-width: 400px) {
		padding: 8px;
	}
	@media (max-width: 667px) {
		padding: 8px;
	}
	@media (max-width: 684px) {
		padding: 8px;
	}
	@media (max-width: 734px) {
		padding: 8px;
	}
	@media (min-width: 735px) {
		padding: 20px;
	}
`;
export const ChatContent = styled.div`
	padding: 10px;
	height: 200px;
	overflow: auto;
	@media (min-width: 667px) {
		height: 60px;
	}
	@media (min-width: 668px) {
		height: 300px;
	}
	@media (min-width: 684px) {
		height: 70px;
	}
	@media (min-width: 685px) {
		height: 300px;
	}
	@media (min-width: 734px) {
		height: 70px;
	}
	@media (min-width: 735px) {
		height: 300px;
	}
`;
export const ChatFooter = styled.div`
	background: #fff;
	border-radius: 0px 0px 10px 10px;
`;
export const Overflow = styled.div`
	overflow: auto;
`;
export const CursorTag = styled.div`
	cursor: pointer;
`;
export const InputTag = styled.input`
	width: -webkit-fill-available;
	border: none;
	margin: 10px;
	font-size: 16px;
	height: 30px;
	color: #979797;
`;
