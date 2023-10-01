import { TextInput, TouchableOpacity, View, Text, Alert, FlatList } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import Icons from '@expo/vector-icons/Ionicons'
import Checkbox from 'expo-checkbox'

export function HomeScreen() {


    // { name: "PHP" },
    // { name: "Java" },
    // { name: "JavaScript" },
    // { name: "Python" },


    const [todoList, setTodoList] = useState([])
    const [inputValue, setInputValue] = useState('')


    function addItem() {
        if (!inputValue.trim()) return;

        const existItem = !!todoList.find(todo => todo.name === inputValue)

        if (existItem){
            Alert.alert('ops', 'ja existe')
            return
        }

        setTodoList((prev) => {
            return [...prev, { name: inputValue }]
        })
    }

    return (
        // TITLE 
        <View style={styles.container}>
            <View style={styles.titleConteiner}>
                <Text style={styles.title}>Lista de Tarefas</Text>
                <View style={styles.checkConteiner}>
                    <Text style={styles.checkCountText}>0/{todoList.length}</Text>
                    {/* <Icons style={styles.checkCountIcon} name='checkmark-outline' /> */}
                </View>
            </View>

            {/* INPUT TEXT */}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Nome da tarefa"
                    placeholderTextColor='#71717A'
                    style={styles.input}
                    onChangeText={(txt) => setInputValue(txt)}
                    value={inputValue} />
                <TouchableOpacity
                    style={styles.buttonAdd}
                    onPress={addItem}
                    name="add"
                    size={32}
                    color="#fff"
                >
                    <Icons style={styles.iconAdd} name="add-outline" />
                </TouchableOpacity>
            </View>

            {/* LIST PART */}
            {/* <View style={styles.list}>
                {todoList.map(item => (
                    <View key={item.name} style={styles.listItem}>
                        <Text style={styles.listItemText}>{item.name}</Text>
                        <TouchableOpacity
                            style={styles.buttonRemove}
                            onPress={addItem}
                            name="add"
                            size={32}
                            color="#fff"
                        >
                            <Icons style={styles.iconRemove} name="remove-circle-outline" />
                        </TouchableOpacity>
                    </View>
                ))}
            </View> */}

            <FlatList
                data={todoList}
                style={styles.list}
                contentContainerStyle={styles.listContentStyle} 
                ListEmptyComponent={
                    <View style={styles.emptyListContainer}>
                        <Icons name="trash-bin-outline" style={styles.emptyListIcon} />
                        <Text style={styles.emptyListTitle}>Lista Vazia</Text>
                        <Text style={styles.emptyListDescrption}>Cadastre alguma atividade</Text>
                    </View>
                }
                renderItem={({item}) => (
                    <View style={styles.listItem}>
                        <TouchableOpacity style={styles.checkboxConteiner}>
                            <Checkbox
                                value={false}
                                onPress={() => { }}
                            />
                            <Text style={styles.listItemText}>{item.name}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Icons name="trash-outline" style={styles.listItemButtonRemove} />
                        </TouchableOpacity>
                    </View>
                )}

                ItemSeparatorComponent={<View style={{ padding: 10 }}></View>}
            />
        </View>
    )
}