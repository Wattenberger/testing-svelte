<script>
	export let name;
</script>

<main>
	<h1>Hello {name}!! this is new content</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
        font-family: sans-serif;
	}

	h1 {
		color: powderblue;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 900;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>