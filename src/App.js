
import { useRef } from 'react';
import img from   "./1.jpg"
import './App.css';
import html2pdf from 'html2pdf.js';
// import Parent from "./Components/HOCexample/Parent.js"
// import Parent from "./Components/React-router-V6-Example/Parent"

function App() {
const refElement = useRef();
let element = refElement.current

console.log(element);


// Check if html2pdf is defined
function Download() {
  const element = refElement.current;

  console.log("Download fun called");
  console.log("Download fun html2pdf", html2pdf);

  if (typeof html2pdf !== 'undefined' && element) {
      const options = {
          filename: 'my-document.pdf',
          margin: 1,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };

      console.log("Download fun html2pdf", html2pdf().set(options).from(element).save());
      html2pdf().set(options).from(element).save();
  }
}

// ...

{/* <button onClick={Download}>Download PDF</button> */}


  return (
    <>

    <div className="App" ref={refElement} >
    <h1> App Compo  </h1>
    <img src={img} width="200vw"  alt="local image" />
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt accusamus nemo laudantium eum tempore vero delectus voluptas sit suscipit vitae?</p>
    </div>
   <button onClick={Download}>Download PDF</button>
    </>

  );
}

export default App;
