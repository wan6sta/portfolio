import cls from './Contact.module.scss'
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper'
import { Title } from 'shared/ui/Title/Title'
import { Links } from './Links/Links'
import { SectionsId } from '../../Header'
import { BlockForm } from './BlockForm/BlockForm'

export const Contact = () => {
  return (
    <PageWrapper id={SectionsId.contact} className={cls.Contact}>
      <Title bgTitle='Contacts'>Contacts</Title>
      <div id={SectionsId.contact} className={cls.wrapper}>
        <Links />
        <BlockForm />
      </div>
    </PageWrapper>
  )
}
