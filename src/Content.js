// export default function Bio() {
//     return (
//         <div>
//       <div class="intro">
//         <h1>Welcome to my website!</h1>
//       </div>
//       <p class="summary">
//         You can find my thoughts here.
//         <br/><br/>
//         <b>And <i>pictures</i></b> of scientists!
//       </p>
//       </div>
//     );
//   }
  
// const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
//   };
  
//   export default function TodoList() {
//     return (
//       <div style={person.theme}>
//         <h1>{person.name}'s Todos</h1>
//         <img
//           className="avatar"
//           src="https://i.imgur.com/7vQD0fPs.jpg"
//           alt="Gregorio Y. Zara"
//         />
//         <ul>
//           <li>Improve the videophone</li>
//           <li>Prepare aeronautics lectures</li>
//           <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//       </div>
//     );
//   }

// const person = {
//     name: 'Gregorio Y. Zara',
//     imgUrl: 'https://i.imgur.com/7vQD0fPs.jpg',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
//   };
  
//   export default function TodoList() {
//     return (
//       <div style={person.theme}>
//         <h1>{person.name}'s Todos</h1>
//         <img
//           className="avatar"
//           src={person.imgUrl}
//           alt="Gregorio Y. Zara"
//         />
//         <ul>
//           <li>Improve the videophone</li>
//           <li>Prepare aeronautics lectures</li>
//           <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//       </div>
//     );
//   }
  

// const baseUrl = 'https://i.imgur.com/';
// const person = {
//   name: 'Gregorio Y. Zara',
//   imageId: '7vQD0fP',
//   imageSize: 'b',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src={baseUrl+person.imageId+person.imageSize+'.jpg'}
//         alt={person.name}
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

import { Fragment, useState } from 'react';
import { people, recipes, sculptureList } from './data.js';
import Button from './Button.js'
export default function Gallery() {
  // let index = 0;
  const [index, setIndex] = useState(0);
  const [counter, setCounter] = useState(0);

  function handleClick(str) {
    if(str === '+') {
      setCounter(counter+1);
    } else {
      if (counter >0) {
        setCounter(counter-1);
      }
    }
  }
  const [isShow, setShow] = useState(true);
  const [text, setText] = useState('Hellow Sonal!');
  const [count, setCount] = useState(0);
 
    const handleChange = (event) => {
    setText(event.target.value)
  }
  const handleChange1 = () => {
    setShow(!isShow);
  }
  const greeting = {
    title: 'React',
    description: 'Your component library for ...',
  };

  const spreadOp = {
    firstName: 'Sonal',
    lastName: 'Afre',
  };
  let sculpture = sculptureList[index];
  return (
    <div style={{padding: 20}}>
    {/* <h1 style={{color: 'red'}}>{props.text}</h1> */}
    <div>
      <Headline title={`Welcome ${text.title}`} />
      <Description paragraph={text.description} />
    </div>
    <button onClick={()=>handleClick('-')}>-</button> <h2>{counter}</h2><button onClick={()=>handleClick('+')}>+</button>

      <button onClick={()=>setIndex(index+1)}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>

      <h3>Scientists By Types</h3><br/>
      <b>Chemist</b><br/>
<Scientists></Scientists>
<RecipeList></RecipeList>
<Poem></Poem>
  <Button label="Toggle" onClick={handleChange1}></Button>

   <input value={text} type="text" onChange={handleChange}/>
   <button onClick={()=>setShow(!isShow)}>Click Me!</button>
 <SpreadOperator {...spreadOp}></SpreadOperator>
 <ChildProp onClick={()=> setCount(count+1)}>{count}</ChildProp>
    </div>
  );
}

const Headline = ({ title }) => <h1>{title}</h1>;
const Description = ({ paragraph }) => <p>{paragraph}</p>;

const Scientists = () => {
  const chemistListItems = people.filter(o=> o.profession === 'chemist');
  const othersListItems = people.filter(o => o.profession !== 'chemist');
  


function getChemist (person) {
 return( <li key={person.id}>
    <img src={getImgUrl(person)} alt={person.name}/>
    <p style={{display: 'inline'}}>
      <b>{person.name}:</b> {(person.profession !== 'chemist' ? person.profession : '') + ' known for' + person.accomplishment}
    </p>
  </li>
 );
}

function getImgUrl(img) {
  return (
    'https://i.imgur.com/' +
    img.imageId +
    's.jpg'
  );
}
return (
  <article>
    <h3>Chemist</h3>
    <ul>
    {chemistListItems.map(o => getChemist(o))}
    </ul>
    <h3>
    Others
    </h3>
    <ul>
    {othersListItems.map(o => getChemist(o))}
    </ul>
  </article>
)
}

const RecipeList = () => {
  return (
    <div>
      <h1>Recipes</h1>
      <u>
     { recipes.map(o=> 
        <li key={o.id}>
          <h3 style={{display: 'inline'}}>{o.name}</h3>
          <ul>
              {o.ingredients.map(i=> 
                <li>
                  {i}
                </li>
              )}
          </ul>
          </li>
      )}
      </u>
    </div>
  );
}

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

const Poem = () => {
  return (
    <>
    <article>
      {poem.lines.map((line, index) =>
      <Fragment key={index}>
        {index >0 && <hr/>}
        <p key={index}>
          {line}
          </p>
          </Fragment>
      )}
    </article></>
  );
}

const SpreadOperator = ({firstName, lastName}) => <h1>{firstName + ' '+ lastName}</h1>
const ChildProp = ({onClick, children}) => <button onClick={onClick}>{children}</button>