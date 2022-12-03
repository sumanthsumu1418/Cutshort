import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ImageBackground, GestureResponderEvent} from 'react-native';
import {RootStackParamsList} from '../navigation/Navigator';

interface Props {
  navigation: StackNavigationProp<RootStackParamsList, 'Home'>;
}


interface Items {
  TeamName: string,
  ImageUrl: string
}
const teams=[
  {
      TeamName:'ROCKY',
      ImageUrl: require("../../common/assets/images/profile1.png")
  },
  {
      TeamName:'JOBS',
      ImageUrl:require("../../common/assets/images/profile2.png")
  },
  {
      TeamName:'LARRY',
      ImageUrl:require("../../common/assets/images/profile3.png")
  },
  {
      TeamName:'MARK',
      ImageUrl:require("../../common/assets/images/profile4.png")
  },
  {
      TeamName:'MUSK',
      ImageUrl:require("../../common/assets/images/profile1.png")
  },
]

interface RenderUIProps{
  press:(event: GestureResponderEvent) => void,
  data: Items,
  selected: string,
  index:number

}

const RenderUI=(props:RenderUIProps)=>{
        
  return(
      <TouchableOpacity style={{
          display:'flex',
          flexDirection:"row",
          margin:5,
          padding:10,
          zIndex:20,
          height:70,
          width:"95%",
          borderRadius:20,
          backgroundColor:'#ffff',
          shadowColor: '#000000',
          shadowOffset: {
            width: 2,
            height: 3
          },
          shadowRadius: 25,
          shadowOpacity: 1,
          opacity:props.selected==props.data.TeamName ? 1 :0.8,
          transform:[{ scale: props.selected==props.data.TeamName ? 1 :0.8}]
      }}
      onPress={props.press}
      
      >
      <Image source={props.data.ImageUrl} style={{height:50}} />
      <View style={{flex:0.8,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>{props.data.TeamName}</Text>
      </View>

      
      
      </TouchableOpacity>
  )
}


const Home = ({navigation}: Props) => {
  const [ItemSelected, setItemSelected] = useState("")
  console.log(ItemSelected)
    
   
  return (
    <SafeAreaView style={{flex:1}}>
      <ImageBackground 
              source={require("../../common/assets/images/PB.jpg")}
              resizeMode="cover"
              style={{flex:1}}
      
      >
      <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:22,color:'#ffff'}}>Select your Team </Text>
      </View>
       <View style={{flex:0.8}}>
            <FlatList
                data={teams}                
                keyExtractor={(item) => item.TeamName}
                renderItem={({item,index})=><RenderUI  data={item} index={index} selected={ItemSelected}  press={()=>{
                  setItemSelected(item.TeamName)
                  AsyncStorage.setItem("OwnTeam",item.TeamName)
                  navigation.navigate("GalleryView")
                }} />}
               
            />  
        </View>
        </ImageBackground>    
     
      
      </SafeAreaView>
  )
}
export default Home;