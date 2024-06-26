import Work1 from "../../assets/person.jpeg";
import Research from "../../assets/research.jpg";
import Peru from "../../assets/alternativeperu.jpg";
import Learn from "../../assets/learnwell.jpg";
import Art from "../../assets/art.jpg";
import Raccoon from "../../assets/raccoon.jpg";
import Eatery from "../../assets/eatery.png";

import RaccoonBanner from "../../assets/banners/raccoonbanner.png";
import EateryBanner from "../../assets/banners/eaterybanner.png";
import ArtBanner from "../../assets/banners/artbanner.png";
import LearnwellBanner from "../../assets/banners/learnwellbanner.png";

import GDIACLogo from "../../assets/logos/gdiaclogo.png";
import GithubLogo from "../../assets/logos/githublogo.png";
import YoutubeLogo from "../../assets/logos/youtubelogo.png";
import DevpostLogo from "../../assets/logos/devpostlogo.png";
import GoogleplayLogo from "../../assets/logos/googleplaylogo.png";
import ItchioLogo from "../../assets/logos/itchiologo.png";
import LinkLogo from "../../assets/logos/linklogo.png";

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
                },
                {
                    link: "https://rocket-penguin.itch.io/le-petit-raccoon",
                    logo:ItchioLogo,
                    desc: "itch.io"
                }
            ],
            summary: "Le Petit Raccoon cooking and stealth multi-tasking game out on PC! \
                You can download on you Mac or Windows and help out Rocko, \
                a Raccoon master chef who needs to pilfer ingredients in order to \
                cook dishes for his customers.\n This game won both the Audience's Favorite Award \
                and the Most Innovative Award at the 2024 Cornell GDIAC Showcase\n \
                As a developer on the team, I spearheaded various major functionalities, including\
                enemy AI, obstacle creation, animation timing, and launching endless mode.\
                Additionally, I was also heavily involved in the creation as a game designer---I played a big role\
                shaping the early gameplay ideas and creating smooth level designs during the later stages of development.",
            role: "Developer",
            techstack: [
                "Java",
                "LibGDX",
                "MVC",
                "Git"
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
            banner: ArtBanner,
            title: "ART-AR Travel",
            backgroundColor: "#ADD8E6",
            linkBackground: "#48CAE4",
            links: [
                {
                    link: "https://devpost.com/software/harmony-r5bm9e",
                    logo: DevpostLogo
                },
                {
                    link: "https://github.com/KimberlyTruong/AR-T",
                    logo: GithubLogo,
                    desc: "Github"

                }
            ],
            summary: "ART is a AR web application created during TechTogether Seattle 2021. \
            It won The Wolfram Award Sponsored by Wolfram Language at the Hackathon.\
            \n As a developer on the hackathon team, I helped build the ART website using HTML5, \
            CSS, JavaScript, and Bootstrap. Additionally, I helped integrate AR components utilizing\
            the EchoAR API.",
            role: "Developer",
            techstack: [
                "HTML5",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "EchoAR",
                "Git"
                
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
            banner: EateryBanner,
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
            summary: "Eatery is an open-sourced app created by Cornell Engineering's project team---Cornell AppDev.\
             With over 10k monthly active users, Eatery displays information such as dining hall hours, menus, and locations, \
             effictively informing students when, where, and what to eat.\
             \n As an Android developer on Eatery, I collaborated with backend devs, designers and marketers to deliver the newest, most-in-demand\
             feature tailored to users' needs. I have created multiple screens and components including Eatery Details Hours Sheet, Eatery Details Menus Sheet, \
             and Compare Menus. In Spring 2024, I helped launch the Eatery-Blue Android version of Eatery that allowed numerous Android users at Cornell\
             acquire access to accurate, accessible dining hall information.",
            role: "Android Developer",
            techstack: [
                "Kotlin",
                "Jetpack Compose",
                "MVVM",
                "Figma",
                "Git"
                
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
            title: "Human Waste Recycling Research Project",
            backgroundColor: "#D8E4BC",
            linkBackground: "#9DC183",
            links: [
                {
                    link: "https://github.com/oliviaxjiang/Human-Waste-Recycling-Sem1/tree/main",
                    logo: GithubLogo,
                    desc: "Github"
                }
            ],
            summary: "This project aims to optimize the circulation of Kontiki kilns throughout the Nylenda B area in Kenya to enable efficient pyrolysis of human waste, providing the community with a cleaner, less polluting waste processing method.",
            role: "Undergraduate Researcher",
            techstack: [
                "Python",
                "NumPy",
                "CV2",
                "GurobiPy",
                "Google Maps",
                "Git"
                
            ],
        }
    },
    {
        id: 5,
        image: Learn,
        title: "LearnWell",
        category: "hackathon",
        link: "https://github.com/oliviaxjiang/LearnWell-Frontend-Android",
        detail: {
            banner: LearnwellBanner,
            title: "LearnWell @ Cornell",
            backgroundColor: "#D8E4BC",
            linkBackground: "#6aa68b",
            links: [
                {
                    link: "https://github.com/oliviaxjiang/LearnWell-Frontend-Android",
                    logo: GithubLogo,
                    desc: "Github"
                },
                {
                    link: "https://www.youtube.com/watch?v=vQfBR4FBKzs",
                    logo: YoutubeLogo,
                    desc: "Demo"
                }
            ],
            summary: "LearnWell is a tutoring app where users can sign up as either tutors or tutees and\
             submit posts containing their needs, skills, and availability. This app functions as a forum\
              for tutees to find a suitable tutor, and vice versa. It was created for the Cornell AppDev\
              FA23 Hack Challenge.",
            role: "Developer",
            techstack: [
                "Kotlin",
                "Android Native",
                "Figma",
                "Git"
                
            ],
        }
    },
    {
        id: 6,
        image: Peru,
        title: "Alternative Peru's Chinese Website",
        category: "creative",
        link: "https://www.alternativeperu.org/cn/index.html",
        detail: {
            title: "Alternative Peru's Chinese Website",
            backgroundColor: "#D8E4BC",
            linkBackground: "#6aa68b",
            links: [
                {
                    link: "https://www.alternativeperu.org/cn/index.html",
                    logo: LinkLogo,
                    desc: "Alternative Peru"
                }
            ],
            summary: "I was the project lead of a student group to create a Chinese website for the NGO, Alternative Peru.",
            role: "Project Lead",
            techstack: [
                "HTML5",
                "CSS",
                "JavaScript",
                "Bootstrap"
                
            ],
        }
    },
]

export default Menu;
