import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { styles } from "../config/styles";

export default function CreateUser(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    function cadastrarPessoa(){
        console.log(nome);
        // Usar a função do firebase para cadastrar
        const docRef = addDoc(
            collection (db, "pessoas"),
            {
                nomeDaPessoa: nome,
                telefone: telefone
            }
        )
    }
    return(
        <View style={styles.container}>
            <Text>Cadastrar Pessoa</Text>
            <View>
                <TextInput
                    label={"Nome"}
                    placeholder={"Digite seu nome"}
                    mode="outlined"
                    value={nome}
                    onChangeText={setNome}
                />
                <TextInput
                    label={"Telefone"}
                    placeholder={"Digite seu telefone"}
                    mode="outlined"
                    value={telefone}
                    onChangeText={setTelefone}
                />
                <Button
                    onPress={cadastrarPessoa}
                >Cadastra Pessoa</Button>
            </View>
        </View>
    )
}