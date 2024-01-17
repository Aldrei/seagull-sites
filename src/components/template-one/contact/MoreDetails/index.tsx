import React, { useEffect, useState } from 'react'
import { InputOne } from '../../../template-one'
import { Container } from './styles'
import { IFormErrors, IFormValues, IMoreDetailsCommon } from './types'

import { TextareaOne } from '@/components/template-one'
import { sendMessageLocal } from '@/services'
import { ButtonOne } from '@components/template-one'

export const MoreDetailsOne: React.FC<
  IMoreDetailsCommon
> = ({
  property
}): React.ReactElement => {
  const [formValues, setFormValues] = useState<IFormValues>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState<IFormErrors>()
  const [loading, setLoading] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    setFormValues({
      ...formValues,
      subject: `Imóvel ${property.codePretty}`,
      message: `Olá, gostaria de mais infos sobre o imóvel ${property.codePretty}`
    })
  }, [])

  const handleSubmit = async () => {
    setLoading(true)

    if (
      !formValues?.name || 
      !formValues?.email || 
      !formValues?.subject || 
      !formValues?.message) return false

    const response = await sendMessageLocal(formValues)
    setLoading(false)

    if (response?.message?.errors) {
      const errors = response.message.errors
      
      setFormErrors({
        name: (errors.name),
        email: (errors.email),
        phone: (errors.phone),
        subject: (errors.subject),
        message: (errors.message)
      })
    }
  }

  const handleOnChange = (event: any) => {
    const flag = event.target.name as keyof IFormValues

    setFormValues({
      ...formValues,
      [flag]: String(event.target.value)
    } as IFormValues)
  }

  const hasError = (flag: keyof IFormErrors): boolean => {
    if (formErrors && formErrors[flag]) return true
    return false
  }

  return (
    <Container>
      <InputOne disabled={loading} className={hasError('name') ? 'error' : ''} name='name' onChange={handleOnChange} placeholder='Seu nome...' value={formValues?.name} />
      <InputOne disabled={loading} className={hasError('email') ? 'error' : ''} name='email' onChange={handleOnChange} placeholder='Seu email...' value={formValues?.email} />
      <InputOne disabled={loading} className={hasError('phone') ? 'error' : ''} name='phone' onChange={handleOnChange} placeholder='Seu telefone...' value={formValues?.phone} />
      <InputOne disabled={loading} className={hasError('subject') ? 'error' : ''} name='subject' onChange={handleOnChange} placeholder='Assunto...' value={formValues?.subject} />
      <TextareaOne disabled={loading} className={hasError('message') ? 'error' : ''} name='message' onChange={handleOnChange} placeholder='Mensagem...' value={formValues?.message} />

      <ButtonOne text="Enviar" onClick={handleSubmit} />
    </Container>
  )
}
