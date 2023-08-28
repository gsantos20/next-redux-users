export interface User {
  id: number
  username: string
  email: string
  password: string
  firstName: string
  lastName: string
  createdAt: Date
  updatedAt: Date
}

export type CreateUser = Omit<User, 'id'>
export type ShowUser = Omit<User, 'password'>

