import { PropsWithChildren } from 'react'
import { Header } from '@/components/header/header'
import styles from './layout.module.css'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  )
}
