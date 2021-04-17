import Head from 'next/head';

const Details = ({ninja}) =>{
    return (
        <>
            <Head>
                <title>Ninja | Details</title>
                <meta name="keyword" content="It is ninja meta"/>
            </Head>
            <div className="ninjalist">
                <h1>Ninja Details</h1>
                <div>
                    <h3>{ninja.name}</h3>
                    <p>{ninja.email}</p>
                    <p>{ninja.website}</p>
                </div>
            </div>
        </>
    )
}

export default Details;

export const getStaticPaths = async () =>{
    const data = await ( await fetch('https://jsonplaceholder.typicode.com/users')).json();

    let paths = [];

    if( data && data.length > 0 ){
        //console.log(data);
        paths = data.map(item => ({
            params: {id: item.id.toString()}
        }));

    }

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async({params}) =>{

    const data = await( await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`) ).json();

    return {
        props: {
            ninja: data
        }
    }
}