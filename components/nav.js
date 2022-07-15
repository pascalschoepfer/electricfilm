import Link from 'next/link'
import {useRouter} from "next/router";

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
        <div className="container container-nav text-center mt-lg-2 p-0">
            <ul className="nav nav-pills col justify-content-center">
                {
                    Object.values(navItems).map(item =>
                        <div className="col-lg-3 col-md-4 col-xs-5" key={item.title}>
                            <div className={router.pathname === item.link ? "bg-danger" : ""}>
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