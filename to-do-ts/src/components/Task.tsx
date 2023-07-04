import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
  return(
    <div className={styles.task}>
      <header>
        <div className={styles.createTask}>
          <strong>Tarefas criadas</strong>
          <span> 5</span>
        </div>

        <div className={styles.concluded}>
          <strong>Concluídas</strong>
          <span> 2 de 5</span>
        </div>
      </header>

      <div className={styles.listToDo}>
        <input className={styles.check} type="checkbox" />
        <p className={styles.listTask}> task pra fazer</p>
        <button className={styles.deleteTask} title='Deletar task'>
          <Trash size={20} />
        </button>
      </div>
    </div>
  )
}