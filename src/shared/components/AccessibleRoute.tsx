import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface AccessibleRouteProps {
  children: ReactNode;
  title: string;
}

export function AccessibleRoute({ children, title }: AccessibleRouteProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = `${title} | Medicamentos EPS`;
    const animationFrame = window.requestAnimationFrame(() => {
      const heading = document.querySelector<HTMLElement>("main h1");
      if (heading) {
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
      }
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [location.pathname, title]);

  return (
    <>
      <a className="skipLink" href="#main-content">
        Saltar al contenido principal
      </a>
      {children}
      <span className="srOnly" role="status" aria-live="polite">
        {title}
      </span>
    </>
  );
}
