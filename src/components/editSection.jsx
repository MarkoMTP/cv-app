import { useState } from 'react'
import '../styles/editSection.css'
import FormForEdit from './form'
function EditSection() {



   return (
    <div className='editSect'>
      <FormForEdit></FormForEdit>

      <button type='submit' className='btn btn-primary' >Submit</button>

    </div>

  )
}

export default EditSection
// {/* <FormForEdit></FormForEdit> */
