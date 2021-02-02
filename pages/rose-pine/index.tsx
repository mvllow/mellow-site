import { useState } from 'react'
import Header from '@/components/header'
import Section from '@/components/section'
import Item from '@/components/item'

let colors = [
  { name: 'base', color: '#191724' },
  { name: 'surface', color: '#1f1d2e' },
  { name: 'overlay', color: '#26233a' },
  { name: 'inactive', color: '#555169' },
  { name: 'subtle', color: '#6e6a86' },
  { name: 'text', color: '#e0def4' },
  { name: 'love', color: '#eb6f92' },
  { name: 'gold', color: '#f6c177' },
  { name: 'rose', color: '#ebbcba' },
  { name: 'pine', color: '#31748f' },
  { name: 'foam', color: '#9ccfd8' },
  { name: 'iris', color: '#c4a7e7' },
]

let colorsMoon = [
  { name: 'base', color: '#232136' },
  { name: 'surface', color: '#2a273f' },
  { name: 'overlay', color: '#393552' },
  { name: 'inactive', color: '#59546d' },
  { name: 'subtle', color: '#817c9c' },
  { name: 'text', color: '#e0def4' },
  { name: 'love', color: '#eb6f92' },
  { name: 'gold', color: '#f6c177' },
  { name: 'rose', color: '#ea9a97' },
  { name: 'pine', color: '#3e8fb0' },
  { name: 'foam', color: '#9ccfd8' },
  { name: 'iris', color: '#c4a7e7' },
]

let colorsDawn = [
  { name: 'base', color: '#faf4ed' },
  { name: 'surface', color: '#fffaf3' },
  { name: 'overlay', color: '#f2e9de' },
  { name: 'inactive', color: '#9893a5' },
  { name: 'subtle', color: '#6e6a86' },
  { name: 'text', color: '#575279' },
  { name: 'love', color: '#b4637a' },
  { name: 'gold', color: '#ea9d34' },
  { name: 'rose', color: '#d7827e' },
  { name: 'pine', color: '#286983' },
  { name: 'foam', color: '#56949f' },
  { name: 'iris', color: '#907aa9' },
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
        <Section title='Rosé Pine'>
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

        <Section title='Rosé Pine Moon'>
          <div className='flex flex-col space-y-2'>
            {colorsMoon.map((color) => (
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

        <Section title='Rosé Pine Dawn'>
          <div className='flex flex-col space-y-2'>
            {colorsDawn.map((color) => (
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
      </Section>
    </>
  )
}

export default RosePine
