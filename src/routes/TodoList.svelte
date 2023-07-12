<script lang="ts">
	import { removeEmpty } from '$lib/utils/array';
	import TodoItem from './TodoItem.svelte';

	export let value: Array<Types.Todo | null> | undefined | null;

	$: items = removeEmpty(value);
</script>

<ul>
	{#each items as item}
		<li>
			<TodoItem {item} />
		</li>
	{/each}
</ul>
