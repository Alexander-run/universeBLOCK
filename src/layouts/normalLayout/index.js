import { Menu } from "antd"
import styles from './index.less';
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";

export default function NormalLayout(props) {
    const history = useHistory()
    // action handling
    const handleGoTo = (e) => {
        let path = '/'+e.key
        history.push(path)
    }
    // style handling
    const handleThemeChange = () => {
        
    }
    return (
        <div>
        <div className={styles.header}>
            <Link to='/'>
                <div className={styles.logoGroup}>
                    <div className={styles.logo}></div>
                    <div>对方正在输入</div>
                </div>
            </Link>            
            <Menu mode='horizontal' onClick={handleGoTo}>
                <Menu.Item key='sentence'>
                    文摘
                </Menu.Item>
                <Menu.Item key='travel'>
                    旅记
                </Menu.Item>
                <SubMenu title='作品集'>
                    <Menu.Item key='weather'>
                        天气卡片
                    </Menu.Item>
                    <Menu.Item key='clock'>
                        时钟
                    </Menu.Item>
                    <Menu.Item key='manager'>
                        租车车（租车平台）
                    </Menu.Item>
                </SubMenu>
            </Menu>     
        </div>
        <div className={styles.mainBody}>            
            {props.children}
        </div>
        <footer className={styles.mainFooter}>到头了……</footer>
        </div>
    )
}