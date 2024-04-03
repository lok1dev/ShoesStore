import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu'
import { HomeActiveIcon, HomeIcon, } from '~/components/Icons'

import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title='For You'
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;