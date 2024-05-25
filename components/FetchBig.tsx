import React, { useEffect } from 'react';
import executeQuery from '../services/bigQueryService';

const AlgumComponente = () => {
    useEffect(() => {
        const fetchData = async () => {
            const query = 'SELECT * FROM `bigquery-public-data.google_trends.top_rising_terms` limit 1000';
            const data = await executeQuery(query);
            console.log(data);
        };

        fetchData();
    },);

    return <div>Dados do BigQuery serão exibidos aqui</div>;
};

export default AlgumComponente;