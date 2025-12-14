'use client'

import React, { useState } from 'react'

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }
    return (
        <input
            className='max-w-[280px] py-2 border border-brdr rounded-lg px-2 text-foreground placeholder:text-gray-300 focus:border-primary focus:outline-0 focus:ring-0 active:border-primary active:outline-0'
            value={searchText}
            onChange={handleInputChange}
            name='search'
            type='text'
            placeholder='Search Bookmarks'
        />
    )
}

export default SearchBar