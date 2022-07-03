import React from 'react'

const AppHeader = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className='container'>
                <div className="navbar-brand level-item">
                    <a className="navbar-item title is-5" href="https://bulma.io">
                        MAMAKOO
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Destinations
                        </a>
                        <a className="navbar-item">
                            Insider
                        </a>
                        <a className="navbar-item">
                            About
                        </a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default AppHeader