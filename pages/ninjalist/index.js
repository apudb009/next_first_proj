import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/ninjalist.module.css';

export default ({ninjas}) =>{
    return (
        <>
            <Head>
                <title>Ninja | Ninja List</title>
                <meta name="keyword" content="It is ninja meta"/>
            </Head>
            <div className="ninjalist">
                <h2>Ninja List</h2>
                <div>
                    {
                        ninjas.map(ninja => (
                            <Link href={`/ninjalist/${ninja.id}`} key={ninja.id}>
                                <a className={styles.single}>
                                    <h3>{ninja.name}</h3>
                                </a>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export const getStaticProps = async () =>{
    const data = await ( await fetch('https://jsonplaceholder.typicode.com/users') ).json();

    return {
        props: {
            ninjas: data
        }
    }
}