import {useAppDispatch, useAppSelector} from '@hooks';
import {addImages, deleteImage} from '@redux/slices/imageSlice';

export const useAppImages = () => {
  const dispatch = useAppDispatch();

  const {images} = useAppSelector(state => state.images);

  const dispatchSetImage = (photo: any) => {
    dispatch(addImages(photo));
  };

  const dispatchDeleteImage = (photo: any) => {
    dispatch(deleteImage(photo));
  };

  return {
    images,

    dispatchSetImage,
    dispatchDeleteImage,
  };
};
