import React from "react";
/**
 *  กรณีรูปไม่ขึ้น ต้องรอ ใช้ npm run deploy ก่อนแล้วรอให้ 
 *  GitHub ตรวจสอบให้เรียบร้อย รูปถึงจะแสดง
 * 
 */

// ต้องใช้ url นำหน้าที่อยู่รูปเพื่อให้รูปแสดงผล
let url = 'https://Niruthub.github.io/react-profile-nirut'

export function Header(){
  let img = '/logo/1082811.jpg'
  return(
  <>
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid ">
        <a className="navbar-brand text-center" href="#">
          <img src={url + img} alt="" width="30" height="24" className="d-inline-block" />
          &nbsp;
          Profile
        </a>
      </div>
    </nav>
</>
  )
}


export function Footer(){
  return(
    <>
    <div className="container-fluid bg-dark " style={{height:'150px'}}>
      &copy;{new Date().getFullYear()} All rights reserved
      
    </div>
    </>
    )
}
export function ContentImage() {
  const styleImage = {
    width: '400px',
    height: '400px',
    position: 'absolute',
    backgroundSize: 'contain',
    padding: '10px',
    top: '0',
    right: '0',
  };

  return (
    <div className="container position-relative " >
      
      <img style={styleImage} src={url + '/img/top.jpg'} alt="" />
      
    </div>
  );
}

export function Content(){
  return(
      <div className="container text-start" style={{marginTop:'50px',paddingRight:'200px'}}>
        <div className="row">
          <img src={url + '/img/Nirut.png'} className="rounded "style={{width: '64px', height: '64px'}} alt="NirutInage" />
          Nirut Kunwong<br/>
          (นิรุท คุณวงค์)
          </div>
          <div className="row my-3 ">
            <div className="card text-center opacity-75 mx-2" style={{width:'auto'}}>
              รุท
            </div>
            <div className="card text-center opacity-75 mx-2" style={{width:'auto'}}>
              ป.ตรี
            </div>
            <div className="card text-center opacity-75 mx-2" style={{width:'auto'}}>
              22 ปี
            </div>
            <div className="card text-center opacity-75 mx-2" style={{width:'auto'}}>
              คอมพิวเตอร์
            </div>
          </div>
        
        
         เรื่องราวของเด็กหนุ่มที่มีความฝัน ภรรยา ๕ คน และเป็นโปรแกรมเมอร์
มีเงินเลี้ยงชีพ ใช้ชีวิตอย่างสงบสุข (หยอกๆ)
      </div>
  )
}

export function Content2(){
  return(
      <div className="container my-5 card opacity-50" >
          <br/><br/><br/>
          <h2>Content2</h2>
          <br/><br/><br/>
      </div>
  )
}