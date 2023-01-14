import { Field } from 'formik'
import React from 'react'
import cls from './TextField.module.scss'
import { MessageModel } from 'widgets/Contact/api/contactApi'
import { cn } from '../../lib/cn/cn'
import { FieldProps } from 'formik/dist/Field'

interface Props {
  name: keyof MessageModel
  error: string | undefined
  touched: boolean | undefined
  placeholder: string
  isTextarea?: boolean
}

export const TextField = (props: Props) => {
  const { error, touched, name, isTextarea, placeholder } = props

  return (
    <div className={cls.TextField}>
      {isTextarea ? (
        <Field name={name}>
          {({ field, form, meta }: FieldProps<string>) => {
            return (
              <textarea
                placeholder={placeholder}
                id={name}
                name={name}
                onBlur={field.onBlur}
                className={cn(cls.textarea, {
                  [cls.error]: Boolean(meta.error && meta.touched)
                })}
                value={field.value}
                onChange={field.onChange}
              />
            )
          }}
        </Field>
      ) : (
        <Field
          placeholder={placeholder}
          className={cn('', { [cls.error]: Boolean(error && touched) })}
          name={name}
        />
      )}
      {error && touched ? <span>{error}</span> : null}
    </div>
  )
}
