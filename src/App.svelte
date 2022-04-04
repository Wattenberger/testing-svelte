<script>
	export let name;
</script>

<main>
	<h1>Welcome {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
    <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: slate;
		font-size: 4em;
		font-weight: 900;
        letter-spacing: -0.03em;
        font-family: sans-serif;
      margin-bottom
	}
    img {
      width: 50%;
      margin-top: 3em;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>