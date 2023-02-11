import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

function FooterItem() {
  return (
    <Footer>
      <p>
        All data obtained from{' '}
        <a href="https://themoviedb.org" target="_blank" rel="noreferrer">
          TheMovieDB
        </a>
      </p>
    </Footer>
  )
}

export default FooterItem
