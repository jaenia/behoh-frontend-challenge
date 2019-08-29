import React, {useState, useEffect} from 'react'
import './index.css'
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import Select from '../../components/Select';
import BehohService from '../../services/BehohService';

export default function FormContainer(props) {
  const [options, setOptions] = useState([])
  const [fields, setFields] = useState({
    name: {value: null, isError: false},
    phone: {value: null, isError: false},
    state: {value: null, isError: false}
  })

  useEffect(() => {
    async function loadOptions() {
      const data = await BehohService.getStates()
      setOptions(data)
    }
    loadOptions()
  }, [])

  function changeHandler(e) {
    let field = e.target.name
    setFields({...fields, [field]: {value: e.target.value, isError: false}})
  }

  return (
    <form className='form-container'>
      <CustomInput
        placeholder='Digite seu nome completo'
        name='name'
        label='Nome Completo'
        required={true}
        type='text'
        onChange={changeHandler}
      />
      <CustomInput
        placeholder='Digite seu celular'
        name='phone'
        label='Celular'
        required={true}
        type='text'
        onChange={changeHandler}
      />
      <Select
        placeholder='Selecione o estado'
        options={options}
        onChange={changeHandler}
      />
      <Button text='Enviar requisição'/>
    </form>
  )
}