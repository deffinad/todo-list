import { Card } from "."
import { Badge } from "../badge"
import styles from '../../styles/Card.module.css'

export const CardTodo = (props: any) => {
    return (
        <Card todo={true} key={props.index} style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={styles.cardTodoHead}>
                <div className={styles.completed}>
                    {props.data.completed ? (
                        <Badge label="Completed" style={{ backgroundColor: '#389e3d' }} />
                    ) : (
                        <Badge label="Todo" style={{ backgroundColor: '#f1e52f' }} />
                    )}
                </div>

                <div className={styles.user}>
                    <span className={styles.imgUser}>{props.data.userId}</span>
                </div>
            </div>
            <div className={styles.cardTodoBody}>
                <p>{props.data.title}</p>
            </div>
        </Card>
    )
}