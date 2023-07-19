import { Post } from './components/Post';
import { Header } from './components/Header';
import { Task } from './components/Task';

import styles from './App.module.css';
import './global.css';


const tasks = [
  {
    id: 1,
    content: [
      {type: 'paragraph', content: 'task pra fazer'},
    ]
  },
  {
    id: 2,
    content: [
      {type: 'paragraph', content: 'ota task pra fazer'},
    ]
  },
];

export function App() {

  return ( 
    <div>
      <Header />
      <Post/>
      
      <main>
        {tasks.map(task => {
          return ( 
          <Task 
            content = {task.content}
          />
          )
        })}
      </main>

      <div className={styles.wrapper}>

      </div>  
    </div>
      
  )
}

