import { ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren } from "react";

export interface iNav {
  name?: string;
  link?: string;
}

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface iContainer
  extends PropsWithChildren,
    HTMLAttributes<HTMLElement> {
  className?: string;
}

export interface iCarousel {
  img?: string;
  em?: string;
  b?: string;
  list?: string[];
}

export interface iInfo {
  id?: number;
  img?: string;
  p?: string;
  b?: string;
  button?: string;
}

export interface iTestimonial {
  p?: string;
  img?: string;
  b?: string;
  bp?: string;
}

export interface iFAQ {
  q?: string;
  ans?: string;
}
