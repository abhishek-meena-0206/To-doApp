import  React from 'react';
import { Button,Text,View,Image,TextInput,StyleSheet} from'react-native';



const create=()=>{

return(


<TextInput
style={style.input}
placeholder="write your task"


>

</TextInput>


)
}

const style=StyleSheet.create({

input:{
marginTop:30,
height:20,
marginHorizontal:20

}


});

export default create;