import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media(max-width: 1080px) {
  html {
    font-size: 93.75%; /* 15px */
  }
}

@media(max-width: 970px) {
  html {
    font-size: 87.5%; /* 14px */
  }
}

@media(max-width:700px) {
  :root {
    font-size: 75%; /* 12px */
  }
}

@media(max-width: 590px) {
  :root {
    font-size: 62.25%; /* 10px */
  }
}

body {
  
  background: ${(props) => props.theme.colors.colorBackground};
}

body,
input
button,
textarea {
  font: 500 1rem Inter;
  color: ${(props) => props.theme.colors.colorText};
  border: none;
}

a {
  text-decoration: none;
}


.container {
  width: min(1440px, 90vw);
  margin: 0 auto;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.separator {
  height: 1px;
  background-color: ${(props) => props.theme.colors.colorHairLineinDark};
  margin: 1rem 0;
}

.separator.light {
  background-color: #E1E3E5;
}

.flex {
  display: flex;
}

`
