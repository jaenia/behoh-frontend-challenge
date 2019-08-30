import React, {useState, useEffect} from 'react'
import './index.css'
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import Select from '../../components/Select';
import BehohService from '../../services/BehohService';

export default function FormContainer(props) {
  const [options, setOptions] = useState([])
  const [fields, setFields] = useState({
    name: {value: '', isError: false},
    phone: {value: '', isError: false},
    state: {value: '', isError: false}
  })

  useEffect(() => {
    async function loadOptions() {
      const data = await BehohService.getStates()
      setOptions(data)
    }
    loadOptions()
  }, [])

  function changeHandler(e) {
    console.log('eaew')
    let field = e.target.name
    setFields(
      {
        ...fields, 
        [field]: {value: e.target.value, isError: false}
      }
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    let invalids = []
    Object.keys(fields)
      .forEach(key => { 
        if(fields[key].value === ''){
          invalids.push(key)
        }       
      })
      let newFields = {...fields}
      if(invalids.length > 0){
        invalids.forEach(key => {
          newFields[key].isError = true
        })
        setFields(newFields)
      }
  }

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <CustomInput
        placeholder='Digite seu nome completo'
        name='name'
        label='Nome Completo'
        required={true}
        type='text'
        onChange={changeHandler}
        isError={fields.name.isError}
      />
      <CustomInput
        placeholder='Digite seu celular'
        name='phone'
        label='Celular'
        required={true}
        type='text'
        onChange={changeHandler}
        isError={fields.phone.isError}
      />
      <Select
        placeholder='Selecione o estado'
        options={options}
        name='state'
        label='Estado'
        required={true}
        onChange={changeHandler}
        isError={fields.state.isError}
      />
      <Button text='Enviar requisição'/>
    </form>
  )
}