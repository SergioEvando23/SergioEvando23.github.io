import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { createRef } from "react";

import { Button } from "./index";

describe("Button", () => {
    it("renders children", () => {
        render(<Button>Ver Projetos</Button>);

        expect(
            screen.getByRole("button", {
                name: /ver projetos/i,
            })
        ).toBeInTheDocument();
    });

    it("applies primary variant by default", () => {
        render(<Button>Teste</Button>);

        expect(screen.getByRole("button"))
            .toHaveClass("button--primary");
    });

    it.each([
        "primary",
        "secondary",
        "ghost",
        "danger",
    ] as const)(
        "renders variant %s",
        (variant) => {
            render(
                <Button variant={variant}>
                    Teste
                </Button>
            );

            expect(screen.getByRole("button"))
                .toHaveClass(`button--${variant}`);
        }
    );

    it.each([
        "sm",
        "md",
        "lg",
    ] as const)(
        "renders size %s",
        (size) => {
            render(
                <Button size={size}>
                    Teste
                </Button>
            );

            expect(screen.getByRole("button"))
                .toHaveClass(`button--${size}`);
        }
    );

    it("renders full width", () => {
        render(
            <Button fullWidth>
                Teste
            </Button>
        );

        expect(screen.getByRole("button"))
            .toHaveClass("button--full");
    });

    it("renders left icon", () => {
        render(
            <Button
                leftIcon={
                    <span data-testid="left-icon">
                        left
                    </span>
                }
            >
                Teste
            </Button>
        );

        expect(
            screen.getByTestId("left-icon")
        ).toBeInTheDocument();
    });

    it("renders right icon", () => {
        render(
            <Button
                rightIcon={
                    <span data-testid="right-icon">
                        right
                    </span>
                }
            >
                Teste
            </Button>
        );

        expect(
            screen.getByTestId("right-icon")
        ).toBeInTheDocument();
    });

    it("renders loader when loading", () => {
        render(
            <Button loading>
                Teste
            </Button>
        );

        expect(
            document.querySelector(
                ".button__loader"
            )
        ).toBeInTheDocument();
    });

    it("does not render icons while loading", () => {
        render(
            <Button
                loading
                leftIcon={
                    <span data-testid="left-icon">
                        left
                    </span>
                }
                rightIcon={
                    <span data-testid="right-icon">
                        right
                    </span>
                }
            >
                Teste
            </Button>
        );

        expect(
            screen.queryByTestId("left-icon")
        ).not.toBeInTheDocument();

        expect(
            screen.queryByTestId("right-icon")
        ).not.toBeInTheDocument();
    });

    it("is disabled when disabled prop is true", () => {
        render(
            <Button disabled>
                Teste
            </Button>
        );

        expect(screen.getByRole("button"))
            .toBeDisabled();
    });

    it("is disabled when loading", () => {
        render(
            <Button loading>
                Teste
            </Button>
        );

        expect(screen.getByRole("button"))
            .toBeDisabled();
    });

    it("fires click event", () => {
        const handleClick = vi.fn();

        render(
            <Button onClick={handleClick}>
                Teste
            </Button>
        );

        fireEvent.click(
            screen.getByRole("button")
        );

        expect(handleClick)
            .toHaveBeenCalledTimes(1);
    });

    it("applies custom className", () => {
        render(
            <Button className="custom-class">
                Teste
            </Button>
        );

        expect(screen.getByRole("button"))
            .toHaveClass("custom-class");
    });

    it("forwards ref correctly", () => {
        const ref = createRef<HTMLButtonElement>()
        render(
            <Button ref={ref}>
                Teste
            </Button>
        );

        expect(ref.current)
            .toBeInstanceOf(
                HTMLButtonElement
            );
    });
});