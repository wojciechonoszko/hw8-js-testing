import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from "prop-types";




const link = React.createElement(
  "a",
  {
      href: "https://interia.pl",
      target: "_blank",
      rel: "noreferrer noopener",

  },
  "Go to interia.pl"
);

// link with JSX

const linkWithJsx = (
  <a href="https://interia.pl/" target="_blank" rel="noreferrer noopener">
  "Go to interia.pl"
</a>
)


const image = React.createElement("img", {
  src: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
  alt: "Tacos With Lime",
  width: 640,
});
 const title = React.createElement("h2", null, "Tacos With Lime");
 const price = React.createElement("p", null, "Price: 10.99$");
 const button = React.createElement("button", {type: "button"}, "Add to cart");

 const product = React.createElement("div", null, image, title, price, button);

 //LUB

 const productWithChildrenInProps = React.createElement("div", {
   children: [image, title, price, button],
 });

 // with JSX

 const imageUrl = 
 "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
const priceJSX = 10.99;

const productJSX = (
  <div>
    <img src={imageUrl} alt="Tacos With Lime" width="640" />
    <h2>Tacos With Lime</h2>
    <p>Price: {priceJSX}$</p>
    <button type="button">Add to cart</button>
  </div>
)

const post = (
  <div>
    <h2>Post Header</h2>
    <p>Post text</p>
  </div>
);

const postTwo = (
  <Fragment>
    <h2>Post Header</h2>
    <p>Post text</p>
  </Fragment>
)


// Z pominieciem Fragment
const postThree = (
  <>
    <h2>Post Header</h2>
    <p>Post text</p>
  </>
)


const MyFunctionalComponent = props => <div>Functional Component</div>;

const Product = props => (
  <div>
    <img
      src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      alt="Tacos With Lime"
      width="640"
      />
    <h2>Tacos With Lime </h2>
    <p>Price: 12.00$</p>
    <button type="button">Add to cart</button>
  </div>
);

const App = () => (
  <>
    <h1>Best selling products</h1>
    <Product name = "Tacos With Lime"/>
  </>
)

const ProductTwo = props => (
  <div>
    <img src={props.Url} alt={props.name} width="640"/>
    <h2>{props.name}</h2>
    <p>Price: {props.price}$</p>
    <button type = "button">Add to cart</button>
  </div>
);

const ProductThree = ({imgUrl, name, price}) => (
  <div>
    <img src={imgUrl} alt={name} width="640"></img>
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
  </div>
);

const AppTwo = () => (
  <div>
    <h1>Best selling products</h1>
    <Product
    imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
    name="Tacos With Lime"
    price={10.99}
    />
    <Product
      imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
      name="Fries and Burger"
      price={14.29}
    />
  </div>
)

const ProductFour = ({
  imgUrl= "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  name,
  price,
}) => (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
  </div>
);

/*
 * Określenie defaultProps gwarantuje, że `props.imgUrl` będzie miał wartość,
 * nawet jeśli nie był wskazany przy wywołaniu komponentu w rodzicu.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductFour name="Tacos With Lime and Sugar" price={10.99} />
);

const Profile = ({ name,email}) => (
  <div>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
  </div>
)

const Panel = ({title, children}) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

const AppThree = () => (
  <div>
    <Panel title = "User profile">
      <Profile name="Mango" email="mango@mail.com"/>
    </Panel>
  </div>
);

const ProductFive = ({
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  name,
  price,
}) => (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
  </div>
);

ProductFive.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "Redux in depth" },
];

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map(book => (
        <li key = {book.id}>{book.name}</li>
        //lub
        //<li key = {book.index}>{book.name}</li>
      ))}
    </ul>
  );
};

const AppFour = () => {
  return (
    <div>
      <BookList books={favouriteBooks} />
    </div>
  );
};



 ReactDOM.createRoot(document.getElementById('root').render(product));
 ReactDOM.createRoot(document.getElementById('root').render(productWithChildrenInProps));
 ReactDOM.createRoot(document.getElementById('root').render(link));
 ReactDOM.createRoot(document.getElementById('root').render(linkWithJsx));
 ReactDOM.createRoot(document.getElementById('root').render(productJSX));
 ReactDOM.createRoot(document.getElementById('root').render(post));
 ReactDOM.createRoot(document.getElementById('root').render(postTwo));
 ReactDOM.createRoot(document.getElementById('root').render(postThree));
 ReactDOM.createRoot(document.getElementById('root').render(MyFunctionalComponent));
 ReactDOM.createRoot(document.getElementById('root').render(Product));
 ReactDOM.createRoot(document.getElementById('root').render(App));
 ReactDOM.createRoot(document.getElementById('root').render(ProductTwo));
 ReactDOM.createRoot(document.getElementById('root').render(ProductThree));
 ReactDOM.createRoot(document.getElementById('root').render(AppTwo));
 ReactDOM.createRoot(document.getElementById('root').render(Profile));
 ReactDOM.createRoot(document.getElementById('root').render(Panel));
 ReactDOM.createRoot(document.getElementById('root').render(AppThree));
 ReactDOM.createRoot(document.getElementById('root').render(AppFour));