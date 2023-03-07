import React from 'react'
import "./Header.scss"
function Header() {
  return (
    <div className='header'>
        <div className="container">
            <div className="left">
                <h1>Find the perfect <span>freelance</span> service for you business</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" />
                        <input type="text" placeholder='Try  "building a website"' />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className="right">
                <img src="./img/man.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header