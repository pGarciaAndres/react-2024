import React from 'react'
import logo from '@/assets/logo.png'
import styles from './header.module.scss'

export const Header: React.FC = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.overlay} />
      <img src={logo} alt='header image' />
    </nav>
  )
}
