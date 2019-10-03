import React from 'react'
import './Components.css'

const Navbar = () => { 
    return (
        <React.Fragment>
            <header>
        {/* Fixed navbar */}
        <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
          <a className='navbar-brand' href='/'>
            UBER Analytics
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarCollapse'
            aria-controls='navbarCollapse'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarCollapse'>

          </div>
        </nav>
      </header>
        </React.Fragment>
    )
}

export default Navbar;