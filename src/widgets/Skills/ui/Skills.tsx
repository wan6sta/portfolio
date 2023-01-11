import cls from './Skills.module.scss'
import { PageContainer } from 'shared/ui/Container/PageContainer'

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
            <div className={cls.skill}></div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
