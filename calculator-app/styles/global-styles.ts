import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  calculatorContainer : { 
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
  } , 
  mainResult: {
    color: Colors.textPrimary,
    fontSize: 60,
    textAlign: 'right', 
  },
  subResult: {
    color: Colors.textSecondary,
    fontSize: 50,
    textAlign: 'right',
  },
  row :{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  button : {
   height: 80,
   width: 80,
   borderRadius: 410,
   backgroundColor: Colors.darkGray,
   justifyContent: 'center', 
   marginHorizontal: 10,
  },
  buttonText : {
    color: Colors.textPrimary,
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
    fontWeight: '300',
    fontFamily: 'SpaceMono',
  },
});
