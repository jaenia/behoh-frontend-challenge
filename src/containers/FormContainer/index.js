import React, {useState, useEffect} from 'react'
import './index.css'
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import Select from '../../components/Select';
import BehohService from '../../services/BehohService';
import ErrorMsg from '../../components/ErrorMessage';
import Tag from '../../components/Tag';
import line from '../../assets/svg/Line.svg'

export default function FormContainer(props) {
  // state variables
  const [options, setOptions] = useState([])
  const [fields, setFields] = useState({
    name: {value: '', isError: false},
    phone: {value: '', isError: false},
    state: {value: '', isError: false}
  })
  const [result, setResult] = useState({
    isError: false,
    formData: []
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
    setFields(
      {
        ...fields, 
        [field]: {value: e.target.value, isError: false}
      }
    )
  }

  function submitHandler(e) {
    e.preventDefault()
    // keys of empty fields
    let invalidKeys = []
    // checking invalid fields
    Object.keys(fields)
      .forEach(key => { 
        if(fields[key].value === ''){
          invalidKeys.push(key)
        }       
      })
    // guarantee imutability of state variable fields
    let newFields = {...fields}
    // set isError = true in invalid fields
    let hasError = false
    if(invalidKeys.length > 0){
      hasError = true
      invalidKeys.forEach(key => {
        newFields[key].isError = true
      })
      setFields(newFields)
    }
    setResult({isError: hasError, formData: Object.values(fields).map(item => item.value)})
  }

  return (
    <div className='form-container'>
      <div className='img-form'></div>
      <div className='title-form'>
        <img src={line} alt='Line'/>
          <h1 className='title-form'>Verifique os campos</h1>
        <img src={line} alt='Line'/>
      </div>
      
      <form onSubmit={submitHandler}>
        <div className='row'>
          <CustomInput
            placeholder='Digite seu nome completo'
            name='name'
            label='Nome Completo'
            required={true}
            type='text'
            onChange={changeHandler}
            isError={fields.name.isError}
          />
        </div>
        <div className='row two-cols-row'>
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
        </div>
        <div className='row'>
          <span className='required-fields-label'>*Campos obrigatórios</span>
        </div>
        <div className='row'>
          <Button text='Enviar requisição'/>
        </div>
      </form>
      {result.formData.length > 0
      ? (
        <div className='row output-container'>
          {result.isError 
          ? (
            <ErrorMsg msg='Verifique o campo destacado'/>       
          ) : (
            <>
              {result.formData.map(item => (<Tag text={item}/>))}
            </>
          )}      
        </div>
      )
      : ''}        
    </div>
  )
}