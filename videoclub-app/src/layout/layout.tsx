import { PropsWithChildren } from 'react'
import styles from './layout.module.css'
import { Header } from '@/components/header/header'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  )
}
