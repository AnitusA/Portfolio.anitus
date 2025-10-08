import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/AnitusA',
        'instagram': 'https://www.instagram.com/a.anitus/',
        'twitter': 'https://twitter.com/Anitus_2006',
        'linkedin': 'https://www.linkedin.com/in/aanitus/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'anitus2006ajr@gmail.com',
        onClick: () => openLink('mailto:anitus2006ajr@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements