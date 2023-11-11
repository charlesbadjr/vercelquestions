import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        How would you compare Next.js with another framework? Feel free to compare with a framework of your choice
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
          I dont have a lot of experience with different frameworks. I have used express and jQuery. So far Next.js is more user friendly, seemingly holding your hand through the process. The documentation is nice as well. It's not skipping important parts of the process that often go over looked. 
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
