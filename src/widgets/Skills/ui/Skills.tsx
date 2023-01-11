import cls from './Skills.module.scss'
import { PageContainer } from 'shared/ui/Container/PageContainer'
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

const skills: SkillProps[] = [
  { title: 'React', url: React },
  { title: 'TypeScript', url: TS },
  { title: 'SASS', url: Sass },
  { title: 'Redux', url: Redux },
  { title: 'JEST', url: JEST },
  { title: 'JavaScript', url: JS },
  { title: 'REST API', url: REST },
  { title: 'RTK QUERY', url: rtkQ },
  { title: 'Styled components', url: Styled },
  { title: 'React hook form', url: RHF }
]

export const Skills = () => {
  return (
    <section className={cls.Skills}>
      <PageContainer>
        <div className={cls.row}>
          <div className={cls.title}>
            <h1>My skills</h1>
            <span className={cls.bgTitle}>SKILLS</span>
          </div>
          <div className={cls.skills}>
            {skills.map(({ url, title }) => (
              <Skill url={url} title={title} key={title} />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
