import Link from 'next/link'
import React from 'react'
import { Layout } from 'antd'

const { Header } = Layout

function MainHeader() {
  return (
    <Header className="app-bar">
      <div className="app-bar__brand">
        <h1>Movie Catalogue</h1>
      </div>
      <nav id="navigationDrawer" className="app-bar__navigation">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </Header>
  )
}

export default MainHeader
