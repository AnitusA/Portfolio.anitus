import { openLink, scrollTo } from "./methods";


const header = {
    menus: [
        { title: 'Home', id: 'home' },
        { title: 'About Me', id: 'my-self' },
        { title: 'My Journey', id: 'experience' },
        { title: 'My Work', id: 'my-work' },
        { title: 'Reviews', id: 'reviews' },
        { title: 'Certifications', id: 'certifications' },
        { title: 'Contribution', id: 'contributions' },
        { title: 'Contact', id: 'contact' },
    ],
    rightBtn: {
        label: 'Curriculum Vitae | CV',
        onClick: () => openLink('https://drive.google.com/file/d/1G42PghAF-i9Y8hq5LdpG_0DEbMC79-Dv/view?usp=sharing')
    },
    logo: {
        src: '/assets/profile2.png',
        alt: 'muneebwasikhan'
    },
    handleIconClick: () => scrollTo('home'),
    handleItemSelect: (menu) => scrollTo(menu.id),
}

export default header