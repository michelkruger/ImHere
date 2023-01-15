import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width:'100%',
    backgroundColor: 'white',
    padding:16,
    paddingVertical:42,
  },
  textPrimary: {
    fontSize:16,
    fontWeight:'bold',
    marginBottom:5,
  },
  textSecundary: {
    fontSize:12,
    marginBottom:5,
  },
  WhitoutParticipant: {
    fontSize:12,
    alignSelf:'center'
  },
  input: {
    height:50,
    padding:16,
    backgroundColor:'#000',
    borderRadius:5,
    flex:1,
  },
  button: {
    borderRadius:5,
    borderWidth:1,
    width:50,
    height:50,
    borderColor:'#31CF67',
    justifyContent:"center",
    alignItems:'center',
    marginLeft:12,
  },
  buttonText: {
    color:'#31CF67',
    fontSize:24,
  },
  form: {
    width:'100%',
    flexDirection:'row',
    marginVertical:36,
  }

})