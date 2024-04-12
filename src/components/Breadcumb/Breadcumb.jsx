import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Breadcumb.module.scss";

const cx = classNames.bind(styles);

function Breadcumb({ currentPage }) {
    return (
        <div className={cx("wrapper")}>
            <Link to="/">Home</Link>
            <span> / </span>
            <span>{currentPage}</span>
        </div>
    );
}

export default Breadcumb;
