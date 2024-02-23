import { PropsWithChildren } from 'react'
import styles from './layout.module.css'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>
}
