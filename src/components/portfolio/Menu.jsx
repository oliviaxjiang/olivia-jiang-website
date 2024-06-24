import Work1 from "../../assets/person.jpeg";
import Research from "../../assets/research.jpg";
import Peru from "../../assets/alternativeperu.jpg";
import Learn from "../../assets/learnwell.jpg";
import Art from "../../assets/art.jpg";
import Raccoon from "../../assets/raccoon.jpg";
import Eatery from "../../assets/eatery.png";
import RaccoonBanner from "../../assets/banners/raccoonbanner.png";
import GDIACLogo from "../../assets/logos/gdiaclogo.png";
import GithubLogo from "../../assets/logos/githublogo.png";
import YoutubeLogo from "../../assets/logos/youtubelogo.png";
import DevpostLogo from "../../assets/logos/devpostlogo.png";
import GoogleplayLogo from "../../assets/logos/googleplaylogo.png";

const Menu = [
    {
        id: 1,
        image: Raccoon,
        title: "Le Petit Raccoon",
        category: "creative",
        link: "https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/lepetiteraccoon/",
        detail: {
            banner: RaccoonBanner,
            backgroundColor: "#F5F5DC",
            linkBackground: "#C04000",
            title: "Le Petit Raccoon",
            links: [
                {
                    link: "https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/lepetiteraccoon/",
                    logo: GDIACLogo
                },
                {
                    link: "https://github.com/YizhenWu2004/RocketPenguin",
                    logo: GithubLogo,
                    desc: "Github"
                },
                {
                    link: "https://www.youtube.com/watch?v=dNcLGF4x1m4",
                    logo: YoutubeLogo,
                    desc: "Trailer"
                },
                {
                    link: "https://www.youtube.com/watch?v=nGgmKjr00z0",
                    logo: YoutubeLogo,
                    desc: "Parody Trailer"
                }
            ],
            summary: "Le Petit Raccoon cooking and stealth multi-tasking game out on PC!",
            role: "Developer",
            techstack: [
                "Java",
                "LibGDX",
                "MVC"
            ],
        }
    },
    {
        id: 2,
        image: Art,
        title: "ART-AR Travel",
        category: "hackathon",
        link: "https://devpost.com/software/harmony-r5bm9e",
        detail: {
            title: "ART-AR Travel",
            links: [
                {link: "https://devpost.com/software/harmony-r5bm9e",
                logo: DevpostLogo
                }
            ],
            summary: "ART is a AR web application created during TechTogether Seattle 2021. It won The Wolfram Award Sponsored by Wolfram Language at the Hackathon.",
            role: "Developer",
            techstack: [
                "HTML5",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "EchoAR"
                
            ],
        }
    },
    {
        id: 3,
        image: Eatery,
        title: "Eatery",
        category: "creative",
        link: "https://play.google.com/store/apps/details?id=com.cornellappdev.android.eatery&hl=en_US",
        detail: {
            title: "Eatery",
            backgroundColor: "#ADD8E6",
            linkBackground: "#4285f4",
            links: [
                {link: "https://play.google.com/store/apps/details?id=com.cornellappdev.android.eatery&hl=en_US",
                logo: GoogleplayLogo,
                desc: "Google Play"
                },
                {link: "https://github.com/cuappdev/eatery-blue-android",
                logo: GithubLogo,
                desc: "Android Github"
                }
            ],
            summary: "Eatery is an open-sourced app created by Cornell AppDev. It has over 10k monthly active users and tells students when, where, and what to eat.",
            role: "Android Developer",
            techstack: [
                "Kotlin",
                "Jetpack Compose",
                "MVVM",
                "Figma"
                
            ],
        }
    },
    {
        id: 4,
        image: Research,
        title: "Human Waste Recycling",
        category: "creative",
        link: "https://github.com/oliviaxjiang/Human-Waste-Recycling-Sem1/tree/main",
        detail: {
            summary: "Coming soon.."
        }
    },
    {
        id: 5,
        image: Learn,
        title: "LearnWell",
        category: "hackathon",
        link: "https://github.com/oliviaxjiang/LearnWell-Frontend-Android",
        detail: {
            summary: "Coming soon.."
        }
    },
    {
        id: 6,
        image: Peru,
        title: "Alternative Peru's Chinese Website",
        category: "creative",
        link: "https://www.alternativeperu.org/cn/index.html",
        detail: {
            summary: "Coming soon.."
        }
    },
]

export default Menu;
