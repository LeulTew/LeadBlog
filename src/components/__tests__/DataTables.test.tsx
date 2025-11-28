import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DataTables } from '../DataTables'
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

describe('DataTables', () => {
  it('renders correctly', () => {
    render(<DataTables theme={mockTheme} isDarkMode={false} />)
    expect(screen.getByText('Shimbra & Pharmacy Whey are safer than city greens.')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument()
  })

  it('filters data', () => {
    render(<DataTables theme={mockTheme} isDarkMode={false} />)
    
    // Initial state should show all
    expect(screen.getAllByText('Teff grain / Injera').length).toBeGreaterThan(0)
    
    // Filter by 'Vegetables'
    const vegButton = screen.getByRole('button', { name: 'Vegetables' })
    fireEvent.click(vegButton)
    
    // Should show vegetables
    expect(screen.getAllByText('Leafy Greens (Gomen)').length).toBeGreaterThan(0)
    // Should NOT show staples (Teff)
  })

  it('searches data', () => {
    render(<DataTables theme={mockTheme} isDarkMode={false} />)
    
    const searchInput = screen.getByPlaceholderText(/Search/i)
    fireEvent.change(searchInput, { target: { value: 'Teff' } })
    
    expect(screen.getAllByText('Teff grain / Injera').length).toBeGreaterThan(0)
    expect(screen.queryByText('Leafy Greens (Gomen)')).not.toBeInTheDocument()
  })
})
