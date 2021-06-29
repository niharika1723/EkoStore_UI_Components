import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        width: 390, 
        height: 180, 
        backgroundColor: "#6176e8", 
        justifyContent: "space-around", 
        marginTop: 37, 
        marginLeft:1  
    },

    topbar: {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-around",
        marginTop:20 
    },

    storeIcon: {
        flexDirection: "row", 
        alignItems: "center"
    },

    storeImage: {
        width: 40, 
        height: 40, 
        borderRadius: 100 
    },

    storeName: {
        fontSize: 20, 
        fontWeight: "bold", 
        color: "#fff", 
        marginLeft: 10 
    },

    bellIcon: {
        width: 40, 
        height: 40, 
        borderRadius: 100, 
        backgroundColor: "#edc555", 
        justifyContent: "center", 
        alignItems: "center" 
    },

    bellImage: {
        width: 30, 
        height: 30, 
        borderRadius: 100
    },

    panel: {
        alignItems:"flex-end",
        marginTop:180
    },

    panelBox: {
        width: 250, 
        height: 650, 
        borderRadius: 0,
        backgroundColor:'#ffffff'
    },

    accountTasks: {
        fontWeight:"bold",
        marginTop:20,
        marginLeft:20
    },

    accountContent: {
        flexDirection:"row",
        alignItems:"center",
        marginTop:10,
        marginLeft:10
    },

    accountIcon: {
        width:40,
        height:40,
        backgroundColor:"grey",
        borderRadius:100
    },

    accountName: {
        marginLeft:10
    },

    productUpdates: {
        fontWeight:"bold",
        marginTop:20,
        marginLeft:20
    },

    productContent: {
        flexDirection:"row",
        alignItems:"center",
        marginTop:10,
        marginLeft:10
    },

    productIcon: {
        width:40,
        height:40,
        backgroundColor:"grey",
        borderRadius:100
    },

    productName: {
        marginLeft:10
    },

    searchBar: {
        width: 330, 
        alignSelf: "center", 
        height: 40, 
        borderRadius: 10, 
        backgroundColor: "#fff", 
        justifyContent: "space-between", 
        flexDirection: "row", 
        alignItems: "center"
    },

    search: {
        marginLeft: 10
    },

    soundIcon: {
        width: 30, 
        marginRight: 10, 
        height: 30, 
        borderRadius: 100, 
        backgroundColor: "#6176e8", 
        justifyContent: "center", 
        alignItems: "center"
    },

    soundImage: {
        width: 20, 
        height: 20,
    }



  });

  