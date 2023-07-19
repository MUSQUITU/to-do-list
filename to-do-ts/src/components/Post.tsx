import {PlusCircle} from 'phosphor-react'

import styles from './Post.module.css'
import { Task } from './Task'
import styless from './Task.module.css';


export function Post() {
  function handleCreateNewTask(){
    event?.preventDefault()
  }

  return (

    <article>
  
      <form onSubmit={handleCreateNewTask} className={styles.textArea}>
        <textarea 
          placeholder='Adicione uma nova tarefa'
        />
        <button type='submit'>Criar <PlusCircle size={20}/>
        </button>
      </form>
    
    <div className={styless.task}>
    <header>
        <div className={styless.createTask}>
          <strong>Tarefas criadas</strong>
          <span>1</span>
        </div>

        <div className={styless.concluded}>
          <strong>Concluídas </strong>
          <span>1 de 1</span>
        </div>
      </header>
    </div>

    </article>
  )
}

