import React from 'react'
import Layout from '../../components/layout'
import * as styles from "../../styles/projects.module.css"
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Projects({ data }) {
    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Projects Page</h2>
                <h3>Incididunt irure consequat ex elit.</h3>
                <div className={styles.projects}>
                    {projects.map(project => (
                        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                            <div>
                                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}></Img>
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <p>Like what you see? Contact me {contact} for a quote.</p>
            </div>
        </Layout>
    )
}

export const query = graphql`
query ProjectsPage {
    projects: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
        nodes {
        frontmatter {
            title
            stack
            slug
            thumb {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
            }
        }
        id
        }
    }
    contact: site {
        siteMetadata {
        contact
        }
    }
}`