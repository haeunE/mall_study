import Card from '../components/Card';
import aa from '../aa.jpg'

function Main({fruit,fruitCount,setFruitCount}){
 const visibleFruit = fruit.slice(0,fruitCount)
  return(
    <>
      <div className='main-bg' style={{backgroundImage:'url('+aa+')'}}></div>

      <div className='container mt-3'>
        <div className='row'>
          {visibleFruit.map((data,i) =>{
            return(
              <Card fruit={data} key={i} />
            )
          })}
        </div>
      </div>
      {
        fruitCount>fruit.length ?
        <div className='alert alert-danger'>
          더이상 가져올 상품이 없습니다.
        </div>
        :
        <button onClick={()=>{
          setFruitCount(fruitCount+3)
        }}>더보기</button>
      }
    </>
    

  )
}
export default Main;