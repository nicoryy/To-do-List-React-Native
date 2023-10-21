import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#18181B",
        padding: 12,
        paddingTop: 50,
    },

    titleConteiner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 22,
        width: "100%",
    },
    checkConteiner: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        textAlign: "right",
    },
    checkCountIcon: {
        color: "#22C55E",
        fontSize: 28,
    },
    menuIcon: {
        color: "#575761",
        fontSize: 36,
    },
    checkCountText: {
        color: "#22C55E",
        fontSize: 18,
    },
    title: {
        color: "#a3a3a3",
        fontSize: 32,
        marginLeft:'15%'
    },
    input: {
        padding: 16,
        // marginTop: 12,
        borderRadius: 8,
        backgroundColor: "#3F3F46",
        height: 48,
        color: "#fff",
        flex: 1,
    },
    inputContainer: {
        paddingTop: 12,
        gap: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    iconAdd: {
        color: "#FAFAFA",
        fontSize: 25,
    },
    buttonAdd: {
        height: 50,
        width: 50,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#8c198c",
    },
    iconRemove: {
        color: "#FAFAFA",
        fontSize: 25,
    },
    buttonRemove: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
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
        paddingBottom: 12,
        justifyContent: "space-between",
    },
    listItemText: {
        color: "#fff",
        fontSize: 18,
        maxWidth:'85%'
    },
    listItemTextChecked: {
        color: "#fff",
        fontSize: 18,
        maxWidth:'85%',
        textDecorationLine:'line-through'
    },
    checkContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        flex: 1,
        paddingVertical: 4,
    },
    listContentStyle: {
        height: "100%",
    },
    emptyListContainer: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        marginTop:'25%'
    },
    emptyListIcon: {
        color: "#3F3F46",
        fontSize: 72,
        marginBottom: 20,
    },
    emptyListTitle: {
        color: "#3F3F46",
        fontSize: 28,
    },
    emptyListDescrption: {
        color: "#3F3F46",
        fontSize: 16,
        marginBottom: 100,
    },
    listItemButtonRemove: {
        color: "#71717A",
        fontSize: 24,
    },
    separator: {
        backgroundColor: "#3F3F46",
        height: 1,
        marginVertical: 8,
    },
    checkCountContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        textAlign: "right",
    },
    checkboxConteiner: {
        flexDirection: "row",
        gap: 14,
        alignItems: "center",
    },

    openMenu:{
        position:'absolute',
        marginTop:12,
    }

});
