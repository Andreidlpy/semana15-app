
import { useState } from 'react'
import './App.css'
import { FormPaciente } from './components/FormPaciente'
import { Header } from './components/Header'
import { ListPacientes } from './components/ListPacientes'

function App() {

  const [ posts, setPosts ] = useState([]);

  function onAddPost( post ){
    const newPost = {
      id: crypto.randomUUID(),
      ...post,
    }
    setPosts([
      newPost,
      ...posts,
    ])
  };

  function onDeletePost( id ){
    const filteredPosts = posts.filter(( post ) => post.id !== id );
    setPosts( filteredPosts )
  }

  return (
    <>
     <Header />
     <main className='Container'>
        <section className='Seguimiento'>
          <div className='Seguimiento-Heading'>
            <h2 className='Seguimiento-Title'>Seguimiento Pacientes</h2>
            <p className='Seguimiento-Subtitle'>Añade Pacientes y <span>Administrativos</span></p>
          </div>
          <FormPaciente 
            onNewPost = { onAddPost } 
          />
        </section>
        <section className='List'>
          <div className="Seguimiento-Heading">
            <h2 className='Seguimiento-Title'>Listado de Pacientes</h2>
            <p className='Seguimiento-Subtitle'>Administra tus <span>Pacientes y Citas</span></p>   
          </div>
          <ListPacientes  
            posts={ posts } 
            onOldPost={ onDeletePost } 
          />
        </section>
     </main>
    </>
  )
}

export default App
