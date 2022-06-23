import styled, { createGlobalStyle } from "styled-components";
import * as pallete from "./variables";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    
    font-size: 14px;
    font-family: "AmazonEmber_W_He", sans-serif;

    body {
      background-color: ${pallete.darkGrey};
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

  .loader {
  position: absolute;
  top: calc(50% - 4em);
  left: calc(50% - 4em);
  width: 6em;
  height: 6em;
  border: 1.1em solid rgba(0, 0, 0, 0.2);
  border-left: 1.1em solid #000000;
  border-radius: 50%;
  animation: load8 1.1s infinite linear;
  transition: opacity 0.3s;
}

.loader--hide {
  opacity: 0;
}

@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

  `;
