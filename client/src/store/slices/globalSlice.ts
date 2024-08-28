import {createSlice, PayloadAction} from '@reduxjs/toolkit'

// Define a type for the slice state
interface GlobalState {
    type : string
}

// Define the initial state using that type
const initialState: GlobalState = {
    type:"cards"
}

interface changeTypeInterface {
    type:string
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        changeType: (state: any,action:PayloadAction<changeTypeInterface>) => {
            const {type} = action.payload;
            state.type = type;
        }
    }
})

export const {changeType} = globalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const globalReducer = globalSlice.reducer
