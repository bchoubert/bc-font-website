import { faFont, faIcons, faStar } from '@fortawesome/free-solid-svg-icons';
import { ECategory, EIconQuality, EIconType } from 'bc-font/resources/icons';

export const EIconTypeDetails = {
    [EIconType.TYPE]: {
        label: 'Type',
        icon: faFont,
    },
    [EIconType.LOGO]: {
        label: 'Logo',
        icon: faStar,
    },
    [EIconType.FULL]: {
        label: 'Full',
        icon: faIcons,
    },
};

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
