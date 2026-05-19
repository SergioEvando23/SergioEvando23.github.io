import {
    describe,
    expect,
    it,
    vi,
    beforeEach,
    afterEach,
} from "vitest";

import {
    fireEvent,
    render,
    screen,
    act
} from "@testing-library/react";


import { ImageCarousel } from "./index";
import {
    imageCarouselPropsMock,
} from "../../mocks/imageCarousel.mock";

const images = [
    {
        id: "1",
        src: "/image1.jpg",
        alt: "Imagem 1",
    },
    {
        id: "2",
        src: "/image2.jpg",
        alt: "Imagem 2",
    },
];


describe("ImageCarousel", () => {
    it("renders first image", () => {
        render(
            <ImageCarousel
                {...imageCarouselPropsMock}
            />
        );

        expect(
            screen.getByAltText(
                "Tela inicial do TeamTrack"
            )
        ).toBeInTheDocument();
    });
});

describe("ImageCarousel", () => {
    it("renders first image", () => {
        render(
            <ImageCarousel images={images} />
        );

        expect(
            screen.getByAltText("Imagem 1")
        ).toBeInTheDocument();
    });

    it("goes to next image", () => {
        render(
            <ImageCarousel images={images} />
        );

        fireEvent.click(
            screen.getByLabelText("next-image")
        );

        expect(
            screen.getByAltText("Imagem 2")
        ).toBeInTheDocument();
    });

    it("goes to previous image", () => {
        render(
            <ImageCarousel images={images} />
        );

        fireEvent.click(
            screen.getByLabelText("previous-image")
        );

        expect(
            screen.getByAltText("Imagem 2")
        ).toBeInTheDocument();
    });

    it("changes image by dot click", () => {
        render(
            <ImageCarousel images={images} />
        );

        fireEvent.click(
            screen.getByLabelText("go-to-1")
        );

        expect(
            screen.getByAltText("Imagem 2")
        ).toBeInTheDocument();
    });

    it("returns null when no images", () => {
        const { container } = render(
            <ImageCarousel images={[]} />
        );

        expect(
            container.firstChild
        ).toBeNull();
    });

    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("auto play changes image", () => {
        render(
            <ImageCarousel
                images={images}
                autoPlay
                interval={1000}
            />
        );


        act(() => {
            vi.advanceTimersByTime(1000);
        });

        expect(
            screen.getByAltText("Imagem 2")
        ).toBeInTheDocument();
    });
});