import { withInstall } from '../utils';
import _BackgroundImage from './BackgroundImage';

export const BackgroundImage = withInstall(_BackgroundImage);
export default BackgroundImage;
export type { BackgroundImageProps } from './BackgroundImage';

declare module 'vue' {
  export interface GlobalComponents {
    VanBackgroundImage: typeof BackgroundImage;
  }
}
