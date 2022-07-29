import { Header } from './components/Header'
import { Post } from './components/Post'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import './global.css'

// author: { avatar_url: "", name: "", role:"" }
// publishedAt: Date
// content: string

// esse posts é como se fosse um banquinho de dados.
const posts = [
  {
    id:1,
    author: {
      avatarUrl: "https://github.com/greg-design.png",
      name: "Gregory Ruan",
      role: "Aluno @Rocketseat"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento incrível. O Nome do projeo é DoctorCare 🚀'},
      {type: 'link', content: '👉 Jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-07-28 10:52:00'),
  },

   {
    id:2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento incrível. O Nome do projeo é DoctorCare 🚀'},
      {type: 'link', content: '👉 Jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-07-27 10:52:00'),
  },
]

export function App() {
  return (
  <div>
    <Header />
    
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      {posts.map(post => {
        return (
        <Post
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
        />
        )
      })}
      </main>
    </div>
  </div>
  )
}

