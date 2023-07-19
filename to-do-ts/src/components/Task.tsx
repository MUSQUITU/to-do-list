import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task({content}) {
  return(
    <div className={styles.task}>
      
      <div className={styles.listToDo}>

        <div className={styles.check}>
          <label className={styles.listTask}>
            <input type="checkbox" />
            
              {content.map(line => {
                if (line.type ==='paragraph'){
                  return <span key={line.content} > {line.content}</span>;
                }
              })}
              
          </label>
        </div>

        <button className={styles.deleteTask} title='Deletar task'>
          <Trash size={20} />
        </button>
      </div>
    </div>
  )
}