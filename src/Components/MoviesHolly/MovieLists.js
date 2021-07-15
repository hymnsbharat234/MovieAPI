import React from 'react'
import { View, Text,Dimensions,Image,TouchableOpacity, ImageBackground } from 'react-native'

import Icons from "react-native-vector-icons/FontAwesome5"
const MovieLists = (
    {id,backdrop_path,original_language,
        original_title,overview,popularity,
        poster_path,release_date,
        title,vote_average,vote_count,navigation,flag}
) => {
    console.log("hee", poster_path)
    const width = Dimensions.get("screen").width/2-30
    return (
        <View style={{height:230,backgroundColor:"#cccccc4f",width:150,marginHorizontal:10,
        marginBottom:20,borderRadius:10,padding:10
        }}>
            {/* <View style={{alignItems:"flex-end"}}>
                <View style={{width:30,
                height:30,borderRadius:15,alignItems:"center",justifyContent:"center",
              
                }}>
                <Icons name="heart" size={18}/>
                </View>
            </View> */}
            <TouchableOpacity onPress={()=>navigation.navigate("MoviesDetailsPage",{id:id})}>
            <View style={{height:215,alignItems:"center",}}>
                <Image source={{uri:`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}} style={{flex:1,resizeMode:"contain",width:"100%"}}/>
                <Text style={{fontSize:15,fontWeight:"500",fontFamily:"system-ui"}}>{title}</Text>
            </View>
         </TouchableOpacity>
            
         
        </View>
    )
}

export default MovieLists
