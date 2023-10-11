import { TextInput, TouchableOpacity, View } from "react-native"
import Icons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

export const InputText = (props) => {
    const [inputValue, setInputValue] = useState("");

    const styles = props.styles

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


    return(
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
    )
}