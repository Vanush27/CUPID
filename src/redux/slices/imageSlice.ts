import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type IInitialState = {
  images: string[] | [];
};

export const initialState: IInitialState = {
  images: [],
};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImages: (state, {payload}: PayloadAction) => {
      state.images.push(payload as never);
    },

    deleteImage: (state, {payload}: PayloadAction<number>) => {
      state.images.splice(payload, 1);
    },
  },
});

export const {addImages, deleteImage} = imagesSlice.actions;

export default imagesSlice.reducer;
