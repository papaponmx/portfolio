// date: 15 Aug, 2024
const bioData = [
    {
        name: 'Jaime Rios',
        username: 'jaime.rios@hey.com',
        url: '/', // Changed to home page
        titleImg: false,
        avatar: '/avatar.png',
        nftAvatar: false,
        description: 'Full Stack Developer with extensive experience in Front End technologies.',
        descShow: true,
        subdesc: 'Senior Full Stack Developer / Software Designer / Career Lead at Globant',
        subdescShow: true,
        newProductUrl: '/projects', // Changed to local projects page
        newProduct: true, // Enabled to showcase your projects
        author: 'Jaime Rios',
        authorURL: 'https://github.com/papaponmx',
        footerText: 'Connect with me',
        navigation: [
            {
                title: 'Experience',
                url: '/experience',
                icon: '/work.svg'
            },
            {
                title: 'Skills',
                url: '/skills',
                icon: '/skill.svg'
            },
            {
                title: 'Projects',
                url: '/projects',
                icon: '/project.svg'
            },
            {
                title: 'Contact',
                url: '/contact',
                icon: '/email.svg'
            }
        ],
        socialLinks: [
            {
                title: 'GitHub',
                url: 'https://github.com/papaponmx',
                icon: '/github.svg'
            },
            {
                title: 'LinkedIn',
                url: 'https://www.linkedin.com/in/realvjy/',
                icon: '/linkedin.svg'
            }
        ]
    },
];

export default bioData;