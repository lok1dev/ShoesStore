import PropTypes from "prop-types";
import classNames from "classnames/bind";

import Header from "~/layouts/components/Header";
import styles from "./DefaultLayout.module.scss";
import Navigation from "../components/Navigation";
import Hotline from "../components/Hotline";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Hotline />
            <Header />
            <Navigation />
            <div className={cx("container")}>
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
