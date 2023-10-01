import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#18181B',
        padding: 12,
        paddingTop:50
    },
    title: {
        color: '#fff',
        fontSize: 28,
        marginTop: 12,
        marginBottom: 12,
    },
    input: {
        padding: 16,
        marginTop: 12,
        borderRadius: 8,
        backgroundColor: '#3F3F46',
        height: 48,
        color: '#fff',
        flex: 1,
    },
    inputContainer: {
        gap: 16,
        flexDirection: "row"
    },
    iconAdd: {
        width: 30
    },
    buttonAdd: {
        marginTop: 12,
        borderRadius: 25,
        width: 48,
        height: 48,
        backgroundColor: '#60A5FA',
        alignItems: "center",
        justifyContent: "center"
    },
    list: {
        flexDirection: "column",
        gap: 12,
        marginTop: 24,
    },
    listItem: {
        flexDirection: "row",
        borderBottomColor: "#3F3F46",
        borderBottomWidth: 1,
        paddingBottom: 12
    },
    listItemText: {
        color: "#fff",
        fontSize: 18
    }
})