import { EIconType, ECategory, EIconQuality } from 'bc-font/resources/icons';

interface IconType {
    icon: string;
    type: typeof EIconType;
    name: string;
    website?: string;
    new: boolean;
    color?: string;
    categories: typeof ECategory[];
    quality: typeof EIconQuality;
}

export default IconType;
