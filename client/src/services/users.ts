import axios from '~/libs/axios'
import { IUser } from '~/types/user'

async function update(id: string, fields: Partial<IUser>) {
  const { data } = await axios.patch<IUser>(`/v1/users/${id}`, fields)
  return data
}

const usersService = { update }

export default usersService
