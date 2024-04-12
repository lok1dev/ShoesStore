import classNames from "classnames/bind";
import styles from "./BannerItem.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function BannerItem({ src, className, children, width50 = false, name, props }) {
    const classes = cx("wrapper", {
        [className]: className,
        width50,
    });

    return (
        <div className={classes} {...props}>
            <img className={cx("image")} src={src} alt="banner" />
            <span className={cx("title")}>{children}</span>
            <Button className={cx("btn")} to={`/collections/${name}/`} large>
                XEM NGAY
            </Button>
        </div>
    );
}

export default BannerItem;
