import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => (
  <section>
    <h1>Dashboard here</h1>
    <p>dashboard is here.</p>

    <Link to="/posts" className="button">
       to View Posts please click here
    </Link>
  </section>
)

export default DashboardPage