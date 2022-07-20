import Link from 'next/link'
import {useRouter} from "next/router";
import Head from "next/head";

const Nav = () => {
    const router = useRouter();
    const navItems = {
        HOME: {
            link: '/',
            title: 'Home'
        },
        POAP: {
            link: '/poap',
            title: 'POAP'
        },
        FAQ: {
            link: '/faq',
            title: 'FAQ'
        }
    }

    return (
        <div className="container container-nav text-center mt-3 p-2 col-xl-4 col-md-6 col-sm-8 col-11">
            <Head>
                <title>electric.film</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <ul className="nav nav-pills col justify-content-center">
                {
                    Object.values(navItems).map(item =>
                        <div className="nav-item col-lg-2 col-3 mx-2" key={item.title}>
                            <div className={router.pathname === item.link ? "active" : ""}>
                                <Link href={item.link}>{item.title}</Link>
                            </div>
                        </div>
                    )
                }
            </ul>

        </div>
    )

}

export default Nav;