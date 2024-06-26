import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import PropTypes from 'prop-types';

import { Wrapper as WrapperPopper } from '~/components/Popper'
import Header from "./Header";
import MenuItem from "./MenuItem";
import styles from './Menu.module.scss'
import { useState } from "react";

const cx = classNames.bind(styles)
const defaultFn = () => { }


function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn, ...passProps }) {

    const [history, setHistory] = useState([{ data: items }])

    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children

            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }} />
        }
        )
    }

    const handleBack = () => {
        setHistory(prev => prev.slice(0, prev.length - 1))
    }

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <WrapperPopper className={cx('menu-popper')}>
                {history.length > 1 && < Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </WrapperPopper>
        </div>
    )

    const handleResetMenu = () => {
        setHistory(prev => prev.slice(0, 1))
    }

    return (
        <Tippy
            {...passProps}
            offset={[20, 10]}
            delay={[0, 500]}
            hideOnClick={hideOnClick}
            interactive={true}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Menu;