import { PropsWithChildren } from 'react'
import styles from './movieLayout.module.css'

export const MovieLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>
}
