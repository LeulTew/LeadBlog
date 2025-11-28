import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Hero } from '../Hero'
import { BlogIntro } from '../BlogIntro'
import { Theme } from '@/types'

const mockTheme: Theme = {
  bgMain: 'bg-neutral-50',
  bgCard: 'bg-white',
  textMain: 'text-neutral-900',
  textMuted: 'text-neutral-500',
  border: 'border-neutral-200',
  inputBg: 'bg-white',
  hoverBg: 'hover:bg-neutral-50',
  divider: 'divide-neutral-100',
  btnActive: 'bg-white',
  btnInactive: 'text-neutral-500',
}

describe('Header', () => {
  it('renders correctly', () => {
    const setIsDarkMode = vi.fn()
    render(<Header isDarkMode={false} setIsDarkMode={setIsDarkMode} theme={mockTheme} />)
    expect(screen.getByText('Lead Safety Monitor')).toBeInTheDocument()
    expect(screen.getByText('Pb')).toBeInTheDocument()
  })

  it('toggles dark mode', () => {
    const setIsDarkMode = vi.fn()
    render(<Header isDarkMode={false} setIsDarkMode={setIsDarkMode} theme={mockTheme} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(setIsDarkMode).toHaveBeenCalledWith(true)
  })
})

describe('Footer', () => {
  it('renders correctly', () => {
    render(<Footer theme={mockTheme} />)
    expect(screen.getByText('Leul T Agonafer')).toBeInTheDocument()
    expect(screen.getByText('Dev & Gym Goer')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('Telegram')).toBeInTheDocument()
  })
})

describe('Hero', () => {
  it('renders correctly in light mode', () => {
    render(<Hero isDarkMode={false} />)
    expect(screen.getByRole('heading', { name: /Your/i })).toBeInTheDocument()
    expect(screen.getAllByText(/Gomen/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Has More/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Lead/i).length).toBeGreaterThan(0)
  })

  it('renders correctly in dark mode', () => {
    render(<Hero isDarkMode={true} />)
    expect(screen.getAllByText(/Protein Powder/i).length).toBeGreaterThan(0)
  })
})

describe('BlogIntro', () => {
  it('renders correctly', () => {
    render(<BlogIntro theme={mockTheme} isDarkMode={false} />)
    expect(screen.getByText(/f you’re anything like me/i)).toBeInTheDocument()
    expect(screen.getByText(/Is this safe\? Is this clean\?/i)).toBeInTheDocument()
  })
})
