import {createSlice, PayloadAction} from '@reduxjs/toolkit'

// Define a type for the slice state
interface CardsState {
    cards : TranslateItem[]
}

// Define the initial state using that type
const initialState: CardsState = {
    cards:[]
}

interface createCardInterface {
    text:string
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        createCard: (state: any,action:PayloadAction<createCardInterface>) => {
            const {text} = action.payload;
            // state.countSections = countSections;
        }
    }
})

export const {createCard} = cardsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const cardsReducer = cardsSlice.reducer
