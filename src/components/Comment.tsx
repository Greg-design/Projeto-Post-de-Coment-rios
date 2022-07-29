import styles from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
    content:string
    onDeleteComment: (comment:string) => void
}

export function Comment({content, onDeleteComment}: CommentProps){
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    // aumentando o numero de likes usando o valor anterior, deve utilizar esse padrão de função.
    function handleLikeComment(){
        setLikeCount((state)=>{
            return state + 1
        })
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/maykbrito.png" alt=''/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gregory Ruan</strong>
                            <time title='27 de Julho às 10:10h' dateTime='2022-07-27 10:10:30'>Cerca de 1h atrás</time>
                        </div>

                       <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24} />
                       </button> 
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}