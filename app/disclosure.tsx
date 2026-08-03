"use client";

import { useState, type ReactNode } from "react";

type DisclosureProps = {
  children: ReactNode;
  defaultOpen?: boolean;
  title: string;
  className?: string;
};

export function Disclosure({ children, className = "", defaultOpen = false, title }: DisclosureProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className={`disclosure ${open ? "is-open" : ""} ${className}`}>
      <button className="disclosure-trigger" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className="disclosure-icon" aria-hidden="true">+</span>
      </button>
      <div className="disclosure-panel">
        <div className="disclosure-body">{children}</div>
      </div>
    </section>
  );
}
