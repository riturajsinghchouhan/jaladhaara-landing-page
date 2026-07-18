export default function Button({
  children,
  variant = 'primary',
  className = '',
  as = 'a',
  href = '#',
  type = 'button',
  onClick,
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold'

  const variants = {
    primary:
      'bg-gold text-forest hover:bg-gold-hover px-5 py-2.5 text-sm shadow-sm',
    secondary:
      'border border-white/40 bg-transparent text-white hover:bg-white/10 px-5 py-2.5 text-sm',
    ghost:
      'border border-white/50 bg-transparent text-white hover:bg-white/10 px-5 py-2.5 text-sm',
    dark:
      'bg-forest-soft text-white hover:bg-forest px-5 py-2.5 text-sm',
  }

  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`

  if (as === 'button') {
    return (
      <button type={type} className={classes} onClick={onClick}>
        {children}
      </button>
    )
  }

  return (
    <a href={href} className={classes} onClick={onClick}>
      {children}
    </a>
  )
}
