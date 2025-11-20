import { openLink } from "./methods"

const certifications = {
    heading:  `My Professional Certifications`,
    list: [
        {
            size: 1,
            title: 'Python Course for Beginners',
            platform: 'Scaler Topics',
            link: '',
            date: 'Issued Feb 2025 · No Expiration Date',
            logo: '/assets/python.png',
            aos: 'zoom-out-left'
        },
        {
            size: 2,
            title: 'Career Essentials in Software Development by Microsoft and LinkedIn',
            platform: 'LinkedIn Learning',
            link: '',
            date: 'Issued Apr 2025 · No Expiration Date',
            logo: '/assets/linkedin.png',
            aos: 'zoom-out-right'
        },
    ],
    handleIconClick: openLink
}

export default certifications