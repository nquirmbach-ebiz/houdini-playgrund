<script lang="ts">
	import AddTodo from './AddTodo.svelte';
	import TodoList from './TodoList.svelte';

	export let user: Types.User | undefined;

	$: userId = user?.id ?? '';
</script>

<div class="flex-1 overflow-auto">
	{#if user}
		<AddTodo {userId} />
		<hr />

		<TodoList value={user.todos?.data} />
	{/if}
</div>
