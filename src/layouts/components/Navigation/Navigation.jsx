import classNames from "classnames/bind";
import styles from "./Navigation.module.scss";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Navigation() {
    return (
        <div className={cx("wrapper")}>
            <Button transparent to={"/collections/popularity"}>
                BÁN CHẠY
            </Button>
            <Button transparent to={"/collections/discount"}>
                GIẢM GIÁ 30%
            </Button>
            <Button transparent to={"/collections"} rightIcon={<FontAwesomeIcon icon={faArrowDown} />}>
                SNEAKER
            </Button>
            <Button transparent to={"/posts"}>
                BÀI VIẾT
            </Button>
            <Button transparent to={"/feedbacks"}>
                FEEDBACK
            </Button>
            <Button transparent to={"/contact"}>
                LIÊN HỆ
            </Button>
        </div>
    );
}

export default Navigation;
