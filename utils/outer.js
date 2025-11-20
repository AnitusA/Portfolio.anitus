import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Anitus A',
    decrypTexts: [
        'Software Engineer',
        'A methodical full-stack engineer',
        'I build thoughtful solutions that scale',
        'I never stop learning',
    ],
    description: `A methodical full-stack engineer with a passion for clean logic, reusable code, and real-world impact. I build thoughtful solutions that scale — and I never stop learning.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:anitus2006ajr@gmail.com?subject=Hello')
    }
}

export default outer
