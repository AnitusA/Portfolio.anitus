import { openLink } from "./methods"

const contact = {
    label: `Get in Touch`,
    heading: `Let's Connect`,
    description: `I'm currently available for freelance work and collaborations. Feel free to reach out through the form or connect via any of the links below.`,
    button: {
        label: 'Say Hello',
        onClick: () => openLink('mailto:anitus2006ajr@gmail.com?subject=Hello')
    },
    socialLinks: {
        linkedin: {
            label: 'LinkedIn',
            url: 'https://linkedin.com/in/aanitus',
            handle: 'in/aanitus'
        },
        github: {
            label: 'GitHub',
            url: 'https://github.com/AnitusA',
            handle: 'github.com/AnitusA'
        },
        instagram: {
            label: 'Instagram',
            url: 'https://instagram.com/a.anitus',
            handle: 'a.anitus'
        },
        email: {
            label: 'Email',
            url: 'mailto:anitus2006ajr@gmail.com',
            handle: 'anitus2006ajr@gmail.com'
        },
        mobile: {
            label: 'Mobile',
            url: 'tel:+919363994952',
            handle: '+91 9363994952'
        }
    },
    designAndBuiltBy: 'Designed & Built By Anitus A',
    handleBuiltByClick: () => openLink('https://github.com/AnitusA')

}

export default contact
