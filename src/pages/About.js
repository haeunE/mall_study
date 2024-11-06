import { Outlet } from "react-router-dom";

function About(){
  return(
    <>
      <button>회사 소개</button>
      <button>연혁</button>
      <button>오시는 길</button>
      {/* 자식컴포넌트(하위페이지) 가 들어가는 자리 */}
      <Outlet></Outlet>
    </>
  )
}
export default About;