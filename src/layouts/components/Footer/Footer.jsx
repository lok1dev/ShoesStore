import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("list")}>
                <div className={cx("item")}>
                    <h1 className={cx("header")}>SAIGONSNEAKER.COM</h1>
                    <p className={cx("desciption")}> Address: 48B Thạch Thị Thanh, Tân Định, Q1, Hồ Chí Minh.</p>
                    <p className={cx("desciption")}>
                        {" "}
                        Phone: <strong>0903 150 443</strong>{" "}
                    </p>
                    <p className={cx("desciption")}>Open: 10am – 9pm (Tất cả các ngày)</p>
                    <p className={cx("desciption")}>Email: cskh@saigonsneaker.com</p>
                    <div className={cx("desciption")}>
                        <Button className={cx("btn")} transparent small>
                            Google Map
                        </Button>
                    </div>
                    <div className={cx("desciption")}>
                        <Button className={cx("btn")} transparent small>
                            Liên hệ
                        </Button>
                    </div>
                </div>
                <div className={cx("item")}>
                    <h1 className={cx("header")}>CHĂM SÓC KHÁCH HÀNG</h1>
                    <Link className={cx("link")} to={"/"}>
                        Hướng dẫn mua hàng
                    </Link>
                    <Link className={cx("link")} to={"/"}>
                        Chính sách bảo mật
                    </Link>
                    <Link className={cx("link")} to={"/"}>
                        Hình thức thanh toán
                    </Link>
                    <Link className={cx("link")} to={"/"}>
                        Vận chuyển và giao nhận
                    </Link>
                    <Link className={cx("link")} to={"/"}>
                        Bảo hành đổi trả
                    </Link>
                    <Link className={cx("link")} to={"/"}>
                        Xử lý khiếu nại
                    </Link>
                    <Link className={cx("link")} to={"/"}>
                        Hỗ trợ
                    </Link>
                    <Link className={cx("link")} to={"/"}>
                        Đánh giá / Góp ý
                    </Link>
                    <Link className={cx("link")} to={"/"}>
                        Tuyển dụng
                    </Link>
                    <Link className={cx("link")} to={"/"}>
                        Điều khoản dịch vụ
                    </Link>
                </div>
                <div className={cx("item")}>
                    <h1 className={cx("header")}>THÔNG TIN</h1>
                    <Link className={cx("link")} to={"/"}>
                        Tài khoản
                    </Link>
                    <Link className={cx("link")} to={"/"}>
                        Kiểm tra đơn hàng
                    </Link>
                    <Link className={cx("link")} to={"/"}>
                        Đăng ký nhận thông tin
                    </Link>
                </div>
                <div className={cx("item")}>
                    <h1 className={cx("header")}>SHOP</h1>
                    <Link className={cx("link")} to={"/collections/adidas"}>
                        Adidas
                    </Link>
                    <Link className={cx("link")} to={"/collections/nike"}>
                        Nike
                    </Link>
                </div>
            </div>
            <div className={cx("content")}>
                <div className={cx("line")}>
                    <h1 className={cx("header")}>Sneaker Store In Ho Chi Minh City</h1>
                    <p className={cx("desciption")}>
                        Tìm kiếm đôi giày sneaker yêu thích của bạn tại SAIGONSNEAKER, cửa hàng giày sneaker và phụ kiện
                        thời trang đường phố hàng đầu Việt Nam. Tự hào phục vụ hơn 5000 khách hàng tại HCM và toàn Việt
                        Nam từ 2016. Chúng tôi có đầy đủ các loại giày sneaker từ các thương hiệu nổi tiếng nhất thế
                        giới từ Nike, Adidas, Converse đến New Balance, Jordan, Vans…v.v. Đội ngũ nhân viên thân thiện
                        và nhiệt tình sẽ giúp bạn tìm được đôi giày hoàn hảo cho phong cách của mình.
                    </p>
                </div>
                <div className={cx("line")}>
                    <Button className={cx("icon")}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </Button>
                    <Button className={cx("icon")}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </Button>
                    <Button className={cx("icon")}>
                        <FontAwesomeIcon icon={faTiktok} />
                    </Button>
                </div>
                <div className={cx("line")}>
                    <h1 className={cx("header")}>Sneaker Store In Ho Chi Minh City</h1>
                    <p className={cx("desciption")}>Visa Master Card MOMO Cash on Delivery</p>
                    <h1 className={cx("header")}>ĐỐI TÁC VẬN CHUYỂN</h1>
                    <p className={cx("desciption")}>Giaohangtietkiem Giaohangnhanh Lalamove Ahamove GrabExpress</p>
                </div>
                <div className={cx("footer")}>
                    <p>
                        SaigonSneaker.com <FontAwesomeIcon icon={faCopyright} /> 2023{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
