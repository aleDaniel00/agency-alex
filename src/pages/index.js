import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Lista de componentes</h1>
    <hr />
    <h2>Butom componente</h2>
    <button>texto</button>
    <hr />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage