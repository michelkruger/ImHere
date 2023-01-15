import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    marginBottom:12,
    alignItems:'center',
  },
  containerName: {
    backgroundColor:'#202024',
    flex:1,
    height:50,
    justifyContent:'center',
  },
  name: {
    fontSize:16,
    marginBottom:5,
    color:'#000',
    marginHorizontal:16,

  },
  button: {
    borderRadius:5,
    borderWidth:1,
    width:50,
    height:50,
    borderColor:'red',
    justifyContent:"center",
    alignItems:'center',
    marginLeft:12,
  },
  buttonText: {
    color:'red',
    fontSize:24,
  },
})