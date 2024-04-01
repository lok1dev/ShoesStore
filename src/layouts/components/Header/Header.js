import classNames from "classnames/bind";
import 'tippy.js/dist/tippy.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartArrowDown,
    faCircleQuestion,
    faGear,
    faSignOut,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import config from "~/config";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import images from "~/assets/images";
import Image from "~/components/Image";
import Search from "../Search";
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

const MENU_ITEMS = [

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    }
]

function Header() {

    const currentUser = false

    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@me'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/',
            separate: true
        }
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo-link')} to={config.routes.home}>
                    <img className={cx('logo-img')} src={images.logo} alt="ShoesStore" />
                </Link>

                <Search />


                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <a className={cx('cart')}>
                                <FontAwesomeIcon icon={faCartArrowDown} />
                            </a>
                            <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                                    alt='name'
                                    fallback='https://yt3.googleusercontent.com/UsflU74uvka_3sejOu3LUGwzOhHJV0eIYoWcvOfkOre_c12uIN4ys-QqRlAkbusEmbZjTA-b=s900-c-k-c0x00ffffff-no-rj'
                                />
                            </Menu>

                        </>
                    ) : (
                        <>
                            <a className={cx('cart')}>
                                <FontAwesomeIcon icon={faCartArrowDown} />
                            </a>
                            <a className={cx('non-user')}>
                                <FontAwesomeIcon icon={faUser} />
                            </a>

                        </>
                    )}



                </div>
            </div>
        </header >
    );
}

export default Header;