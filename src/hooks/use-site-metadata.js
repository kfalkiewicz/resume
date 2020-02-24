import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            charSet
            description
            lang
            robots
            title
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
