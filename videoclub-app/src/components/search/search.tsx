import React from 'react'
import { MdSearch } from 'react-icons/md'
import { Context } from '@/core/context'
import styles from './search.module.scss'

export const Search = () => {
  const { search, setSearch, setCurrentPage } = React.useContext(Context)
  const [input, setInput] = React.useState<string>(search)
  const [debounceInput, setDebounceInput] = React.useState(input)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceInput(input)
    }, 1000)

    return () => clearTimeout(timer)
  }, [input])

  React.useEffect(() => {
    setSearch(debounceInput)
    setCurrentPage(1)
  }, [debounceInput, setCurrentPage, setSearch])

  return (
    <div className={styles.container}>
      <MdSearch size={32} />
      <input
        aria-label='Search movies'
        type='text'
        placeholder='Search movies'
        className={styles.input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  )
}
