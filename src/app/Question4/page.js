import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        A customer has a project on Vercel and they want to redirect the /blog path to another website. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you&apos;d like to share about your decision making process.        </p>
      
        
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

           You can redirect outside of your app by using the following code: 
           <ul>
            <li> href="website address" </li>
            <li> className= only needed for styling </li>
            <li> target="_blank"  - add this to open in another window </li>
            <li> rel="noopener noreferrer" - this line will help with security </li>
           </ul>
           <a>
            This will go in place of the current Link tag you may have already set. If I&apos;ve misunderstood your question or you&apos;re seeing errors let me know and we can troubleshoot this further. 
         </a>
         
      

        </p>
      
        
      </div>


      <div className={styles.grid}>
        
          <h2>
           <Link href="/Question5"> Next Question </Link>
          </h2>
         
      
      </div>
    </main>
  )
}
