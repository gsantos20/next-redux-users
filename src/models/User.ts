export interface User {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  createdAt: Date
  updatedAt: Date
}

export type CreateUser = Omit<User, 'id'>

