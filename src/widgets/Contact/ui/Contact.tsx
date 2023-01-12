import cls from './Contact.module.scss'
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper'
import { Title } from 'shared/ui/Title/Title'
import { Button } from 'shared/ui/Button/Button'
import { Links } from './Links/Links'
import { Slide } from 'react-awesome-reveal'
import { SectionsId } from '../../Header'

export const Contact = () => {
  return (
    <PageWrapper id={SectionsId.contact} className={cls.Contact}>
      <Title bgTitle='Contacts'>Contacts</Title>
      <div id={SectionsId.contact} className={cls.wrapper}>
        <Links />
        <Slide duration={500} direction={'up'} triggerOnce>
          <form className={cls.form}>
            <div className={cls.inputs}>
              <input placeholder='Name' type='text' />
              <input placeholder='Email' type='email' />
            </div>
            <textarea placeholder='Your message' className={cls.textarea} />
            <Button type='button'>Send Message</Button>
          </form>
        </Slide>
      </div>
    </PageWrapper>
  )
}
