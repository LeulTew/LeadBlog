import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { RiskBadge } from '../RiskBadge'
import { VisualBar } from '../VisualBar'
import { BrandList } from '../BrandList'
import { Sources } from '../Sources'
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

describe('RiskBadge', () => {
  it('renders correctly for Low risk', () => {
    render(<RiskBadge risk="Low" isDark={false} />)
    expect(screen.getByText('Low')).toBeInTheDocument()
  })

  it('renders correctly for High risk', () => {
    render(<RiskBadge risk="High" isDark={false} />)
    expect(screen.getByText('High')).toBeInTheDocument()
  })

  it('renders compact mode', () => {
    render(<RiskBadge risk="Low" isDark={false} compact={true} />)
    expect(screen.getByText('Low')).toBeInTheDocument()
  })
})

describe('VisualBar', () => {
  it('renders correctly', () => {
    render(<VisualBar value={0.5} max={1} isDark={false} />)
    // We can check if the bar exists by class or style, but snapshot is easier for visual components
    const bar = screen.getByRole('progressbar', { hidden: true }).parentElement
    expect(bar).toBeInTheDocument()
  })
})

describe('BrandList', () => {
  it('renders and toggles', () => {
    render(<BrandList theme={mockTheme} isDarkMode={false} />)
    expect(screen.getByText('Protein Brands Sold in Ethiopia')).toBeInTheDocument()
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    expect(screen.getByText('Optimum Nutrition (Gold Std)')).toBeInTheDocument()
  })
})

describe('Sources', () => {
  it('renders and toggles', () => {
    render(<Sources theme={mockTheme} isDarkMode={false} />)
    expect(screen.getByText('Scientific References & Sources')).toBeInTheDocument()
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    expect(screen.getByText('Ethiopian Agriculture Studies')).toBeInTheDocument()
  })
})
