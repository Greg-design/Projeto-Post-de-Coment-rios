import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean
}

export function Avatar({hasBorder = true, ...props}: AvatarProps){

    //const hasBorder = props.hasBorder !== false  //isso siginifica se a propriedade nem for enviada, ela também é diferente de false.

    return(
       <img 
         className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
         {...props}
        />
    )
}

