import noImage from './noimage.jpg';

const requestImage = require.context('../../assets', false, /.webp$/);

export const loadImage = imageName => {
  try {
    return requestImage(`./${imageName}.webp`).default;
  } catch (error) {
    console.log('error: ', error.message);
    return noImage;
  }
};
