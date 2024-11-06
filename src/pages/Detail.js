import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TabContent from "../components/TabContent";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/store";

function Detail({fruit}) {
  const {id} = useParams();
  const isFruit = fruit.find((data)=> data.id == id) // true / false
  const [num,setNum] = useState(0)
  const [num2,setNum2] = useState(0)
  const [alert,setAlert] = useState(true)
  const [tabNumber, setTabNumber] = useState(0)
  const dispatch = useDispatch()

  useEffect(()=>{
    const timer = setTimeout(() => {
        console.log("settimeeout")
        setAlert(false)
      }, 3000);
      return ()=>{
        clearTimeout(timer)
      }
  },[num2])

  if (!isFruit){
    return (
      <h1>해당상품은 없습니다.</h1>
    )
  }
  return (
    <div className="container mt-3">
      {num}
      <button onClick={()=>{
        setNum(num+1)
      }}>버튼</button>

      {num2}
      <button onClick={()=>{
        setNum2(num2+1)
      }}>버튼2</button>

      {
        alert ?
        <div className="alert alert-danger">
          지금 구매하면 90% 할인!!
        </div>
        :null
      }

      <div className="row">
        <div className="col-md-6">
          <img src={`https://raw.githubusercontent.com/Naessss/react_sample_data/main/img/${fruit[id].title}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{fruit[id].title}</h4>
          <p>{fruit[id].content}</p>
          <p>{fruit[id].price}</p>
          <button className="btn btn-danger" onClick={()=>{
            dispatch(addItem({id:id,title:fruit[id].title,count:1}))
            window.alert('장바구니 추가 완료')
          }}>주문하기</button> 
        </div>
      </div>

      <Nav className="mt-4" justify variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{
            setTabNumber(0);
          }}>상세정보</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{
            setTabNumber(1);
          }}>리뷰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{
            setTabNumber(2);
          }}>반품,교환정보</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tabNumber={tabNumber}/>
    </div>
  );
}


export default Detail;