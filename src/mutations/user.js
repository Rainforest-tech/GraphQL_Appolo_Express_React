import {gql} from '@apollo/client'

export const CREATE_USER = gql`
	mutation createUser($input: UserInput) {
		createUser(input:$inout) {
			id, username, age
		}
	} 
`
