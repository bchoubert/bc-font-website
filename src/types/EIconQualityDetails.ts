import { EIconQuality } from 'bc-font/resources/icons';

const EIconQualityDetails = {
    [EIconQuality.BAD]: {
        label: 'Bad',
        color: '#DE3333',
        description:
            'This icon has major shape / integrity issues and does not fulfill quality checks. It will be repaired in the next releases.',
    },
    [EIconQuality.OK]: {
        label: 'Ok',
        color: '#DE8B33',
        description:
            'This icon is below standards but is still perfect for unscaled works. It contains small shape problems but is still ok for professional uses.',
    },
    [EIconQuality.GREAT]: {
        label: 'Great',
        color: '#33DD33',
        description: 'This icon meets quality standards and is perfect for all uses, including upscaled works',
    },
};

export default EIconQualityDetails;
