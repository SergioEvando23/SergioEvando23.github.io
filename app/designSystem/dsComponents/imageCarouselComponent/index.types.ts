export interface CarouselImage {
    id: string;
    src: string;
    alt: string;
}

export interface ImageCarouselProps {
    images: CarouselImage[];
    autoPlay?: boolean;
    interval?: number;
}