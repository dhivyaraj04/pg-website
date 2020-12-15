import styled from "styled-components";

export const SearchBoxTag = styled.div`
	position: relative;
	display: flex;
	width: 100%;
`;
export const SearchIcon = styled.div`
	position: absolute;
	top: 16px;
	left: 8px;
	width: 14px;
`;
export const InputSearch = styled.input`
	border: 0.4px solid #e8eef3;
	border-radius: 4px;
	height: 40px;
	width: 100%;
	padding: 2px 23px 2px 30px;
	outline: 0;
	background-color: transparent;
	font-family: Cerebri, sans-serif;
	&:hover {
		border: 1px solid #e5e5e5;
		background-color: white;
	}
`;
export const ClearIcon = styled.img`
	position: absolute;
	top: 15px;
	right: 8px;
	width: 12px;
	cursor: pointer;
	visibility: hidden;
`;
