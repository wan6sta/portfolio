import cls from './Portfolio.module.scss'
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper'
import { Title } from 'shared/ui/Title/Title'
import { Card, CardProps } from './Card/Card'
import cardsImg from 'shared/assets/icons/bgCards.png'

const cards: CardProps[] = [
  {
    title: 'Learning by cards',
    description:
      'Applications for learning by cards. Stack: React, Redux, TypeScript, Styled-components, Redux-toolkit, Redux Thunk, Axios, React Router DOM v6, REST API, Formik + Yup',
    cardImg: cardsImg
  },
  {
    title: 'Learning by cards',
    description:
      'Applications for learning by cards. Stack: React, Redux, TypeScript, Styled-components, Redux-toolkit, Redux Thunk, Axios, React Router DOM v6, REST API, Formik + Yup',
    cardImg: cardsImg
  }
]

export const Portfolio = () => {
  return (
    <PageWrapper className={cls.Portfolio}>
      <Title bgTitle='portfolio'>My works</Title>
      <div className={cls.worksList}>
        {cards.map(card => (
          <Card {...card} />
        ))}
      </div>
    </PageWrapper>
  )
}
