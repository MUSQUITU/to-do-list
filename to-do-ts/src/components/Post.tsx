import {PlusCircle} from 'phosphor-react'

import styles from './Post.module.css'

export function Post() {
  return (
  
      <form className={styles.textArea}>
        <textarea 
          placeholder='Adicione uma nova tarefa'
        />
        <button type='submit'>Criar <PlusCircle size={20}/>
        </button>
      </form>
    
  )
}

