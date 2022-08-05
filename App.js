//import './App.css';
import React from "react";
import Radium, { StyleRoot } from 'radium';
import { Stack, IStackTokens } from "@fluentui/react";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import img1 from "C:/Users/jv.velayutham/source/repos/reactprojects/knowledgeportalias/src/images/cs prelims.jpg";
import img2 from "C:/Users/jv.velayutham/source/repos/reactprojects/knowledgeportalias/src/images/all_books.jpg";
import img3 from "C:/Users/jv.velayutham/source/repos/reactprojects/knowledgeportalias/src/images/cs.jpg";
import img4 from "C:/Users/jv.velayutham/source/repos/reactprojects/knowledgeportalias/src/images/UPSC PRELIMS EXAM.png";
import { useMediaQuery } from 'react-responsive';
import Mediacomponent from './MediaPredicatecomponent';


//import second from "./Second";
//import { findByLabelText } from "@testing-library/react";
//import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
// import {  IStackItemStyles,  Stack,  MessageBar,  MessageBarType, ProgressIndicator,  IStackTokens,  Separator,
// } from "@fluentui/react";

function App() {


  ////------------------------------------------//////
//applying the useMediaQuery  functional hooks
////------------------------------------------//////
//(min-width: 1224px)
  const is1224to1824px = useMediaQuery({
    query: '(min-width: 1224px)  and (max-width: 1824px)'
  })

 // X-Small devices (portrait phones, less than 576px)   is576px || is768px  || is992px  ||  is1200px  ||  is1400px
 //@media (max-width: 575.98px) { ... }
 const is576px=useMediaQuery({
   query: '(max-width: 575.98px)'
 })

// Small devices (landscape phones, less than 768px)
//@media (max-width: 767.98px) { ... }
const is768px=useMediaQuery({
  query: '(max-width: 768px)'
})


// Medium devices (tablets, less than 992px)
//@media (max-width: 991.98px) { ... }
const is992px=useMediaQuery({
  query: '(max-width: 992px)'
})


// Large devices (desktops, less than 1200px)
//@media (max-width: 1199.98px) { ... }
const is1200px=useMediaQuery({
  query: '(max-width: 1199.98px)'
})


// X-Large devices (large desktops, less than 1400px)
//@media (max-width: 1399.98px) { ... }
const is1400px=useMediaQuery({
  query: '(max-width: 1399.98px)'
})

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })

  // const is1224to1824px = useMediaQuery({
  //   query: '(min-width: 1224px)  and (max-width: 1824px)'
  // })

  // const is1224to1824px = useMediaQuery({
  //   query: '(min-width: 1224px)  and (max-width: 1824px)'
  // })


  const h1style={
    color: "red",
  }

  const styleObj = {
    fontSize: 30,
    color: "red",
    textAlign: "top",
    paddingTop: "5px",
    display: "flex",

    // '@media (max-width: 500px)': {
    // fontSize: 30,
    // color: "yellow",
    // textAlign: "top",
    // paddingTop: "5px",
    // display: "flex",
    // },
    // '@media (min-width: 1000px)': {
    //   fontSize: 10,
    //   color: "blue",
    //   textAlign: "bottom",
    //   paddingTop: "5px",
    //   display: "flex",
    //   }
  };



////------------------------------------------//////
///APPLYING MEDIA QUERY WITH THE RADIUM package (Radium is used for inline styling in React application here)//////
////------------------------------------------//////

  const headerObj = {
    '@media (min-width: 300px) and (max-width: 500px)': {
      fontSize: 30,
      color: "blue",
      bgcolor: "yellow",
    },

    '@media (min-width: 501px) and (max-width: 1000px)': {
      fontSize: 30,
      color: "green",
      bgcolor: "yellow",
    },
    fontSize: 30,
    color: "red",
    bgcolor: "yellow",
  };


  const header2 = {

    '@media (min-width: 300px) and (max-width: 500px)': {
      fontSize: 15,
      color: "blue",
    },

      '@media (min-width: 501px) and (max-width: 1000px)': {
        fontSize: 15,
        color: "green",
      },

    fontSize: 15,
    color: "red",
  };


  const stackTokens: IStackTokens = {
    childrenGap: 30,
  };

  const stackHorizontal = {
    fontSize: 15,
    color: "red",
    '@media (min-width: 300px) and (max-width: 500px)': {
      fontSize: 30,
      color: "blue",
    },

      '@media (min-width: 501px) and (max-width: 1000px)': {
        fontSize: 50,
        color: "green",
      },
   

  }


  //marquee atribute ->  behavior - scroll, alternate, slide,
  //marquee attribute -> direction -  up, down, left, right
  //marquee atribute -> bgcolor
  //marquee atribute ->  width
  //marquee atribute ->  scrollamount
  //marquee atribute ->  scrolldelay
  //marquee atribute ->  loop
  return (
    
    <div>
       <StyleRoot>
      <h1 style={headerObj} align="center">KNOWLEDGE PORTAL IAS</h1>
      </StyleRoot>
      <h2 align="right" style={header2}>
        <i>
          <b>
            <marquee
              // bgcolor="orange"
              // height="30px"
              // width="1250px"
              // behavior="alternate"
              // direction="right"
              // scrollamount="15"
            >
              UPSC PORTAL - PRELIMS FOCUSSED
            </marquee>
          </b>
        </i>
      </h2>


      <h6 align="right" style={header2}>
        <i>
          <marquee
            behavior="alternate"
            bgcolor="orange"
            height="200px"
            width="1500px"
            direction="right" >
            <img src={img1} width="200px" height="200px" />
            <img src={img2} width="200px" height="200px" />
            <img src={img3} width="200px" height="200px" />
            <img src={img4} width="200px" height="200px" />
          </marquee>
        </i>
      </h6>

      {/* Using the Media Queries inside the return() function   (is576px) || (is768px)  || (is992px)  ||  (is1200px)  ||  (is1400px) &&  */}
      { (is1224to1824px) && <h1 style={h1style}>Testing Media Queries 1224px  to 1824px  </h1>}

      {/* <div style={styleObj}>
        <div align="center"> 
         */}
       {(is1224to1824px) &&    
         <Stack horizontal tokens={stackTokens} style={styleObj}>
            <DefaultButton text="Home" onClick={_alertClicked} />
            <PrimaryButton text="Current Affairs" onClick={_alertClicked} />
            <PrimaryButton text="PRELIMS PREPARATION" onClick={_alertClicked} />
            <PrimaryButton
              text="Previous Year Question Papers"
              onClick={_alertClicked}
            />
            <PrimaryButton text="Download" onClick={_alertClicked} />
            <PrimaryButton
              text="JOIN OUR TELEGRAM COMMUNITY"
              onClick={_alertClicked}
            />
            <PrimaryButton
              text="FOLLOW US ON YOUTUBE"
              onClick={_alertClicked}
            />
            <PrimaryButton text="About Us" onClick={_alertClicked} />
          </Stack>
          }

        {(is576px) &&    
         <Stack horizontal tokens={stackTokens} style={styleObj}>
            <DefaultButton text="Home" onClick={_alertClicked} />
            <PrimaryButton text="Current Affairs" onClick={_alertClicked} />
            <PrimaryButton text="PRELIMS PREPARATION" onClick={_alertClicked} />
            <PrimaryButton
              text="Previous Year Question Papers"
              onClick={_alertClicked}
            />
            <PrimaryButton text="Download" onClick={_alertClicked} />
            <PrimaryButton
              text="JOIN OUR TELEGRAM COMMUNITY"
              onClick={_alertClicked}
            />
            <PrimaryButton
              text="FOLLOW US ON YOUTUBE"
              onClick={_alertClicked}
            />
            <PrimaryButton text="About Us" onClick={_alertClicked} />
          </Stack>
          }
     

     {(is768px) &&    
         <Stack horizontal tokens={stackTokens} style={styleObj}>
            <DefaultButton text="Home" onClick={_alertClicked} />
            <PrimaryButton text="Current Affairs" onClick={_alertClicked} />
            <PrimaryButton text="PRELIMS PREPARATION" onClick={_alertClicked} />
            <PrimaryButton
              text="Previous Year Question Papers"
              onClick={_alertClicked}
            />
            <PrimaryButton text="Download" onClick={_alertClicked} />
            <PrimaryButton
              text="JOIN OUR TELEGRAM COMMUNITY"
              onClick={_alertClicked}
            />
            <PrimaryButton
              text="FOLLOW US ON YOUTUBE"
              onClick={_alertClicked}
            />
            <PrimaryButton text="About Us" onClick={_alertClicked} />
          </Stack>
          }
      {/*}
         </div>
      </div>\ */}



      <div align="center" style={styleObj}>
        <Stack vertical tokens={stackTokens}>
          <DefaultButton text="Home" onClick={_alertClicked} />
          <PrimaryButton text="Current Affairs" onClick={_alertClicked} />
          <PrimaryButton text="PRELIMS PREPARATION" onClick={_alertClicked} />
          <PrimaryButton
            text="Previous Year Question Papers"
            onClick={_alertClicked}
          />
          <PrimaryButton text="Download" onClick={_alertClicked} />
          <PrimaryButton
            text="JOIN OUR TELEGRAM COMMUNITY"
            onClick={_alertClicked}
          />
          <PrimaryButton
            text="FOLLOW OUR YOUTUBE GUIDANCE"
            onClick={_alertClicked}
          />
          <PrimaryButton text="About Us" onClick={_alertClicked} />
        </Stack>
      </div>

      <Stack style={stackHorizontal}>MEDIA QUERY TESTING WITH STACK AND HOOKs</Stack>

      <Mediacomponent/>
    </div>
    
  
  
  
    );
  
}

function _alertClicked() {
  alert("Button Clicked");
}

export default App;
