import Link from 'next/link';
import Image from 'next/image';

const Nav = () =>{
    return(
        <div className="navWrapper">
            <h2>
                <Image src="/assets/logo.png" width={128} height={77}/>
            </h2>
            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/ninjalist"><a>Ninja List</a></Link>
            </nav>
        </div>
        
    )
}

export default Nav;