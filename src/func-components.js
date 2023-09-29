import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

export function Header(){
  let img = 'logo/1082811.jpg'
  return(
  <>
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          <img src={img} alt="" width="30" height="24" className="d-inline-block align-text-top" />
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
    width: '200px',
    height: '200px',
    position: 'absolute',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    padding: '10px',
    top: '0',
    right: '0',
  };

  return (
    <div className="container position-relative opacity-75" >
      <div style={styleImage}></div>
    </div>
  );
}

export function Content(){
  return(
      <div className="container text-start" style={{marginTop:'50px',paddingRight:'200px'}}>
        <div className="row">
          <img src={'/logo/1082811.jpg'}className="rounded float-start" alt="" />
          <div className="row">Nirut Kunwong</div>
          <div className="row">(นิรุท คุณวงค์)</div>
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