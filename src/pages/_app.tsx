import { createGlobalStyle } from "styled-components";
import "../../style.css";
import "../../select-search.css";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
		box-sizing: border-box;
		overflow:auto
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
