import { ThumbsUp } from 'phosphor-react';
import { Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface commentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }:commentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {

        onDeleteComment(content) 
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }
    
    return (
        <div className={styles.Comment}>
            <Avatar 
                hasBorder={false} 
                src="https://github.com/ignickta.png" 
                alt="" 
            />

        <div className= {styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Igor Almeida</strong>
                        <time title='11 de fevereiro às 11:30' dateTime='2023-02-01 11:30:00'>Cerca de 1h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>

                <p>{content}</p>
            </div>

            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp size={20} />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>

        </div>
    )
}