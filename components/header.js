import Link from 'next/link'

const Header = () => (
  <header className='p-6'>
    <h1 className='sr-only'>mellow</h1>
    <div>
      <Link href='/'>
        <a className='-ml-2 p-2 inline-flex'>
          <svg
            viewBox='0 0 216 213'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5'
          >
            <path
              d='M8.00006 203V9.82843C8.00006 8.04662 10.1543 7.15428 11.4143 8.41421L106.586 103.586C107.367 104.367 108.633 104.367 109.414 103.586L204.586 8.41421C205.846 7.15428 208 8.04662 208 9.82843V203C208 204.105 207.105 205 206 205H10.0001C8.89549 205 8.00006 204.105 8.00006 203Z'
              stroke='currentColor'
              strokeWidth='15'
            />
          </svg>
        </a>
      </Link>
    </div>
  </header>
)

export default Header
