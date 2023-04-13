import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { links } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <div>
      <nav className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {showLinks && (
          <div className="links-container">
            <div className="links">
              {links.map((link) => {
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
