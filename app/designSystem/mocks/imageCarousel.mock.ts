import type {
    CarouselImage,
    ImageCarouselProps,
} from "../dsComponents/imageCarouselComponent/index.types"; // Ensure this path is correct and the file exists

export const carouselImagesMock: CarouselImage[] = [
    {
        id: "1",
        src: "/images/projects/teamtrack-home.png",
        alt: "Tela inicial do TeamTrack",
    },
    {
        id: "2",
        src: "/images/projects/teamtrack-members.png",
        alt: "Página de membros do TeamTrack",
    },
    {
        id: "3",
        src: "/images/projects/teamtrack-dashboard.png",
        alt: "Dashboard do TeamTrack",
    },
];

export const imageCarouselPropsMock: ImageCarouselProps = {
    images: carouselImagesMock,
    autoPlay: true,
    interval: 3000,
};

export const carouselImages: CarouselImage[] = [
    {
        id: "frontend",
        src: "/image/FrontendCarousel.png",
        alt: "Frontend React e TypeScript",
    },
    {
        id: "mobile",
        src: "/image/MobileCarousel.png",
        alt: "Mobile Flutter e Dart",
    },
    {
        id: "backend",
        src: "/image/BackendCarousel.png",
        alt: "Backend Node.js",
    },
];