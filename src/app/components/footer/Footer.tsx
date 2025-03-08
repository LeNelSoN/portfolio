import React from 'react'

const Footer: React.FC = () => {

    const FULL_YEAR = new Date().getFullYear();

    return (
        <footer className="text-center p-4 bg-gray-200 mt-8">
        <p>&copy; {FULL_YEAR} Nelis Valentin. All rights reserved.</p>
      </footer>
    )
}

export default Footer