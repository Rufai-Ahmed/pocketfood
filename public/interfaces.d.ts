import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export interface iNav {
  name?: string;
  link?: string;
}

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface iContainer extends PropsWithChildren {
  className?: string;
}

export interface iCarousel {
  img?: string;
  em?: string;
  b?: string;
  list?: string[];
}
