import React from 'react';
import ReactDOM from 'react-dom/client';




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

 ReactDOM.createRoot(document.getElementById('root').render(product));
 ReactDOM.createRoot(document.getElementById('root').render(productWithChildrenInProps));
 ReactDOM.createRoot(document.getElementById('root').render(link));
 ReactDOM.createRoot(document.getElementById('root').render(linkWithJsx));
 ReactDOM.createRoot(document.getElementById('root').render(productJSX));