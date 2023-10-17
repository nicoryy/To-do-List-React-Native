import { Text, TouchableOpacity, View } from "react-native";
import Icons from "@expo/vector-icons/Ionicons";

export const HeaderTitle = ({styles, todoList, countChecked, children}) => {
    // const styles = props.styles;
    // const countChecked = props.countChecked;
    // const todoList = props.todoList;

    return (
        <View style={styles.titleConteiner}>
            {children}
            <Text style={styles.title}>Lista de Tarefas</Text>
            <View style={styles.checkConteiner}>
                {todoList.length > 0 ? (
                    <Text style={styles.checkCountText}>
                        {countChecked}/{todoList.length}
                        <Icons
                            style={styles.checkCountIcon}
                            name="checkmark-outline"
                        />
                    </Text>
                ) : null}
            </View>
        </View>
    );
};
