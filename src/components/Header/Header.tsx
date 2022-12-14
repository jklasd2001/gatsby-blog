import { useEffect, useState } from 'react'

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { Link } from 'gatsby'

import { useTheme } from 'src/context'

import { Container } from '../Container'
import { IconAdornment } from '../IconAdornment'
import { Logo } from './components'

export const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="border-b border-b-slate-300 py-3 dark:border-b-slate-300/10 lg:py-4">
      <Container
        type="header"
        className="flex px-4 text-gray-800 dark:text-slate-100 md:px-0 lg:px-0"
      >
        <Link to="/" className="flex">
          <Logo className="w-[96px] text-gray-800 dark:text-slate-200 lg:w-[120px]" />
        </Link>

        <nav className="ml-auto">
          <ul className="flex items-center gap-4 lg:gap-6">
            <Link to="/about-me" className="text-xs uppercase lg:text-base">
              About me
            </Link>

            <Link to="/" className="text-xs uppercase lg:text-base">
              Blog
            </Link>

            {mounted && (
              <IconAdornment
                icon={theme === 'dark' ? MoonIcon : SunIcon}
                onClick={() => {
                  toggleTheme()
                }}
              />
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
