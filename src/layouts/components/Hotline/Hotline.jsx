import classNames from "classnames/bind";
import styles from "./Hotline.module.scss";

const cx = classNames.bind(styles);

function Hotline() {
    return (
        <div className={cx("wrapper")}>
            <p className={cx("text")}>Hotline: 0903.150.443 | Free Ship cho đơn hàng trên 1tr đồng</p>
        </div>
    );
}

export default Hotline;
