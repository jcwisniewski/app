import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
// import { postGoogle } from '../../auth/authConfig'
// Chamar a função para executar a consulta

export default async function teste() {
    const response = await fetch("http://localhost:3333/query");
    const data = await response.json();

    console.log(data.name.v);
    return (
        <View>
            <p>{data.name.v}</p>
        </View>
    )

}