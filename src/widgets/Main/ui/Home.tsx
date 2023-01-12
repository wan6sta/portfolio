import cls from './Main.module.scss'
import { Button } from 'shared/ui/Button/Button'
import GifIcon from 'shared/assets/icons/gif2.gif'
import { PageContainer } from 'shared/ui/PageContainer/PageContainer'

export const Home = () => {
  return (
    <section className={cls.Main}>
      <PageContainer>
        <div className={cls.row}>
          <div className={cls.text}>
            <h6>Hello, I am</h6>
            <h1>
              <span className={cls.front}>Frontend </span>
              <span className={cls.dev}>developer</span>
            </h1>
            <p>Open for your suggestions!</p>
            <a
              href='https://drive.google.com/file/d/1MLbB7KNFlR84kjmIUj8LSAgZe0TEpN5l/view?usp=sharing'
              target='_blank'
            >
              <Button>Open CV</Button>
            </a>
          </div>
          <div className={cls.img}>
            <img src={GifIcon} alt='Loading...' />
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
