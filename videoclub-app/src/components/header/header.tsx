import React from 'react'
import logo from '@/assets/background.png'
import styles from './header.module.scss'

export const Header: React.FC = () => {
  return (
    <nav className={styles.container}>
      <img src={logo} alt='header image' />
      <div className={styles.overlay} role='overlay' />
    </nav>
  )
}
