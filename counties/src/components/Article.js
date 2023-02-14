import Weather from './Weather'

const Article = ({info, generals, showId}) => {
  return (
    <article>
        <h2>{info.name.common}</h2>
        <div>Capital {info.capital[0]}</div>
        <div>area {info.area}</div>
        <p className="boild">languages:</p>
        <ul>
          {Object.values(info.languages)
            .map(
              language => <li key={language}>{language}</li>
            )
          }
        </ul>
        <img src={info.flags.png} alt={info.flags.alt} />
        <Weather 
          info={info}
          generals={generals}
          showId={showId}
        />
    </article>
  )
}

export default Article;