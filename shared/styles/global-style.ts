"use client";

import { createGlobalStyle } from "styled-components";

import color from "@/shared/styles/color";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 62.5%;
    font-weight: 400;
    letter-spacing: -0.03em;
    word-break: keep-all;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
  }

  .ant-picker-dropdown {
    * {
      font-size: medium;
    }
  }

  html, body {
    position: fixed; /* INFO: iOS scroll bounce 방지용 */
    overflow: hidden; /* INFO: iOS scroll bounce 방지용 */
    width: 100%;
    height: 100%;
    text-size-adjust: none;
    -webkit-tap-highlight-color: transparent;
  }

  label{
    background-color: transparent;
    cursor: inherit;
  }

  button {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    border-radius: 0;
    background-color: transparent;
    border: none;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    font-size: 1.6rem;

    &:focus {
      outline: 0;
      box-shadow: none !important;
    }
  }

  select {
    outline: none; 
    appearance: none;
    font-size: 1.6rem;
  }

  input {
    box-shadow: none;
    border-radius: 0;
    border: none;
    outline: none;
    appearance: none;
    background-color: transparent;
    appearance: none;
    font-family: sans-serif;
    font-size: 1.6rem;

    &:focus {
      outline: 0;
      box-shadow: none !important;
    }


  }

  textarea {
    outline: none;
    border-radius: 0;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: white;
    font-size: 1.6rem;
  }

  p {
    margin: 0;
    font-size: 1.6rem;
    -webkit-tap-highlight-color: transparent;
  }

  span {
    font-size: 1.6rem;
    -webkit-tap-highlight-color: transparent;
  }

  div {
    font-size: 1.6rem;
    -webkit-tap-highlight-color: transparent;
  }

  a {
    font-size: 1.6rem;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  hr{
    font-size: 1.6rem;
    border: none;
    height: 0;
    margin: 0;
    padding: 0;
  }

  // 핵클 팝업 스타일
  body > div.hackle-iam > div > div > div {
    display: flex;
    justify-content: center;
    margin: 0rem !important;

    > div {
      width: 80%;
      
        > img {
          cursor: pointer;
        }
        
        > div {
          display: flex !important;
          align-items: center !important;
          padding: 0px !important;
          height: 5.6rem !important;
          border-top: 1px solid ${color.gray300} !important;

          div {
            height: 100%;
            padding: 0 !important;

            button {
              height: 100%;
              padding: 0 !important;
              font-size: 16px !important;
              font-weight: 500 !important;
              border: 0 !important;
              color: ${color.gray800} !important;
            }
          }

          div:nth-child(2) {
            border-left: 1px solid ${color.gray300} !important;

            button {
              font-weight: 500 !important;
              color: ${color.orange400} !important;
            }
          }
        }
    }
  }
`;

export default GlobalStyle;
