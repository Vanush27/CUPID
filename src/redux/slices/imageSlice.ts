import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type IInitialState = {
  isOpen: boolean;
  images: string[] | [];
};

export const initialState: IInitialState = {
  images: [],
  isOpen: false,
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

    setIsOpen: (state, {payload}: PayloadAction<boolean>) => {
      state.isOpen = payload;
    },
  },
});

export const {addImages, deleteImage, setIsOpen} = imagesSlice.actions;

export default imagesSlice.reducer;
