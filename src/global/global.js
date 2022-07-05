import styled, { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import * as pallete from "./variables";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    
    font-size: 14px;
    font-family: "AmazonEmber_W_He", sans-serif;

    body {
      background-color: ${pallete.primaryClrGray};
      color: ${pallete.primaryClrWhite};
      /*min-height:100vh ;*/
    }

    img {
      display:block;
      width:100%;
    }


    small {
      font-size:12px ;
    }
    h1 {
      font-size:24px;
    }

    
    h2 {
      font-size:22px;
    }

    
    h3 {
      font-size:18px;
    }

    h4 {
      font-size:14px;
    }

    
  }

  .loading {
    position: absolute;
    top: calc(50% - 8em);
    left: calc(50% - 7em);
    width: 15rem;
    height: 15rem;


  }



 .loading--hide {
  position: absolute;
  top: calc(50% - 8em);
  left: calc(50% - 7em);
  width: 15rem;
  height: 15rem;
  display:none;
}



  `;
