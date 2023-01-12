import cls from './Skills.module.scss'
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper'
import React from 'shared/assets/icons/react.svg'
import TS from 'shared/assets/icons/typescript-icon.svg'
import Sass from 'shared/assets/icons/sass.svg'
import Redux from 'shared/assets/icons/redux.svg'
import JEST from 'shared/assets/icons/jest.svg'
import JS from 'shared/assets/icons/javascript.svg'
import REST from 'shared/assets/icons/REST.png'
import rtkQ from 'shared/assets/icons/rtkQ.svg'
import Styled from 'shared/assets/icons/file-type-styled.svg'
import RHF from 'shared/assets/icons/rhf.png'
import { Skill, SkillProps } from './Skill/Skill'
import { Title } from 'shared/ui/Title/Title'

const skills: SkillProps[] = [
  {
    title: 'React',
    url: React,
    description: ''
  },
  {
    title: 'Redux',
    url: Redux,
    description: ''
  },
  {
    title: 'JavaScript',
    url: JS,
    description: ''
  },
  {
    title: 'TypeScript',
    url: TS,
    description: ''
  },
  {
    title: 'REST API',
    url: REST,
    description: ''
  },
  {
    title: 'Styled Components',
    url: Styled,
    description: ''
  },
  {
    title: 'Sass',
    url: Sass,
    description: ''
  },
  { title: 'RTK Query', url: rtkQ, description: '' },
  {
    title: 'Jest',
    url: JEST,
    description: ''
  },
  { title: 'React Hook Form', url: RHF, description: '' }
]

export const Skills = () => {
  return (
    <PageWrapper className={cls.Skills}>
      <Title className={cls.title} bgTitle='skills'>
        My skills
      </Title>
      <div className={cls.skills}>
        {skills.map(({ url, title, description }) => (
          <Skill
            description={description}
            url={url}
            title={title}
            key={title}
          />
        ))}
      </div>
      <p className={cls.about}>
        More information you can find in my{' '}
        <a target='_blank' href='https://github.com/wan6sta'>
          github
        </a>
      </p>
    </PageWrapper>
  )
}
