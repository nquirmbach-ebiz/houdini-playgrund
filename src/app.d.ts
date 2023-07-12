import type { UserTodos$result } from '$houdini';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	namespace Types {
		type Users = NonNullable<UserTodos$result['users']>['data'];
		type User = NonNullable<Users>[number];

		type Todo = {
			readonly id: string | null;
			readonly title: string | null;
			readonly completed: boolean | null;
		};
	}
}

export {};
