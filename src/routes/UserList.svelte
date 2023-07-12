<script lang="ts">
	import { removeEmpty } from '$lib/utils/array';

	export let users: Types.User[] | null | undefined;
	export let selected: Types.User | undefined;

	function toggle(item: Types.User) {
		selected = item === selected ? undefined : item;
	}

	$: items = removeEmpty(users);
</script>

<ul class={$$props.class ?? ''}>
	{#each items as item}
		<li class:active={item.id === selected?.id}>
			<button on:click={() => toggle(item)}>
				{item?.name}
			</button>
		</li>
	{/each}
</ul>
