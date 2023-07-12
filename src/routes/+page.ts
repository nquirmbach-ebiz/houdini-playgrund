import { graphql } from '$houdini';

export const _houdini_load = graphql(`
	query UserTodos {
		users {
			data {
				id
				name
				todos {
					data @list(name: "User_Todos") {
						id
						title
						completed
					}
				}
			}
		}
	}
`);
