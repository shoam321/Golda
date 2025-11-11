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
      className={`inline-flex items-center justify-center gap-1 px-2 py-2 rounded-full font-bold text-white shadow-md hover:shadow-lg transition-shadow ${className}`}
      style={style}
    >
      {icon && <span className="w-4 h-4 flex-shrink-0">{icon}</span>}
      <span className="text-[70%] leading-tight text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[60px]">{label}</span>
    </a>
  )
}
