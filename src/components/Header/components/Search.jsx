import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { SearchWrapper, Input } from './HeaderStyle'
import { useHistory } from 'react-router-dom'

const Search = () => {
  const [query, setQuery] = useState('')

  const history = useHistory()

  const handleSearch = () => {
    if (!query.trim()) return
    history.push(`/search?q=${query.trim()}`)
    setQuery('')
  }

  const handleChange = (e) => setQuery(e.target.value)

  return (
    <SearchWrapper>
      <Input
        onKeyDown={(e) => (e.key === 'Enter' ? handleSearch() : false)}
        onChange={(e) => handleChange(e)}
        value={query}
        type="text"
        placeholder="Arama"
      />
      <FaSearch onClick={handleSearch} />
    </SearchWrapper>
  )
}

export default Search
