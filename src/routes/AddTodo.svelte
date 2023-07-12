<script lang="ts">
	import { AddTodoStore } from '$houdini';

	export let userId: string;

	let title = '';

	const addMutation = new AddTodoStore();

	async function add() {
		console.log(title, userId);
		await addMutation.mutate({
			userId,
			input: {
				completed: false,
				title
			}
		});

		title = '';
	}
</script>

<form on:submit|preventDefault={add}>
	<input
		bind:value={title}
		type="text"
		placeholder="Add a new todo..."
		disabled={$addMutation.fetching}
	/>
</form>
