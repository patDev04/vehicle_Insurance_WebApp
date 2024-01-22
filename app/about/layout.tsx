import { Open_Sans } from 'next/font/google'
import React from 'react'
import styles from './styles.module.css'
import Head from './head'

const OpenSans = Open_Sans({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
  return (
    <html lang="en">
        <Head/>
        <nav> About Nav</nav>
        <main className={styles.main}>{children}</main>
    </html>

  )
}
