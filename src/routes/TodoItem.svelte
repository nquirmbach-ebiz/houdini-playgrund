<script lang="ts">
	import { UpdateTodoStore } from '$houdini';

	export let item: Types.Todo;

	const updateMutation = new UpdateTodoStore();

	async function update() {
		await updateMutation.mutate({
			id: item.id!,
			input: {
				completed: item.completed,
				title: item.title
			}
		});
	}
</script>

<div class="todo-item">
	<input type="checkbox" bind:checked={item.completed} on:change={update} />
	<input type="text" bind:value={item.title} on:change={update} />

	{#if $updateMutation.fetching}
		<span>Updating...</span>
	{/if}
</div>

<style lang="scss">
	.todo-item {
		@apply flex items-center gap-2;

		input[type='text'] {
			@apply w-full flex-1;
		}
	}
</style>
