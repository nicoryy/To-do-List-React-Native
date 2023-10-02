// My own version


import {
    TextInput,
    TouchableOpacity,
    View,
    Text,
    Alert,
    FlatList,
    Keyboard,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import Icons from "@expo/vector-icons/Ionicons";
import Checkbox from "expo-checkbox";

export function HomeScreen() {
    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [checkeds, setCheckeds] = useState(0);

    function removeItem(id) {
        if (todoList.length > 1) {
            setTodoList(todoList.slice(todoList.indexOf(id.target, 1)));
        } else {
            setTodoList([]);
        }
    }

    function addItem() {
        if (!inputValue.trim()) return;

        const existItem = !!todoList.find((todo) => todo.name === inputValue);

        if (existItem) {
            Alert.alert("Ops..", "Parece que já tem um desse em :/");
            return;
        }

        setTodoList((prev) => {
            setInputValue("");
            -Keyboard.dismiss();
            return [...prev, { name: inputValue }];
        });
    }

    return (
        // TITLE
        <View style={styles.container}>
            <View style={styles.titleConteiner}>
                <Text style={styles.title}>Lista de Tarefas</Text>
                <View style={styles.checkConteiner}>
                    {todoList.length > 0 ? (
                        <Text style={styles.checkCountText}>
                            {checkeds}/{todoList.length}
                            <Icons
                                style={styles.checkCountIcon}
                                name="checkmark-outline"
                            />
                        </Text>
                    ) : (
                        null
                    )}
                </View>
            </View>

            {/* INPUT TEXT */}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Nome da tarefa"
                    placeholderTextColor="#71717A"
                    style={styles.input}
                    onChangeText={(txt) => setInputValue(txt)}
                    value={inputValue}
                    onSubmitEditing={addItem}
                />
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

            <FlatList
                data={todoList}
                style={styles.list}
                contentContainerStyle={styles.listContentStyle}
                ListEmptyComponent={
                    <View style={styles.emptyListContainer}>
                        <Icons
                            name="trash-bin-outline"
                            style={styles.emptyListIcon}
                        />
                        <Text style={styles.emptyListTitle}>Lista Vazia</Text>
                        <Text style={styles.emptyListDescrption}>
                            Cadastre alguma atividade
                        </Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <TouchableOpacity style={styles.checkboxConteiner}>
                            <Checkbox value={false} onPress={() => {}} />
                            <Text style={styles.listItemText}>{item.name}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                removeItem(item.name);
                            }}
                        >
                            <Icons
                                name="trash-outline"
                                style={styles.listItemButtonRemove}
                            />
                        </TouchableOpacity>
                    </View>
                )}
                ItemSeparatorComponent={<View style={{ padding: 10 }}></View>}
            />
        </View>
    );
}
