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
import {HeaderTitle} from '../../components/HeaderTitle' 

export function HomeScreen() {
    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const removeItem = (name) => {
        setTodoList((current) =>
            current.filter((todoList) => todoList.name !== name)
        );
    };

    const addItem = () => {
        if (!inputValue.trim()) return;

        const existItem = !!todoList.find((todo) => todo.name === inputValue);

        if (existItem) {
            Alert.alert("Ops..", "Parece que já tem um desse em :/");
            return;
        }

        setTodoList((prev) => {
            setInputValue("");
            -Keyboard.dismiss();
            return [...prev, { name: inputValue, status: false }];
        });
    };

    const handleCheckTodo = (name) => {
        const currentTodoList = todoList.map((todo) => {
            if (todo.name === name) {
                todo.checked = !todo.checked;
            }

            return todo;
        });

        setTodoList(currentTodoList);
    };

    const countChecked = todoList.filter((todo) => todo.checked).length;

    return (
        // TITLE
        <View style={styles.container}>

            <HeaderTitle styles={styles} todoList={todoList} countChecked={countChecked}/>

            {/* INPUT TEXT */}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Nome da tarefa"
                    placeholderTextColor="#71717A"
                    style={styles.input}
                    onChangeText={(txt) =>
                        setInputValue(
                            txt.length
                                ? txt.charAt(0).toUpperCase() + txt.slice(1)
                                : txt
                        )
                    }
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

            {/* RENDER LIST */}
            <FlatList
                data={todoList}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            handleCheckTodo(item.name);
                        }}
                        style={styles.listItem}
                    >
                        <TouchableOpacity
                            style={styles.checkboxConteiner}
                            color={item.checked ? "#60A5FA" : undefined}
                        >
                            <Checkbox value={item.checked} color={"#8c198c"} />
                            <Text
                                style={
                                    item.checked
                                        ? styles.listItemTextChecked
                                        : styles.listItemText
                                }
                            >
                                {item.name}
                            </Text>
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
                    </TouchableOpacity>
                )}
                ItemSeparatorComponent={<View style={{ padding:10 }}></View>}
                style={styles.list}
                // contentContainerStyle={styles.listContentStyle}
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
                scrollEnabled={true}
            />
        </View>
    );
}
