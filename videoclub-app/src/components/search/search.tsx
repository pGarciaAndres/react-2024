import React from 'react'
import { MdSearch } from 'react-icons/md'
import { Context } from '@/core/context'
import styles from './search.module.scss'

export const Search = () => {
  const { search, setCurrentPage } = React.useContext(Context)
  const [input, setInput] = React.useState<string>(search)
  // const { refetch } = useSearch()
  // const debounceInput = useDebounce(input, 500)

  // React.useEffect(() => {
  // if (debounceInput === '') return
  // setSearch(debounceInput)
  // setCurrentPage(1)
  // }, [debounceInput])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!input) return
    // refetch()
    console.log(e.target.value)
    setInput(e.target.value)
    setCurrentPage(1)
  }

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type='text'
        placeholder='Search movies'
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  )
}
