// src/components/LogoIcon.tsx
import React from 'react';

interface LogoIconProps {
  className?: string;
  ariaLabel?: string;
}

export default function LogoIcon({
  className,
  ariaLabel = 'Ícone da Vieira de Andrade Advocacia',
}: LogoIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 268" // ViewBox ajustado para o ícone
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={ariaLabel}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>{ariaLabel}</title>
      <g fill="currentColor" stroke="currentColor" strokeWidth={1}>
        <rect x="10" y="0" width="180" height="16" />
        <rect x="30" y="28" width="20" height="200" rx="1" />
        <rect x="70" y="28" width="20" height="200" rx="1" />
        <rect x="110" y="28" width="20" height="200" rx="1" />
        <rect x="150" y="28" width="20" height="200" rx="1" />
        <rect x="5" y="236" width="190" height="12" />
        <rect x="0" y="256" width="200" height="12" />
      </g>
    </svg>
  );
}