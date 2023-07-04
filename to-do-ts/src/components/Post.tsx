import {PlusCircle} from 'phosphor-react'

import styles from './Post.module.css'
import { Task } from './Task'

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
    
    <div>
      <Task />
    </div>

    </article>
  )
}

