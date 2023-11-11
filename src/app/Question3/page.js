import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?
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
       
        <a
          href="https://vercel.com/docs/functions/serverless-functions"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
           <h4>
          Serverless Functions: 
           I have heard the proper use for Serverless functions is for areas that your data is not accessed continually and a fast spin up will allow the data flow without having dedicated servers running all the time. 
            I saw that Next.js bundles functions together. 
            </h4>
        </a>
      
        <a
          href="https://vercel.com/docs/functions/edge-functions"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>
          Edge Functions: 
           Similar to Serverless functions, these are not constantly running on the server they wait to be called. The advantage here is that you can launch faster than serverless functions and reach global audiance, reducing latency. It is ideal for Oauth and other time sensitive API calls.
        </h4>
        </a>
        <a
          href="https://vercel.com/docs/functions/edge-middleware"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
        <h4> 
          Edge Middleware: 
           Middleware runs before the cache is called. So for example, you can provide regional data on your website without having to call out in an api. This would be faster and less resource intensive. 
        </h4>
       </a>
        
      </div>


      <div className={styles.grid}>
        
          <h2>
             <Link href="/Question4"> Next Question </Link>
          </h2>
         
      
      </div>
    </main>
  )
}
