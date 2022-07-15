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
        <div className="container container-nav text-center my-2 p-2 col-xl-4 col-md-6 col-sm-8 col-11">
            <ul className="nav nav-pills col justify-content-center">
                {
                    Object.values(navItems).map(item =>
                        <div className="nav-item col-lg-3 col-md-4 col-xs-5 mx-2" key={item.title}>
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