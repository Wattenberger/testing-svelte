<script>
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> 
</main>

<footer>
  © 2022
</footer>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
        min-height: 87vh;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
    footer {
      width: calc(100%-2em);
      text-align: center;
      font-family: sans-serif;
      background: #eaeaea;
      padding: 1em;
      margin: 1em;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>