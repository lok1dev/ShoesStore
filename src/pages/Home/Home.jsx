import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import BannerItem from "./BannerItem";

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("banner-list")}>
                <BannerItem
                    src={
                        "https://saigonsneaker.com/wp-content/uploads/2023/11/nike-air-force-1-flyease-FD1146-100-2.webp"
                    }
                    name={"nike-air-force-1"}
                    className={cx("banner-1")}
                >
                    NIKE AIR FORCE 1
                </BannerItem>

                <BannerItem
                    src={"https://saigonsneaker.com/wp-content/uploads/2022/10/giay-new-balance-5.jpg.webp"}
                    name={"new-balance"}
                    width50
                    className={cx("banner-2")}
                >
                    NEW BALANCE
                </BannerItem>
                <BannerItem
                    src={"https://saigonsneaker.com/wp-content/uploads/2019/11/alphabounce-beyond-black.jpg.webp"}
                    name={"adidas"}
                    width50
                    className={cx("banner-3")}
                >
                    ADIDAS PLPHABOUNCE
                </BannerItem>
            </div>
        </div>
    );
}

export default Home;
