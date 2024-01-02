import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	:root {
		font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;

		color-scheme: light dark;
		color: rgba(255, 255, 255, 0.87);
		background-color: #242424;

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		 -webkit-text-size-adjust: 100%;
	}

	html,
	body {
		min-height: 100vh;
		padding: 0;
		margin: 0;
	}

	@media (prefers-color-scheme: light) {
		:root {
			color: #213547;
			background-color: #ffffff;
		}
		a:hover {
			color: #747bff;
		}
		button {
			background-color: #f9f9f9;
		}
	}
`;

export { GlobalStyles };
