import { useStaticQuery, graphql } from 'gatsby';

const usePersonalData = () => {
  const data = useStaticQuery(graphql`
    query MineData {
      allDataJson(filter: { name: { eq: "Karol Falkiewicz" } }) {
        nodes {
          about
          name
          experience {
            company
            position
            startDate
            endDate
            current
            description
          }
          education {
            school
            title
            startDate
            endDate
          }
          skills
        }
      }
    }
  `);
  return data.allDataJson.nodes[0];
};

export default usePersonalData;
