type Props = {
  title?: string
  children: React.ReactNode
}

const Section = ({ title = '', children }: Props) => (
  <section className='p-6'>
    {title ? (
      <h2 className='pb-2 cursor-default select-none text-gray-400 dark:text-gray-500 uppercase font-medium text-xs tracking-wide'>
        {title}
      </h2>
    ) : null}

    <div>{children}</div>
  </section>
)

export default Section
