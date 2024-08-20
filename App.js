import React from "react";
import ReactDOM from "react-dom/client";



const HeaderHTML = ()=> {
  return(
    <div id="header" className="header-container">
    <div className="logo-container">
      <a href="https://www.growage.in/"><img className="logo-image" src="https://www.growage.in/assets/images/logo.png" alt="GrowAge" /></a>
    </div>
    <div className="nav-container">
      <ul className="nav-element">
        <li><a href="#home">Home</a></li>
        <li><a href="#About Us">About Us</a></li>
        <li><a href="#Contact Us">Contact Us</a></li>
      </ul>
    </div>
  </div> 
  )
};


const title = (<h2 className="title" id="home">Kids Items</h2>) ;

const BodyHtml = ()=>{
  return (
    <div className="brand-container">
      <div className="brand-image-container">
        <img className="kids-image" src="https://calyxclothing.in/image/cache/catalog/calyxclothing/calyxclothing-baby-girl-dresses-GPF2183-02-480x720.jpg" alt="Calyx Clothing" />
      </div>
      <div className="two-column">
        <div className="brand-details">
          Calyx Clothing, developed by GrowAge, focuses on providing a delightful shopping experience for kids. The website offers a wide range of children’s clothing, accessories, and footwear, ensuring that parents can find stylish and comfortable options for their little ones.
        </div>
        <div className="readMore">
          <a href="https://calyxclothing.in/">- Read More</a>
        </div>
      </div>
    </div>
  )
}


const title2 = (<h2 class="title" id="About Us">About Us</h2>);


const AboutHtml = ()=>{
  return (
    <div className="About-container">
      <div className="content-container">
        <h1 className="content-1">We are the fastest growing Digital Marketing Agency</h1>
        <p className="content-2">
          Welcome to GrowAge, we believe in the power of digital marketing to transform businesses. We work closely with our clients to understand their unique needs, goals, and challenges, and develop a customized plan to achieve their desired results.
        </p>
      </div>
      <div className="digital-container">
        <img className="digital-image" src="https://img.freepik.com/free-vector/online-marketing-abstract-concept-illustration-digital-marketing-online-sales-social-media-strategy-seo-optimization-ecommerce-agency-service-internet-advertising_335657-54.jpg?t=st=1724125034~exp=1724128634~hmac=1ad6748028c46b96c1ac60728f90834013cac7317d877b6218a06af99a3879a6&w=740" alt="digital-marketing-image" />
      </div>
    </div>
  )
}



const AppLayout = ()=>{
  return (
    <div id="App">
      <HeaderHTML />
      <BodyHtml />
      <AboutHtml />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
