import Link from 'next/link';
import styles from '../styles/404.module.css';
import { useEffect} from 'react';
import { useRouter } from 'next/router';

const NotFound = () =>{
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/');
        }, 3000);
    },[]);

    return (
        <div className={styles.notFound}>
            <h2>404 | Ooooops...</h2>
            <p>Page you looking for not found.</p>
            <Link href="/"><a>Go to Home</a></Link>
        </div>
    )
}

export default NotFound;