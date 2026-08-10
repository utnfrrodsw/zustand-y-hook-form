import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


// export const useCurrentUserStore = create((set, get) => ({
//   user: {
//     id: 1,
//     name: 'John Doe',
//     email: 'john.doe@example.com'
//   },

//   setUser: (user) => {
//     set({ user })
//   },

//   clearUser: () => {
//     set({ user: null })
//   },
// }));


export const useCurrentUserStore = create()(
  persist((set, get) => ({
      user: {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
  },

  setUser: (user) => {
    set({ user })
  },

  clearUser: () => {
    set({ user: null })
  },
  }))
)