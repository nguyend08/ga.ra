const currentYear = new Date().getFullYear();
const data = {
    sitename: "GA.RA",
    sitetagline: "Something Brew-tiful is Brewing in Berkeley!",
    siteurl: "https://github.com/nguyend08",
    sitelogo: "",
    title: "Coming Soon!",
    description: "Welcome to GA.RA, your soon-to-be favorite coffee spot in Berkeley! We’re bringing the vibrant flavors of Vietnam and a modern twist to coffee culture right here in your neighborhood. Whether you’re a student in need of a sweet pick-me-up or a coffee connoisseur seeking the perfect Phin or espresso, GA.RA is the place to be.",
    newsletterheading: "Sign up for exclusive updates, sneak peeks, and an invitation to our grand opening celebration.",
    copyrightText: `Copyright © ${currentYear} | Design and Developed By GA.RA`,
    socialIconsHeading: "Follow Us 📣",
    hideSubscribeForm: false, // make true to disable subscription form 
    socialIcons: [
        {
            icon: "Instagram",
            link: "https://www.instagram.com/cafegara/",
        },
        {
            icon: "Tiktok",
            link: "",
        },
        {
            icon: "Facebook",
            link: "",
        },
    ],
    hide :{
        subscribeForm: false, // make true to disable subscription form         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
