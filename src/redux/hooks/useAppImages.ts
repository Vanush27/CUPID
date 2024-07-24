import {useAppDispatch, useAppSelector} from '@hooks';
import {addImages, deleteImage, setIsOpen} from '@redux/slices/imageSlice';

export const useAppImages = () => {
  const dispatch = useAppDispatch();

  const {images, isOpen} = useAppSelector(state => state.images);

  const dispatchSetImage = (photo: any) => {
    dispatch(addImages(photo));
  };

  const dispatchDeleteImage = (photo: any) => {
    dispatch(deleteImage(photo));
  };

  const dispatchSetIsOpen = (open: boolean) => {
    dispatch(setIsOpen(open));
  };

  return {
    images,

    dispatchSetImage,
    dispatchDeleteImage,

    dispatchSetIsOpen,
    isOpen,
  };
};
