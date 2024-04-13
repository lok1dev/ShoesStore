import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";

import styles from "./Contact.module.scss";
import Breadcumb from "~/components/Breadcumb/Breadcumb";
import Button from "~/components/Button";
import CarouselCpn from "~/components/CarouselCpn/Carousel";

const cx = classNames.bind(styles);

const images = [
    "https://saigonsneaker.com/wp-content/uploads/2019/11/adidas-superstar-feeback_0009_IMG_9869.jpg.webp",
    "https://saigonsneaker.com/wp-content/uploads/2019/11/adidas-superstar-feeback_0008_IMG_9862.jpg.webp",
    "https://saigonsneaker.com/wp-content/uploads/2019/11/adidas-superstar-feeback_0007_IMG_9885.jpg.webp",
    "https://saigonsneaker.com/wp-content/uploads/2019/11/adidas-superstar-feeback_0006_IMG_9873.jpg.webp",
    "https://saigonsneaker.com/wp-content/uploads/2019/11/adidas-superstar-feeback_0005_IMG_9875.jpg.webp",
    "https://saigonsneaker.com/wp-content/uploads/2019/11/adidas-superstar-feeback_0002_IMG_0493.jpg.webp",
    "https://saigonsneaker.com/wp-content/uploads/2019/11/adidas-superstar-feeback_0001_IMG_0946-2.jpg.webp",
    "https://saigonsneaker.com/wp-content/uploads/2019/11/adidas-superstar-feeback_0000_IMG_0485-2.jpg.webp",
];

function Contact() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>
                <h1 className={cx("header-text")}>Cửa Hàng Sneaker</h1>
                <Breadcumb currentPage="Liên hệ" />
            </div>
            <div className={cx("info")}>
                <span className={cx("info-header")}>Hotline: 0999.999.999</span>
                <ul className={cx("list-info")}>
                    <li className={cx("item-info")}>48B THẠCH THỊ THANH, TÂN ĐỊNH, Q1,HCM</li>
                    <li className={cx("item-info")}>Email: cskh@saigonsneaker.com</li>
                    <div className={cx("spacing")}>
                        Mở cửa:
                        <li className={cx("item-info")}>T2 – T7: 11:00 ~ 21:00</li>
                        <li className={cx("item-info")}>CN: 14:00 ~ 20:00</li>
                    </div>
                </ul>

                <ul className={cx("list-btn")}>
                    <li>
                        <Button
                            className={cx("btn")}
                            to={`/`}
                            primary
                            leftIcon={<FontAwesomeIcon icon={faLocation} />}
                            small
                        >
                            Google Map
                        </Button>
                    </li>
                    <li>
                        <Button className={cx("btn")} to={`/`} primary small>
                            Liên hệ hỗ trợ
                        </Button>
                    </li>
                </ul>

                <h1 className={cx("info-header")}>Các tiện ích tại cửa hàng</h1>
                <ul className={cx("list-info")}>
                    <li className={cx("item-info")}>Wifi miễn phí.</li>
                    <li className={cx("item-info")}>
                        Chấp nhận thanh toán bằng: Thẻ tín dụng Visa, Master Card, thẻ ngân hàng nội địa ATM, Samsung
                        pay, Momo.
                    </li>
                    <li className={cx("item-info")}>Có chỗ đỗ xe máy, xe hơi.</li>
                </ul>
            </div>
            <CarouselCpn imgs={images} />
        </div>
    );
}

export default Contact;
