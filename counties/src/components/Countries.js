import Article from './Article'
import Button from './Button';

const Countries = ( props ) => {
  if (props.value.length === 0) {
    return null;
  }
  const found = props.found;
  const length = props.found.length;


  if (length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    )
  } else if (length > 1) {
    let currentDisplay = -1;
    return (
      <ul>
        {found.map(
          (item, index) => {
            const common = item.name.common;
            
            if (props.impresions.includes(index)) {
              return (
                <li key={common}>
                  <Article 
                    info={found[index]}
                    generals={props.generals}
                    showId={index}
                  />
                  <Button 
                    text={'hiden'}
                    handleClick={() => {
                      props.setImpresions(props.impresions.filter(a => a !== index))
                      props.setGenerals(props.generals.filter((a, index) => {
                        return index !== currentDisplay
                      }))
                      props.setIsDelete(true);
                    }}
                  />
                </li>
              )
            }

            return (
              <li key={common}>
                {common}
                <Button 
                  text={'show'}
                  handleClick={
                    () => { 
                      props.setImpresions([...props.impresions, index])
                      props.setIsDelete(false)
                    }
                  }
                />
              </li>
            )
          }
        )}
      </ul>
    )
  } else if (length === 1) {
    const info = props.response[props.count];

    return (
      <Article info={info}/>
    )
  }
  return null;
}
export default Countries