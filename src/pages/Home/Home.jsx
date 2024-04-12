import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import BannerList from "./BannerList";


const cx = classNames.bind(styles);

function Home() {
    return (
       <BannerList />
    );
}

export default Home;
