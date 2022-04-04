<script>
	export let name;
</script>

<main>
	<h1>Welcome {name} 123!</h1>
	<p>This is my website</p>
    <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
</main>


<style>
	main {
        background: #f4f4f4;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
        font-family: sans-serif;
        height: 91vh;
        border-top: 13px solid #45aeb1;
	}

	h1 {
		color: slate;
		font-size: 4em;
		font-weight: 900;
        letter-spacing: -0.03em;
        margin-bottom: 0;
	}
    img {
      width: 60%;
      margin-top: 1em;
      border: 10px solid #fff;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>