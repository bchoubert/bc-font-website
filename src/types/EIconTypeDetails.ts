import { faFont, faIcons, faStar } from '@fortawesome/free-solid-svg-icons';
import { EIconType } from 'bc-font/resources/icons';

const EIconTypeDetails = {
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

export default EIconTypeDetails;
