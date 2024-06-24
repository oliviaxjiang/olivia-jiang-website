import Work1 from "../../assets/person.jpeg"
import Research from "../../assets/research.jpg"
import Peru from "../../assets/alternativeperu.jpg"
import Learn from "../../assets/learnwell.jpg"
import Art from "../../assets/art.jpg"
import Raccoon from "../../assets/raccoon.jpg"
import Eatery from "../../assets/eatery.png"
import RaccoonBanner from "../../assets/banners/raccoonbanner.png"
import GDIACLogo from "../../assets/logos/gdiaclogo.png"
import GithubLogo from "../../assets/logos/githublogo.png"
import YoutubeLogo from "../../assets/logos/youtubelogo.png"

const Menu = [
    {
        id:1,
        image: Raccoon,
        title: "Le Petit Raccoon",
        category: "creative",
        link: "https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/lepetiteraccoon/",
        detail: {
            banner: RaccoonBanner,
            backgroundcolor : "#F5F5DC",
            title: "Le Petit Raccoon",
            links:
                [
                    {
                    link:"https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/lepetiteraccoon/",
                    logo:GDIACLogo
                },
                {
                    link:"https://github.com/YizhenWu2004/RocketPenguin",
                    logo:GithubLogo,
                    desc: "Github"
                },
                {
                    link:"https://www.youtube.com/watch?v=dNcLGF4x1m4",
                    logo: YoutubeLogo,
                    desc: "Trailer"
                },
                {
                    link:"https://www.youtube.com/watch?v=nGgmKjr00z0",
                    logo: YoutubeLogo,
                    desc: "Parody Trailer"
                }
            ]

            ,
            summary: "Le Petit Raccoon cooking and stealth multi-tasking game out on PC!",
            techstack: "",
        }
    },
    {
        id:2,
        image: Art,
        title: "ART-AR Travel",
        category: "hackathon",
        link: "https://devpost.com/software/harmony-r5bm9e",
        detail: {
            summary: "Coming soon.."
        }
    },
    {
        id:3,
        image: Eatery,
        title: "Eatery",
        category: "creative",
        link: "https://play.google.com/store/apps/details?id=com.cornellappdev.android.eatery&hl=en_US",
        detail: {
            summary: "Coming soon.."
        }
    },
    {
        id:4,
        image: Research,
        title: "Human Waste Recycling",
        category: "creative",
        link: "https://github.com/oliviaxjiang/Human-Waste-Recycling-Sem1/tree/main",
        detail: {
            summary: "Coming soon.."
        }
    },
    {
        id:5,
        image: Learn,
        title: "LearnWell",
        category: "hackathon",
        link: "https://github.com/oliviaxjiang/LearnWell-Frontend-Android",
        detail: {
            summary: "Coming soon.."
        }
    },
    {
        id:6,
        image: Peru,
        title: "Alternative Peru's Chinese Website",
        category: "creative",
        link: "https://www.alternativeperu.org/cn/index.html",
        detail: {
            summary: "Coming soon.."
        }
    },
    
]

export default Menu