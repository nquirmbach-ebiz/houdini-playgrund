<script lang="ts">
	import type { PageData } from './$houdini';
	import Todos from './Todos.svelte';
	import UserList from './UserList.svelte';

	export let data: PageData;

	let selected: Types.User | undefined;

	$: ({ UserTodos: store } = data);

	$: users = $store.data?.users?.data;
</script>

<div class="flex h-full gap-2 overflow-hidden">
	<UserList {users} bind:selected class="mt-8" />

	<Todos user={selected} />
</div>
