import * as Yup from 'yup'

export const MessageSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  text: Yup.string().min(2, 'Too Short!').required('Required'),
  gmail: Yup.string().email('Invalid email').required('Required')
})
