import styled from "styled-components";
import { Navbar, NavbarLink } from "styled-navbar-component";
import { Button } from "styled-button-component";
import Link from "next/link";
export const LinkTag = styled(Link)`
	text-decoration: none;
	color: #000 !important;
	font-size: 30px;
`;
export const NavbarButton = styled(Button)`
	font-size: 28px;
	border: none;
	@media (min-width: 320px) {
		height: 35px;
		margin-top: 10px;
	}
	@media (min-width: 374px) {
		height: 35px;
		margin-top: 10px;
	}
`;
export const Navbarblock = styled(Navbar)`
	position: relative;
	color: rgba(0, 0, 0, 0.5);
	border-color: rgba(0, 0, 0, 0.1);
	background-color: #fff !important;
	font-weight: 500;
	font-family: "Cerebri Sans";
	@media (min-width: 667px) {
		padding: 0.5rem;
		font-size: 14px;
	}
	@media (min-width: 684px) {
		padding: 0.5rem;
		font-size: 14px;
	}
	@media (min-width: 734px) {
		padding: 0.5rem;
		font-size: 14px;
	}
	@media (min-width: 736px) {
		padding: 0.5rem;
		font-size: 16px;
	}
	@media (min-width: 768px) {
		padding: 0.5rem;
		font-size: 16px;
	}
	@media (min-width: 1024px) {
		padding: 0px 0px 0px 0px !important;
		font-size: 16px;
	}
`;
export const NavbarLinkblock = styled(NavbarLink)`
	padding: 0.5rem !important;
	@media (min-width: 667px) {
		padding: 0.5rem !important;
	}
	@media (min-width: 684px) {
		padding: 0.5rem !important;
	}
	@media (min-width: 734px) {
		padding: 0.5rem !important;
	}
	@media (min-width: 736px) {
		padding: 0.5rem !important;
	}
	@media (min-width: 768px) {
		padding: 0.5rem !important;
	}
	@media (min-width: 1024px) {
		padding: 0.5rem !important;
	}
`;
export const NavbarLinkTag = styled(NavbarLink)`
	padding: 10px !important;
	text-decoration: none;
	color: #4b4b4b;
	@media (min-width: 667px) {
		padding: 0.5rem !important;
	}
	@media (min-width: 684px) {
		padding: 0.5rem !important;
	}
	@media (min-width: 734px) {
		padding: 0.5rem !important;
	}
	@media (min-width: 736px) {
		padding: 0.5rem !important;
	}
	@media (min-width: 768px) {
		padding: 0.5rem !important;
	}
	@media (min-width: 1024px) {
		padding: 1rem !important;
	}
`;
export const SubNavbarLinkTag = styled(NavbarLink)`
	padding: 10px !important;
	text-decoration: none;
	color: #4b4b4b;
	margin-left: 40px;
	@media (min-width: 667px) {
		padding: 0.5rem !important;
	}
	@media (min-width: 684px) {
		padding: 0.5rem !important;
	}
	@media (min-width: 734px) {
		padding: 0.5rem !important;
	}
	@media (min-width: 736px) {
		padding: 0.5rem !important;
	}
	@media (min-width: 768px) {
		padding: 0.5rem !important;
	}
	@media (min-width: 1024px) {
		padding: 1rem !important;
	}
`;
export const Head = styled.div`
	height: 95px;
`;
export const SubHead = styled.div`
	height: 55px;
	border-bottom: 1px solid #cacad3;
	border-top: 1px solid #cacad3;
`;
export const Headers = styled.div`
    transition: background 0.2s ease-in-out 0s,
    margin 0.6s ease-in-out 0s;
    top: 0;
    left: 0;
    right: 0;
    position: relative;
    z-index: 1000;
    margin: 0;
    padding: 0;
    height: auto;
    }
`;
export const LogoBlock = styled.div`
	margin-right: 80px;
	padding: 5px;
	@media (min-width: 300px) {
		margin-right: 0px;
	}
	@media (min-width: 400px) {
		margin-right: 10px;
	}
	@media (min-width: 667px) {
		margin-right: 20px;
	}
	@media (min-width: 684px) {
		margin-right: 40px;
	}
	@media (min-width: 734px) {
		margin-right: 20px;
	}
	@media (min-width: 736px) {
		margin-right: 20px;
	}
	@media (min-width: 768px) {
		margin-right: 0px;
	}
	@media (min-width: 1024px) {
		margin-right: 30px;
	}
	@media (min-width: 1030px) {
		margin-right: 80px;
	}
`;
export const SearchBlock = styled.div`
	padding: 10px;
	width: 600px;
	@media (min-width: 300px) {
		width: 155px;
	}
	@media (min-width: 400px) {
		width: 180px;
	}
	@media (min-width: 500px) {
		width: 325px;
	}
	@media (min-width: 667px) {
		width: 250px;
	}
	@media (min-width: 684px) {
		width: 200px;
	}
	@media (min-width: 734px) {
		width: 300px;
	}
	@media (min-width: 736px) {
		width: 300px;
	}
	@media (min-width: 768px) {
		width: 350px;
	}
	@media (min-width: 1024px) {
		width: 500px;
	}
	@media (min-width: 1030px) {
		width: 800px;
	}
`;
