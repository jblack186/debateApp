import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { ApiState, LoadingStatus } from '@features/global.types'

interface User {
    id: string
    fullName: string
    username: string
    email: string
    loading: LoadingStatus
    apiState: ApiState
}

const authAdapter = createEntityAdapter<User>({
    // Assume IDs are stored in a field other than `book.id`
})

export const authSlice = createSlice({
    name: 'auth',
    initialState: authAdapter.getInitialState(),
    reducers: {
        authAdded: authAdapter.addOne,
    },
})
