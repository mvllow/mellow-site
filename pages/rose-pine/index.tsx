import { useState } from 'react'
import Header from '@/components/header'
import Section from '@/components/section'
import Item from '@/components/item'

let colors = [
  { name: 'base', color: '#191724' },
  { name: 'surface', color: '#1f1d2e' },
  { name: 'border', color: '#26233a' },
  { name: 'shadow', color: '#010101' },
  { name: 'subtle', color: '#706e86' },
  { name: 'text', color: '#e0def4' },
  { name: 'rose', color: '#ebbcba' },
  { name: 'pine', color: '#31748f' },
  { name: 'foam', color: '#9ccfd8' },
  { name: 'iris', color: '#c4a7e7' },
  { name: 'love', color: '#eb6f92' },
  { name: 'gold', color: '#f6c177' },
]

const RosePine = () => {
  const [copied, setCopied] = useState('')

  function copyColor(color) {
    try {
      navigator?.clipboard.writeText(color.color || '')
      setCopied(color.name || null)
    } catch (err) {
      // Error copying to clipboard
    }
  }

  return (
    <>
      <Header />
      <Section title='Rosé Pine Theme'>
        <span className='text-sm'>
          All natural pine, faux fur and a bit of soho vibes for the classy
          minimalist.
        </span>

        <Item href='https://github.com/rose-pine/rose-pine-theme'>
          <div className='space-x-1 inline-flex items-center'>
            <span>Contribute on GitHub</span>
            <svg
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4'
            >
              <path
                d='M8.146 9.146l-.353.354.707.707.354-.353-.708-.708zM10.5 7.5l.354.354.353-.354-.353-.354-.354.354zM8.854 5.146L8.5 4.793l-.707.707.353.354.708-.708zm0 4.708l2-2-.708-.708-2 2 .708.708zm2-2.708l-2-2-.708.708 2 2 .708-.708zM10.5 7H4v1h6.5V7z'
                fill='currentColor'
              ></path>
            </svg>
          </div>
        </Item>
      </Section>

      <Section title='Palette'>
        <div className='flex flex-col space-y-2'>
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => copyColor(color)}
              className='space-x-2 font-mono flex items-center'
            >
              <div
                className='w-6 h-6 rounded-full'
                style={{ backgroundColor: color.color }}
              />
              <span className='text-xs'>{color.color} -</span>
              <span className='text-xs'>{color.name}</span>
              {copied == color.name ? (
                <span className='text-xs text-gray-400 dark:text-gray-600'>
                  (copied)
                </span>
              ) : null}
            </button>
          ))}
        </div>
      </Section>
    </>
  )
}

export default RosePine
