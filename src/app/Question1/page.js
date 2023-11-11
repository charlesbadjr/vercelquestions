import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Describe how you solved a challenge that one of your previous teams faced. How did you determine your solution was successful?
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
          Opperationally there was a large gap in knowledge for everyone on the team, resulting in long SLA on customer tickets. I suggested we hold daily team lunch and learns where we can teach each other processes that we uncovered. We ended up created a large repository of how to articles instead. This added a huge lift to our SLAs from weeks to complete a ticket into just hours. The how to guides listed the author so we were able to reach out to subject matter expert and inquire further if needed. 
        </p>
      
        
      </div>


      <div className={styles.grid}>
        
          <h2>
             <Link href="/Question2"> Next Question </Link>
          </h2>
         
      
      </div>
    </main>
  )
}
