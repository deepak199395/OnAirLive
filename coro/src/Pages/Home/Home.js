import React from 'react'
import Layout from '../../Components/Layout/Layout'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <Layout>
       <section className='hero'>
        <div className="hero-overly">
         <div className="container">
          <h2>Conect with anywhare to any one with hight quelity </h2>
          <p>
            stay connected with frds ans family,or bussiness partenrs
          </p>
          <NavLink to="/room" className="cta-button">GET STARTED</NavLink>
         </div>

        </div>
       </section>
    </Layout>
  )
}

export default Home
