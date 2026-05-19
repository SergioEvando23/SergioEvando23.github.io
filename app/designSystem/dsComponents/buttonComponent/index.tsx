"use client";

import {
  forwardRef,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import "./index.css";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger";

type ButtonSize =
  | "sm"
  | "md"
  | "lg";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      className = "",
      ...props
    },
    ref
  ) => {
    const classes = [
      "button",
      `button--${variant}`,
      `button--${size}`,
      fullWidth && "button--full",
      loading && "button--loading",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={classes}
        {...props}
      >
        <span className="button__overlay" />

        {!loading && leftIcon && (
          <span className="button__icon">
            {leftIcon}
          </span>
        )}

        {loading && (
          <span className="button__loader" />
        )}

        <span className="button__label">
          {children}
        </span>

        {!loading && rightIcon && (
          <span className="button__icon">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";