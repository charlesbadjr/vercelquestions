import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        How could we improve or alter this familiarization exercise?    
            </p>
      
        
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>


      <div className={styles.description}>
        <p>
          Writting emails in code is a bit odd looking.  I'm going to go back and change that. but the familiarization process is fine. 10 out of 10.
        </p>
      
        
      </div>


      <div className={styles.grid}>
        
          <h2>
             <Link href="/Question3"> Next Question </Link>
          </h2>
         
      
      </div>
    </main>
  )
}
