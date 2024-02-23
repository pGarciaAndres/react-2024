import React from 'react'
import logo from '@/assets/logo.png'
import styles from './header.module.scss'

export const Header: React.FC = () => {
  return (
    <nav className={styles.container}>
      <img src={logo} alt='logo' />
    </nav>
  )
}
