"use client";

import { useEffect, useState } from "react";

import "./index.css";

import type {
    ImageCarouselProps,
} from "./index.types";

export function ImageCarousel({
    images,
    autoPlay = false,
    interval = 3000,
}: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((current) =>
            current === images.length - 1
                ? 0
                : current + 1
        );
    };

    const previous = () => {
        setCurrentIndex((current) =>
            current === 0
                ? images.length - 1
                : current - 1
        );
    };

    useEffect(() => {
        if (!autoPlay) {
            return;
        }

        const timer = setInterval(next, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval]);

    if (images.length === 0) {
        return null;
    }

    const image = images[currentIndex];

    return (
        <div className="carousel">
            <img
                src={image.src}
                alt={image.alt}
                className="carousel__image"
            />

            <div className="carousel__controls">
                <button
                    type="button"
                    aria-label="previous-image"
                    className="carousel__button"
                    onClick={previous}
                >
                    ←
                </button>

                <button
                    type="button"
                    aria-label="next-image"
                    className="carousel__button"
                    onClick={next}
                >
                    →
                </button>
            </div>

            <div className="carousel__dots">
                {images.map((item, index) => (
                    <button
                        key={item.id}
                        type="button"
                        aria-label={`go-to-${index}`}
                        className={
                            index === currentIndex
                                ? "carousel__dot carousel__dot--active"
                                : "carousel__dot"
                        }
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}