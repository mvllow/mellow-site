import Link from 'next/link'

const Item = ({ children, href }) => {
  let isExternal = href.startsWith('http')
  let classes =
    'text-gray-600 dark:text-gray-200 text-sm hover:text-black dark:hover:text-white'

  return (
    <div>
      {isExternal ? (
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className={classes}
        >
          {children}
        </a>
      ) : (
        <Link href={href}>
          <a className={classes}>{children}</a>
        </Link>
      )}
    </div>
  )
}

export default Item
