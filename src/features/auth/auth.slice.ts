import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

interface Auth {}

const authAdapter = createEntityAdapter<Auth>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (book) => 1,
    // Keep the "all IDs" array sorted based on book titles
    sortComparer: (a, b) => 0,
})

export const authSlice = createSlice({
    name: 'auth',
    initialState: authAdapter.getInitialState(),
    reducers: {
        authAdded: authAdapter.addOne,
        authReceived(state, action) {},
    },
})

export const { authReceived, authAdded } = authSlice.actions
