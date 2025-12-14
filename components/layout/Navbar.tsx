import React from 'react'
import Button from '../ui/Button'
import ProfileDropdown from '../ui/ProfileDropdown'
import SearchBar from '../ui/Searchbar'

const Navbar = () => {
    const handleClick = () => {
        console.log("Create Bookmark")
    }

    return (
        <header className='w-full flex px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2 border-b border-brdr justify-between items-center'>
            <SearchBar />
            <div className='flex gap-3 items-center'>
                <Button text="Create Bookmark" handleClick={handleClick} />
                <ProfileDropdown />
            </div>
        </header>
    )
}

export default Navbar