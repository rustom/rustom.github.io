<script>
	import { onMount } from 'svelte';

	let paragraphElements = [];

	onMount(() => {
		paragraphElements.forEach((paragraph, index) => {
			// Initial setup
			paragraph.style.opacity = '0';
			paragraph.style.transform = 'translateY(50px)';

			// Animation delay calculation
			const delay = index * 150; // 250ms between each paragraph

			// Animate after a short initial delay
			setTimeout(() => {
				paragraph.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
				paragraph.style.opacity = '1';
				paragraph.style.transform = 'translateY(0)';
			}, delay);
		});
	});
</script>

<link
	href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap"
	rel="stylesheet"
/>

<main>
	<p bind:this={paragraphElements[0]}>Hi, I'm Rustom Ichhaporia!</p>

	<p bind:this={paragraphElements[1]}>Welcome to my home on the web.</p>

	<p bind:this={paragraphElements[2]}>
		Currently, I'm building
		<a href="https://www.kalshi.com" style="color:var(--kalshi-green)">Kalshi</a>, the first legal
		event contract marketplace in the US. Previously, I've spent time at
		<a href="https://imc.com">IMC Trading</a>,
		<a href="https://snowflake.com">Snowflake</a>,
		<a href="https://twitter.com">Twitter</a>, as well as a host of other companies and research
		labs.
	</p>

	<p bind:this={paragraphElements[3]}>
		You can find some of my projects on
		<a href="https://github.com/rustom">GitHub</a> and my research on
		<a href="https://scholar.google.com/citations?user=fhRRnW8AAAAJ">Google Scholar</a>.
	</p>

	<p bind:this={paragraphElements[4]}>
		You can also view my <a href="/Rustom_Ichhaporia_Resume.pdf">resume</a> and connect with me on
		<a href="https://www.linkedin.com/in/rustom-ichhaporia/">LinkedIn</a>.
	</p>

	<p bind:this={paragraphElements[5]}>
		I'm always open to new opportunities in software engineering and data science! I'd love for you
		to reach out to me at
		<a href="mailto:contact@rustom.dev?subject=Hi Rustom!">contact@rustom.dev</a>!
	</p>
</main>

<style>
	:root {
		--kalshi-green: #09d697;
		--orange: #f9d423;
		--dark-orange: #ff9900;
		--yellow: #f9d423;
		--white: #ffffff;
		--black: #000000;
		--dark-grey: #600000;
		--pale: #fff2d5;

		--background: #171e2a;
		/* var(--black); */
		--text: #ebe7dc;
		--accent: #f17901;
	}
	:global(body) {
		background-color: var(--background);
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		font-family: 'IBM Plex Sans', sans-serif;
		font-size: 18px;
		color: var(--text);
	}
	main {
		margin-top: 8vw;
		max-width: 700px;
		padding: 2rem;
	}
	p {
		line-height: 1.9rem;
		margin-bottom: 30px;
	}
	a {
		color: var(--accent);
		text-underline-offset: 0.4em;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	::selection {
		background-color: var(--accent);
		color: var(--background);
	}
</style>
