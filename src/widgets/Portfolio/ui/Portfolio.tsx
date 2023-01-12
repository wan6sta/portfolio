import cls from './Portfolio.module.scss'
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper'
import { Title } from 'shared/ui/Title/Title'
import { Card, CardProps } from './Card/Card'
import cardsImg from 'shared/assets/icons/bgCards.png'
import ulbiImg from 'shared/assets/icons/ulbiBg.png'

const cards: CardProps[] = [
  {
    title: 'Learning by cards',
    description:
      'Applications for learning by cards. Stack: React, Redux, TypeScript, Styled-components, Redux-toolkit, Vite, RTK Query, React Router DOM v6, REST API, Redux Hook Form + Yup',
    cardImg: cardsImg,
    git: 'https://github.com/wan6sta/cards-quiz',
    link: 'https://cards-quiz.vercel.app'
  },
  {
    title: 'Boosty',
    description:
      'Application similar to Habr. Stack: React, Redux, TypeScript, Webpack, Redux-toolkit, Jest, RTL, React Router DOM v6, REST API, Loki, Storybook, CI pipeline',
    cardImg: ulbiImg,
    git: 'https://github.com/wan6sta/boosty',
    link: 'https://github.com/wan6sta/boosty'
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
