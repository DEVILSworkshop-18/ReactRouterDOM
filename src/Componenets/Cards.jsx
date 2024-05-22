import React from "react";
const Cards = ({ element, index }) => {
  return (
    // <div
    //   key={element.id}
    //   style={{ display: "inline-block", width: "18rem", height: "395px" }}>
    //   <div classNameName="card m-3 ">
    //     <div classNameName="card h-100">
    //     <img
    //       src={element.image}
    //       classNameName="card-img-top"
    //       style={{ width: "16rem", height: "200px" , maxWidth:"16rem"}}
    //     />
    //     </div>
    //     <div classNameName="card-body">
    //       <h5 classNameName="card-title" style={{ wordWrap: "break-word" }}>
    //         {element.title}
    //       </h5>
    //       <p classNameName="card-text">{element.author}</p>
    //     </div>
    //     <div classNameName="card-body">
    //       <p classNameName="card-text">{element.date}</p>
    //     </div>
    //   </div>
    // </div>

   
  //   <div className="card-group" >
  //    <div key={element.id}>
  // <div className="card" style={{width:"18rem" , height:"375px"}}>
  
  //   <img className="card-img-top" src={element.image} alt="Card image cap" style={{height:"200px"}} />
  //   <div className="card-body" >
  //     <h5 className="card-title">{element.title}</h5>
  //     <p className="card-text">{element.author}</p>
  //     <p className="card-text"><small className="text-muted">{element.date}</small></p>
  //   </div>
  // </div>
  // </div>
  // </div>

  <>
  <div className="col-lg-3 col-sm-6  mt-4" style={{display:"inline-block"}}>
    <div
      className="card shadow-lg "
      style={{ width: "18rem", height: "375px" }}
    >
      <img
        src={element.image}
        style={{ height: "200px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{element.title}</h5>
        <p className="card-text"> By: {element.author}</p>
        <p className="card-text">{element.date}</p>
      </div>
    </div>
  </div>
</>
  );
};

export default Cards;
