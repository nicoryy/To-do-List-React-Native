import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import Icons from '@expo/vector-icons/Ionicons'

export function HomeScreen() {

    const [todoList, setTodoList] = useState([
        {name: "PHP"},
        {name: "Java"},
        {name: "JavaScript"},
        {name: "Python"},
    ])

    function addItem() {
        setTodoList((prev) => {
            return [...prev, {name: "Go"}]
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleConteiner}>
                <Text style={styles.title}>Lista de Tarefas</Text>
                <View >
                    <Text>1/1</Text>
                    <Icons name='checkmark-outline'/>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Nome da tarefa"
                    placeholderTextColor='#71717A'
                    style={styles.input} />
                <TouchableOpacity
                    style={styles.iconAdd}
                    onPress={addItem}
                    name="add"
                    size={32}
                    color="#fff"
                />
            </View>

            <View style={styles.list}>
                {todoList.map(item => (
                    <View key={item.name} style={styles.listItem}>
                        <Text style={styles.listItemText}>{item.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}