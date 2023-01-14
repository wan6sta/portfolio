import cls from './BlockForm.module.scss'
import { Form, Formik } from 'formik'
import { MessageSchema } from './MessageSchema'
import { Slide } from 'react-awesome-reveal'
import React, { useState } from 'react'
import { TextField } from 'shared/ui/TextField/Textfield'
import { Button } from 'shared/ui/Button/Button'
import { contactApi, MessageModel } from '../../api/contactApi'
import { PacmanLoader } from 'react-spinners'
import toast from 'react-hot-toast'

export const BlockForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const sendOnEmail = async (values: MessageModel) => {
    try {
      setIsLoading(true)
      await contactApi.sendOnEmail(values)
      setIsLoading(false)
      toast.success('Message sent')
    } catch (e) {
      setIsLoading(false)
      toast.error('Some error occurred')
    }
  }

  return (
    <Slide
      className={cls.formWrapper}
      duration={500}
      direction={'up'}
      triggerOnce
    >
      <Formik
        initialValues={{
          name: '',
          text: '',
          gmail: ''
        }}
        validationSchema={MessageSchema}
        onSubmit={async (values, formikHelpers) => {
          formikHelpers.resetForm()
          await sendOnEmail(values)
        }}
      >
        {({ errors, touched }) => (
          <Form className={cls.Form}>
            <div className={cls.inputs}>
              <TextField
                name='name'
                placeholder='Name'
                error={errors.name}
                touched={touched.name}
              />
              <TextField
                name='gmail'
                placeholder='Email'
                error={errors.gmail}
                touched={touched.gmail}
              />
            </div>
            <TextField
              name='text'
              placeholder='Enter your message'
              error={errors.text}
              touched={touched.text}
              isTextarea
            />
            {isLoading ? (
              <PacmanLoader color='#2fbf71' className={cls.loader} />
            ) : null}
            <Button disabled={isLoading}>Send Message</Button>
          </Form>
        )}
      </Formik>
    </Slide>
  )
}
