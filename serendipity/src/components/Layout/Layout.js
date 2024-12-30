import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";
import { keyboard } from '@testing-library/user-event/dist/keyboard';

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
               
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />


                <title>{title}</title>
                
        </Helmet>
      <Header/>
      <main style ={{minHeight: '60vh'}}>

      {children}

      </main>
      <Footer/>
    </div>
  )
}

Layout.defaultProps={
  title:'Serendipity',
  description:'mern stack project',
  keywords:'mern,mongodb,node,react,express,ecommerce',
  author:'Varshitha'
}

export default Layout