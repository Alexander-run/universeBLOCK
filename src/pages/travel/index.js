import { Menu } from "antd"
import { connect } from "dva"
import { useEffect } from "react"
import styles from './index.less'

const Travel = ({dispatch, travels}) => {

    const updateList = () => {
        dispatch({
            type:'travels/fetchList',
        })
    }

    const changeSelected = (id) => {
        dispatch({
            type:'travels/fetchSingle',
            payload: id
        })
    }


    return (
        <div className={styles.travel}>
            <Menu>
                {travels.travelList?
                    travels.travelList.map(item=>(
                        <Menu.Item>{item}</Menu.Item>
                    ))
                    :null
                }
            </Menu>
            <div className={styles.travel_content}>
                <h1>{travels.selected.title}</h1>
                <p>{travels.selected.content}</p>
            </div>
        </div>
    )
}

export default connect(({travels}) => ({travels}))(Travel);