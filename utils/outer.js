import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Anitus,',
    decrypTexts: [
        'A Software Engineer',
        'A Full Stack Developer',
        'I build things for the web',
        'A Traveler',
    ],
    desciption: `A dedicated and disciplined Computer Science and Engineering student who loves to create things for the internet. Having more than 4 years of field experience, I've delivered projects to many happy clients across the globe.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:anitus2006ajr@gmail.com?subject=Hello')
    }
}

export default outer
