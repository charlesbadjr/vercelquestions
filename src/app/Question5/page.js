import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        Imagine that the customer from Question 4 responds with the following email. 
“I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so why don't you just fix it for me instead of asking me questions.”


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
          <a> Hi Customer,</a>

          I'm sorry this isn't working well for you. I've checked in with some coworkers and I don't believe this function is broken rigt now. Perhaps we can meet together and go over your code to determine the best way to get it running again. If you can tell me when you're open to meeting I can send you a zoom link. 

          <a> Regards,</a>
        </p>
      
        
      </div>


      <div className={styles.grid}>
        
          <h2>
           <Link href="/Question6"> Next Question </Link>
          </h2>
         
      
      </div>
    </main>
  )
}
