
import EIconType from './enums/EIconType';
import EIconCategory from './enums/EIconCategory';
import EIconQuality from './enums/EIconQuality';

export default interface IconType {
  icon: string;
  type: typeof EIconType;
  name: string;
  website?: string;
  new: boolean;
  color?: string;
  categories: (typeof EIconCategory)[];
  quality: typeof EIconQuality;
};
