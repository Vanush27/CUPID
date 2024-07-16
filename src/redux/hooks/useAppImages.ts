import {useAppDispatch, useAppSelector} from '@hooks';
import {addImages} from '@redux/slices/imageSlice';

export const useAppImages = () => {
  const dispatch = useAppDispatch();

  const {images} = useAppSelector(state => state.images);

  const dispatchSetImage = (photo: any) => {
    dispatch(addImages(photo));
  };

  return {
    images,

    dispatchSetImage,
  };
};
