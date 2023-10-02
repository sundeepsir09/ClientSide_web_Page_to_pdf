
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
      margin: 1.2,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 }, // Adjust this value
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      autoTable: { autoSize: true },
    };
    
    

      console.log("Download fun html2pdf", html2pdf().set(options).from(element).save());
      html2pdf().set(options).from(element).save();
  }
}

// ...

{/* <button onClick={Download}>Download PDF</button> */}


  return (
    <>

    <div className="App" style={{margin:"15%"}}  ref={refElement} >
    <h1> App Compo  </h1>
    <img src={img} width="200vw"  alt="local image" />
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt accusamus nemo laudantium eum tempore vero delectus voluptas sit suscipit vitae?</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iste excepturi vero officiis illo suscipit. Maiores autem repellendus sit minus. Rem nisi, accusamus quo aperiam a architecto dignissimos tempora odit, vero adipisci soluta eaque odio laborum fugit fugiat quam ducimus repellendus itaque quidem, neque natus totam alias iure. Labore, quas cupiditate odio voluptates corporis vitae at repellat id praesentium laborum molestiae sit! Iusto, magnam, tempore repellendus debitis iste, totam facilis necessitatibus nesciunt sequi modi optio a ut soluta quos distinctio possimus libero! Consequuntur, dolorum id. Numquam alias esse minima assumenda magni, soluta velit architecto error placeat iste aut dignissimos veniam voluptatem est quibusdam omnis sit ad perferendis optio? Officia nulla eaque voluptatum odit, inventore doloribus, impedit vero aut possimus, excepturi pariatur? Sunt quisquam officiis ducimus molestias non! Corporis pariatur nesciunt dignissimos maiores ad dolor nam sapiente temporibus modi, consequuntur a fugiat quo voluptatum dolores eaque animi repellat error inventore. Inventore qui assumenda excepturi. Cum officia molestias ducimus ullam odio iusto tempora similique cumque quos nam minima esse ipsa ipsum, dolorem voluptate? Eaque ea quo rem? Hic nobis praesentium dolorem quos eum sint officiis qui accusamus distinctio, cumque odit sit magnam sequi facilis molestias maiores, natus perferendis dolore, cum voluptates nam ut. Quasi asperiores quaerat fugit aperiam a provident distinctio aut voluptates ab quibusdam velit soluta, itaque nemo, incidunt nesciunt doloribus praesentium eaque. Tempora ea debitis, impedit doloribus quae, temporibus ipsam voluptatem necessitatibus repellat nobis corrupti vel cupiditate earum id recusandae ad? Doloribus, sed doloremque eveniet culpa totam iure earum porro cumque in aspernatur odio provident perspiciatis, unde inventore voluptas? Quo neque cupiditate reprehenderit error repellat in accusantium voluptates sequi! Aliquam nostrum tempora eius earum. Facilis iusto quod unde cupiditate eos, expedita explicabo ab nobis consequuntur alias hic fuga dolores quasi dolorum beatae eligendi eveniet nihil ratione ea numquam nesciunt ullam.</p>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit iure quas similique obcaecati quo nam ut, ratione perferendis iusto molestias, cumque soluta libero repellat omnis, odit accusamus! Voluptates laudantium, laborum totam eum iste mollitia magni sunt repellat alias voluptatum facilis eaque accusantium rerum, at animi modi culpa explicabo? Rerum, odit. Minus quibusdam fugit, quidem, quod optio maiores nemo temporibus fuga est accusantium amet nulla provident cumque quia quos perspiciatis quisquam unde asperiores fugiat eius. Similique suscipit tenetur quam odio perferendis expedita dolor alias porro consequuntur cumque? Consequatur et sit ad sint delectus doloremque omnis totam nostrum amet soluta molestiae minima blanditiis corrupti dolorum laudantium eligendi sapiente neque, dolores, repellat nihil commodi, accusamus sequi. Similique ipsam facere natus. Ea quam assumenda vero, vitae dolor repudiandae vel blanditiis saepe perferendis ratione commodi nesciunt, atque quae ut a iusto sapiente fuga tempora! Minima et sit dolorem! Eius, labore. Obcaecati voluptatum, quod sint hic asperiores eos quibusdam voluptatem minima quo quas ipsam molestiae eveniet aspernatur temporibus excepturi consectetur natus vero harum debitis accusamus molestias. Hic odit enim et odio, totam reiciendis omnis mollitia alias. Vel quibusdam deleniti, reiciendis cum obcaecati blanditiis et. Reprehenderit alias quasi quos ut eveniet corrupti sed labore natus amet cum.</p>
    </div>
   <button onClick={Download}>Download PDF</button>
    </>

  );
}

export default App;
