import type { CSSProperties, ReactNode } from 'react'

export type IconName =
  | 'arrow'
  | 'arrow-up'
  | 'check'
  | 'shield'
  | 'home'
  | 'file'
  | 'chat'
  | 'pin'
  | 'lock'
  | 'plus'
  | 'minus'
  | 'menu'
  | 'close'
  | 'leaf'
  | 'mail'
  | 'phone'
  | 'clock'
  | 'info'
const paths: Record<IconName, ReactNode> = {
  arrow: (
    <>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </>
  ),
  'arrow-up': (
    <>
      <path d="M6 18 18 6M6 6h12v12" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  shield: (
    <>
      <path d="M12 3 4 6v6c0 4 5 7.5 8 9 3-1.5 8-5 8-9V6l-8-3Z" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  home: (
    <>
      <path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-8h6v8" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H5v18h14V8l-5-5ZM14 3v6h5M8 13h8M8 17h6" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l1.5-4A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8 10h8M8 14h5" />
    </>
  ),
  pin: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
    </>
  ),
  plus: <path d="M5 12h14M12 5v14" />,
  minus: <path d="M5 12h14" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  leaf: (
    <>
      <path d="M20 3c-9-1-16 3-16 9a6 6 0 0 0 6 6c6 0 9-7 10-15Z" />
      <path d="M3 21 15 9M8 16v-5M8 16h5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  phone: <path d="m6 3 4 4-3 3c2 4 3 5 7 7l3-3 4 4-2 3C10 23 1 14 3 5l3-2Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6M12 7h.01" />
    </>
  ),
}
export function Icon({
  name,
  size = 22,
  className = '',
  style,
}: {
  name: IconName
  size?: number
  className?: string
  style?: CSSProperties
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {paths[name]}
    </svg>
  )
}
