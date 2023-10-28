import React from 'react'
import { useForm } from '../hook/useForm'

export const FormPaciente = ({ onNewPost }) => {

  const { onInputChange,formState, reset, nombre, propietario, correo, alta, sintomas } = useForm({
    nombre: '',
    propietario: '',
    correo: '',
    alta: '',
    sintomas: '',
  })
  function onNewPaciente( e ){
    e.preventDefault();
    onNewPost( formState  )
    reset();
  }
  return (
      <form onSubmit={ onNewPaciente } className='Seguimiento-Form' >
        <div className='Segumiento-FormControl'>
          <label htmlFor="nombre">Nombre mascota</label>
          <input required minLength={ 1 } maxLength={ 50 } placeholder='Nombre de la mascota' onChange={ onInputChange } value={ nombre || ''} type="text" name='nombre' id='nombre' />
        </div>
        <div className='Segumiento-FormControl'>
          <label htmlFor="propietario">Nombre propietario</label>
          <input required minLength={ 1 } maxLength={ 50 } placeholder='Nombre del propietario' onChange={ onInputChange } value={ propietario || ''} type="text" name='propietario' id='propietario' />
        </div>
        <div className='Segumiento-FormControl'>
          <label htmlFor="correo">Email</label>
          <input required  placeholder='Email Contacto Propietario' onChange={ onInputChange } value={ correo || ''} type="email" name='correo' id='correo' />
        </div>
        <div className='Segumiento-FormControl'>
          <label htmlFor="alta">Alta</label>
          <input required   onChange={ onInputChange } value={ alta || ''} type="date" name='alta' id='alta' />
        </div>
        <div className='Segumiento-FormControl'>
          <label htmlFor="sintomas">Síntomas</label>
          <textarea required minLength={ 1 } maxLength={ 50 } placeholder='Describe los Síntomas' onChange={ onInputChange } value={ sintomas || ''} name="sintomas" id="sintomas" cols="58" rows="5">
          </textarea>
        </div>
        <div className='Seguimiento-Button'>
          <button  type='submit'>Enviar</button>
        </div>
      </form>
  )
}
