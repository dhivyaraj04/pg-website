import { createGlobalStyle } from "styled-components";
import "../../style.scss";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
function MyApp({ Component, pageProps }) {
	return (
		<div>
			<GlobalStyle />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
