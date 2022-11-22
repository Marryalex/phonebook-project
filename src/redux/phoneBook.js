import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phoneBookInitialState = 
[
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
]


const phoneBookSlice = createSlice({
    name: 'phoneBook',
    initialState: {
      items: phoneBookInitialState,
      filter: '',
    },
    reducers: {
      addContact(state, { payload }) {
        state.items.push(payload);
      },
  
      deleteContact(state, { payload }) {
        state.items = state.items.filter(item => item.id !== payload);
      },
  
      filterContacts(state, { payload }) {
        state.filter = payload;
      },
    },
  });


    // reducers: {
    //   addContact(state, { payload: { name, number } }) {
    //     if (state.items.some(el => el.name === name)) {
    //       alert(`${name} is already in contacts.`);
    //       return;
    //     }
  
    //     state.items.push({
    //       id: nanoid(),
    //       name,
    //       number,
    //     });
    //   },
  
    //   deleteContact(state, action) {
    //     state.items = state.items.filter(el => el.id !== action.payload.id);
    //   },
  
    //   filterContacts(state, action) {
    //     state.filter = action.payload;
    //   },
//     reducers: {
//       addContact: {
//         reducer: (store, { payload }) => {
//   store.push(payload);
//       },
//       prepare: (data) => {
//         return {
//             payload: {
//                 ...data,
//                 id: nanoid()
//             }
//         }
//       }
//     },
//       deleteContact: (store, {payload}) => store.filter(({id}) => id !== payload),
//       filterContacts: (_, {payload}) => payload
// }



export const { addContact, deleteContact, filterContacts } = phoneBookSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};
export const contactsReducer = persistReducer(
  persistConfig,
  phoneBookSlice.reducer
);