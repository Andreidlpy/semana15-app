import React from 'react'
import { ItemPaciente } from './ItemPaciente'

export const ListPacientes = ({ posts, onOldPost }) => {
  return (
    <div className='List-Pacientes'>
      {
        posts.map( ( post ) => 
        (
          <ItemPaciente key={ post.id } { ...post } onDeletePost={onOldPost} />
        ))
      }
    </div>
  )
}
