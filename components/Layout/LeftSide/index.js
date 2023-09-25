import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  RiMovie2Fill,
  RiHomeFill,
  RiHeartLine,
  RiArrowRightCircleLine
} from 'react-icons/ri'

import styles from './index.module.css'
import { getData } from '../../../utils.js'

export default function LeftSide({ categories }) {
  const [genres, setGenres] = useState([])
  const path = useRouter().asPath

  useEffect(() => {
    if (!genres.length) {
      getGenres()
    }
  })

  const getGenres = async () => {
    const data = await getData('/genre/movie/list')
    setGenres(data.genres)
  }

  return (
    <div className={styles.leftside}>
      <Link href="/">
        <a className={styles.logo}>
          <RiMovie2Fill color="#d22f27" />
          Movie App
        </a>
      </Link>
      <div className={styles.nav}>
        <div className={styles.title}>MENÜ</div>
        <Link href="/">
          <a className={path == '/' ? 'active' : ''}>
            <RiHomeFill />
            Ana Sayfa
          </a>
        </Link>
        <Link href="/favorites">
          <a className={path == '/favorites' ? 'active' : ''}>
            <RiHeartLine />
            Beğenilenler
          </a>
        </Link>
      </div>
      <div className={styles.nav}>
        <div className={styles.title}>KATEGORİLER</div>
        {genres.map((category) => (
          <Link href={`/category/${category.id}`} key={category.id}>
            <a className={path == `/category/${category.id}` ? 'active' : ''}>
              <RiArrowRightCircleLine />
              {category.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
