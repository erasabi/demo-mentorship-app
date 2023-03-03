import axios from 'axios'

export async function getUserProfiles() {
	return await axios.get('/api/users')
}

export async function editUser(body) {
	return await axios.post('/api/users/update', body)
}
