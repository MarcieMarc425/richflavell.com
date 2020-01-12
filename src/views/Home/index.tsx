import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Card from "../../components/Card"
import GridList from "../../components/GridList"
import { Content, Right } from "../../config/style/mdx"
import { HomeQuery } from "../../types/graphql-types"
import safe from "../../utils/safe"
import SEO from "../../utils/SEO"
import { Holder, SeeMoreLink, Video, VideoWrapper } from "./style"
import { useTranslation } from "react-i18next"

interface IHomeProps {
  data?: HomeQuery
}
const Home: React.FC<IHomeProps> = () => {
  const { t } = useTranslation("Home")
  const videoId = ""

  const data: HomeQuery = useStaticQuery(graphql`
    query Home {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 9
        filter: { frontmatter: { path: { eq: null } } }
      ) {
        totalCount
        edges {
          node {
            id
            excerpt
            timeToRead
            fields {
              slug
            }
            frontmatter {
              title
              path
              largeThumbnail: featuredImage {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 980, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              thumbnail: featuredImage {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 500, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              date
            }
          }
        }
      }
    }
  `)

  const posts = safe(data.allMdx.edges)

  return (
    <Holder>
      <SEO
        title={
          "Software Engineer, Outdoors Enthusiast & Aspirational Photographer"
        }
      />
      {videoId && (
        <VideoWrapper>
          <Video
            url={`https://www.youtube.com/watch?v=${videoId}`}
            playing={true}
            controls={true}
            light={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            width="100%"
            height="100%"
          />
        </VideoWrapper>
      )}

      <Content>
        <GridList>
          {posts.map((post, i) => (
            <Card
              first={i === 0}
              only={posts.length === 1}
              key={post.node.id}
              data={post}
            />
          ))}
        </GridList>
        {data.allMdx.totalCount > 10 && (
          <Right>
            <SeeMoreLink to="/posts">{t("seeMore")} &raquo;</SeeMoreLink>
          </Right>
        )}
      </Content>
    </Holder>
  )
}

export default Home
