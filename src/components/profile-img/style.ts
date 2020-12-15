import styled from "styled-components";

export type ProfileImgProps = {
	width?: string;
	height?: string;
	borderRadius?: string;
};
export const ImageTag = styled.img<ProfileImgProps>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	border-radius: ${({ borderRadius }) => borderRadius};
`;
