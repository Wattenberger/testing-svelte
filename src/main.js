import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Friends 123'
	}
});

export default app;