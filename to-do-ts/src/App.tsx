import { Post } from './components/Post';
import { Header } from './components/Header';

import styles from './App.module.css';
import './global.css';


export function App() {

  return (
    <div>
      <Header />
      <Post />
      <div className={styles.wrapper}>
        
      </div>  
    </div>
      
  )
}

