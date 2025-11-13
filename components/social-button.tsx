import React from "react"

interface SocialButtonProps {
  href: string
  label: string
  ariaLabel?: string
  title?: string
  className?: string
  style?: React.CSSProperties
  icon?: React.ReactNode
}

export default function SocialButton({
  href,
  label,
  ariaLabel,
  title,
  className = "",
  style,
  icon,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? label}
      title={title ?? label}
      className={`flex flex-col items-center justify-center gap-1.5 px-2 py-3 rounded-xl font-semibold text-white shadow-md hover:shadow-lg transition-shadow min-h-[70px] ${className}`}
      style={style}
    >
      {icon && <span className="w-6 h-6 flex-shrink-0 drop-shadow-sm">{icon}</span>}
      <span className="text-xs leading-none text-center drop-shadow-sm">{label}</span>
    </a>
  )
}
