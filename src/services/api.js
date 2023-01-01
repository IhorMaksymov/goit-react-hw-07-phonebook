import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://63a715187989ad3286e92e4d.mockapi.io';

const fetchContacts = createAsyncThunk('contacts/getAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const addContact = createAsyncThunk('contacts/addContact', async (item, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', { name: item.name, phone: item.number });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export { fetchContacts, addContact, deleteContact };