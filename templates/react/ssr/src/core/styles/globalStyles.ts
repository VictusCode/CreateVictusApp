import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	:root {
		font-family: Nato Sans, Inter, Avenir, Helvetica, Arial, sans-serif;
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;

		color-scheme: light;
		color: var(--secondary-color);
		background-color: var(--bg-color);

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	#root {
		height: 100vh;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	textarea,
	select,
	input,
	button {
		background: none;
		border: none;
		outline: none;
		margin: 0;
		font: inherit;
	}

	:root {
		// font
		--font-family-primary: 'Nato Sans', sans-serif;

		// xs font
		--font-size-xs: 0.6rem;
		--font-line-height-xs: 0.8rem;
		--font-xs: var(--font-size-xs) / var(--font-line-height-xs) var(--font-family-primary);

		// s font
		--font-size-s: 0.8rem;
		--font-line-height-s: 1rem;
		--font-s: var(--font-size-s) / var(--font-line-height-s) var(--font-family-primary);

		// m font
		--font-size-m: 1rem;
		--font-line-height-m: 1.2rem;
		--font-m: var(--font-size-m) / var(--font-line-height-m) var(--font-family-primary);

		// l font
		--font-size-l: 1.2rem;
		--font-line-height-l: 1.4rem;
		--font-l: var(--font-size-l) / var(--font-line-height-l) var(--font-family-primary);

		// xl font
		--font-size-xl: 1.8rem;
		--font-line-height-xl: 2rem;
		--font-xl: var(--font-size-xl) / var(--font-line-height-xl) var(--font-family-primary);

		// xxl font
		--font-size-xxl: 2.4rem;
		--font-line-height-xxl: 2.6rem;
		--font-xxl: var(--font-size-xxl) / var(--font-line-height-xxl) var(--font-family-primary);

		// xxxl font
		--font-size-xxxl: 5rem;
		--font-line-height-xxxl: 5.2rem;
		--font-xxxl: var(--font-size-xxxl) / var(--font-line-height-xxxl) var(--font-family-primary);

		// spacing
		--spacing-xxs: 0.1rem;
		--spacing-xs: 0.4rem;
		--spacing-s: 0.8rem;
		--spacing-m: 1.2rem;
		--spacing-l: 1.6rem;
		--spacing-xl: 2.5rem;
		--spacing-xxl: 3.2rem;

		// border radius
		--border-radius-xs: 0.2rem;
		--border-radius-s: 0.4rem;
		--border-radius-m: 0.8rem;
		--border-radius-l: 1.2rem;
		--border-radius-xl: 2rem;

		// timing
		--timing-s: 0.1s;
		--timing-m: 0.25s;
		--timing-l: 0.6s;

		@media (prefers-color-scheme: light) {
			// layout
			--bg-color: #ffffff;
			--paper-bg-color: #ffffff;
			--paper-bg-secondary-color: #fafafa;
			--paper-border: #e4e4e7;

			// colors
			--primary-color: #843cd4;
			--secondary-color: #111111;
			--tertiary-color: #292929;
			--accent-color: #e7a103;

			// input background colors
			--input-bg-color: #cacaca7a;
			--input-bg-hover-color: #ffffffa1;

			// input border colors
			--input-border-color: #e4e4e7;
			--input-border-focus-color: #d3d3d3;
			--input-border-hover-color: #e4e4e7;
		}

		@media (prefers-color-scheme: dark) {
			  // layout
			--bg-color: #121212;
			--paper-bg-color: #1e1e1e;
			--paper-bg-secondary-color: #272727;
			--paper-border: #303030;

			// colors
			--primary-color: #843cd4;
			--secondary-color: #e7e7e7;
			--tertiary-color: #969696;
			--accent-color: #e7a103;

			// input background colors
			--input-bg-color: #4242427c;
			--input-bg-hover-color: #5353537a;

			// input border colors
			--input-border-color: #424242;
			--input-border-focus-color: #969696;
			--input-border-hover-color: #424242;
		}
	}
`;

export { GlobalStyles };
