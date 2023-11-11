import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by clicking below
          
        </p>
        
        <div>
        
        <h2>
           <Link href="/Question1"> Begin!  </Link>
        </h2>
       
    
    </div>
         
      
      </div>
    </main>
  )
}
