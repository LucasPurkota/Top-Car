import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/Header/Header'
import Main from '@/Main/Main'
import Footer from '@/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}
