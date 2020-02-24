import { useStaticQuery, graphql } from 'gatsby';

const usePersonalData = () => {
  const data = useStaticQuery(graphql`
    query MineData {
      allDataJson(filter: { name: { eq: "Karol Falkiewicz" } }) {
        nodes {
          name
        }
      }
    }
  `);
  return data.allDataJson.nodes[0];
};

export default usePersonalData;
