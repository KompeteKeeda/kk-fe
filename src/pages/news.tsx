import { Footer } from "../components/footer"
import { Header } from "../components/header"
import coverImage from "../assets/pubg.jpeg"
import "../styles/news.scss"

export const News = () => {
  console.log('here')


  return (
    <div>
      <h1>
        Practicing Disciplines Today That Will Lead to Success Tomorrow.
      </h1>
      <img style={{ background: "white", color: "black" }} src={coverImage} alt="news cover"></img>
      <h5 >
        veryone wants to be thin, but no one wants to diet. Everybody wants money, but not many people want to work long hours or to follow a budget. Lots of people would like a nice yard or garden, but few want to pull weeds.

        The common denominator of success is discipline—forming the habit of doing things that the vast majority of people neglect to do. Individuals don’t accidentally stumble upon greatness. Even those who suddenly gain fame have usually worked hard all of their lives to become an “overnight success.” What we do on some great occasion depends on who we already are; and who we are is the result of previous years of discipline.

        It’s fine to praise the quality of discipline, but the real question is where practice to discipline on a daily basis. It’s especially critical for leaders to be disciplined in the following areas:
        1) Thinking

        Make a point to discipline yourself to think about your values and priorities every day. Values provide you with direction, guiding your decision-making. Meanwhile, priorities give you focus, directing how you spend your time.

        Poor thinkers are slaves to their surroundings. On the other hand, leaders make a habit of examining their world and contemplating ways to make it better. Their ideas and insights make them valuable and sought-after teammates.

        2) Relationships

        Make the decision to cultivate relationships and invest in them daily. You’ll enjoy life more when you share it with others, and you’ll go the farthest in life when you partner with people who genuinely care about you.

        3) Talent

        Daily choose to strengthen and sharpen your natural abilities, for they can open avenues to unique areas of influence. People don’t pay attention to what’s average, but they will pay both respect and rewards to individuals with exceptional skills.

        4) Finances

        Make sacrifices and live within your means today so that you can have financial options tomorrow. Avoid debt. While money may not make you happy, owing money is certain to make you miserable. Moreover, give generously. The purpose of wealth isn’t to spoil yourself but to serve those in need.

        5) Health

        Make the decision to know and follow healthy guidelines daily. Eat in moderation, and exercise regularly. Also, strike a balance between accomplishment and rest. Leaders have ambition, at times too much, and they can run themselves ragged trying to chase down career goals. As John Wanamaker said, “People who cannot find time for recreation are obligated sooner or later to find time for illness.” Be sure to handle stress effectively so that the pressures of leading don’t wear down your body. Taking proper care of yourself gives you the physical strength and mental wellbeing to tackle the demands of leadership.

        Summary

        If you commit to a set of daily disciplines, eventually you’ll reach a point in life at which you’re absolutely astounded by all the good you have been able to accomplish. In that moment, it will be crystal clear that you didn’t do it in a day but that you did it every day. By doing the right things daily, year after year, one day you will receive reward and recognition for them.
      </h5>
      {/* <div style={{ width: "800px", color: "black" }}>
        <div className="subscribe-letter">
          <div className="subscription-letter-title">
            Subscribe to our news letter
          </div>
        </div>
      </div> */}
      <div className="jumbotron">
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  {/* <hr className="my-4"> */}
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
    </div>
  )
}