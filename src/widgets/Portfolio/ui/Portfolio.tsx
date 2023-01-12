import cls from './Portfolio.module.scss'
import { PageContainer } from 'shared/ui/PageContainer/PageContainer'
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
    <section className={cls.Portfolio}>
      <PageContainer>
        <div className={cls.row}></div>
        <Title bgTitle='portfolio'>My works</Title>
        <div className={cls.worksList}>
          {cards.map(card => (
            <Card {...card} />
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
