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
    // setImages: (state, action: PayloadAction) => {
    //   state.images = action.payload;
    // },

    addImages: (state, {payload}: PayloadAction) => {
      state.images.push(payload as never);
    },

    // addImageUri: (state, action) => {
    //   state.imageUr.push(action.payload);
    //   if (state.imageUris.length > 5) {
    //     state.imageUris.shift(); // Keep only the last 5 images
    //   }
    // },

    // deleteCountry: (state, {payload}) => {

    //   const updatedCountryListWeather = state.countryListWeather.filter(
    //     obj => obj?.city?.name !== payload,
    //   );
    //   state.countryListWeather = updatedCountryListWeather;
    // },
  },
});

export const {addImages} = imagesSlice.actions;

export default imagesSlice.reducer;
