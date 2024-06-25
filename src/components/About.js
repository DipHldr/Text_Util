import React, {useState} from 'react'

export default function About(){
    const [myStyle,setMyStyle]=useState({
        color:'white',
        backgroundColor:'black'
    });

    const [btnContent,setBtnContent]=useState("Enable light mode")

const revert=()=>{
    if(myStyle.backgroundColor==='white'){
        setMyStyle({
            color:'white',
            backgroundColor:'black',
            border:'1px solid white'
            
        });
        setBtnContent("Enable light mode")
    }else{
        setMyStyle({
            color:'black',
            backgroundColor:'white'
        });
        setBtnContent("Enable Dark mode")
    }
}
    
    return(
    <div className="container" style={myStyle}>
        <h1 className="my-2">About Us</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" style={myStyle} className="accordion-collapse collapse">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="panelsStayOpen-collapseThree"  className="accordion-collapse collapse">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>

        <div className="container my-3">
        <button type="button" className="btn btn-primary" onClick={revert} >{btnContent}</button>
        </div>
    </div>
    );
}