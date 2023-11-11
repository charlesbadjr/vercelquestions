import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision making process.
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
          A couple solutions are:
          
        
          <a
             href=" https://nextjs.org/learn-pages-router/seo/rendering-and-ranking/rendering-strategies"
              target="_blank"
              rel="noopener noreferrer"
       > 
       <h4 > <a> CSR, Client side rendering allows developers to make their websites entirely rendered in the browser with JavaScript. On initial page load a single HTML file is generally served with little to no content until you fetch the JavaScript and the browser compiles everything. </a> CSR is perfect for data heavy dashboards, account pages or any page that you do not require to be in any search engine index.
        </h4> 
        </a> 
      <p> 
       <a
       href="https://nextjs.org/learn-pages-router/seo/rendering-and-ranking/metadata"
       target="_blank"
       rel="noopener noreferrer"
       > <h4> 
        You can also use the no index meta tag. I didn't see anything about it on NextJs website but I have a link to add meta tags.
        </h4>
      </a>
      </p>
      </p>
      </div>


      <div className={styles.grid}>
        
          <h2>
            <Link href="/Question7"> Next Question </Link>
          </h2>
         
      
      </div>
    </main>
  )
}
