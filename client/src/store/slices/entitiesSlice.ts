import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IEntity} from "@/interfaces/IEntity";

// Define a type for the slice state
interface EntitiesState {
    entities : TranslateItem[]
}

// Define the initial state using that type
const initialState: EntitiesState = {
    entities:[]
}

interface createCardInterface {
    text:string
}

export const entitiesSlice = createSlice({
    name: 'entities',
    initialState,
    reducers: {
        createCard: (state: any,action:PayloadAction<any>) => {
            // const {text} = action.payload;
            state.entities.push(IEntity)
        }
    }
})

export const {createCard} = entitiesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const entitiesReducer = entitiesSlice.reducer
