// BigQueryService.js
import axios from "axios";

const executeQuery = async (query) => {
 const response = await axios.post(
  "https://bigquery.googleapis.com/bigquery/v2/projects/bigquerypublicdata/queries",
  { query, useLegacySql: false },
  {
   headers: {
    Authorization: `Bearer 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`,
    "Content-Type": "application/json",
   },
  }
 );

 return response.data;
};

export default executeQuery;
