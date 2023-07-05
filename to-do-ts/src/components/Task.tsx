import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
  return(
    <div className={styles.task}>
      <header>
        <div className={styles.createTask}>
          <strong>Tarefas criadas</strong>
          <span>1</span>
        </div>

        <div className={styles.concluded}>
          <strong>Concluídas </strong>
          <span>1 de 1</span>
        </div>
      </header>

      <div className={styles.listToDo}>

        <div className={styles.check}>
          <label className={styles.listTask}>
            <input type="checkbox" />
            <span>task pra fazer</span>
          </label>
        </div>

        <button className={styles.deleteTask} title='Deletar task'>
          <Trash size={20} />
        </button>
      </div>
    </div>
  )
}