
import React,{useEffect,useState} from 'react'
import {Text,View,StyleSheet,Image,FlatList,ActivityIndicator,   ToastAndroid,TouchableOpacity,StatusBar,SafeAreaView,Platform, ScrollView} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import {useDispatch,useSelector} from "react-redux"
import Icons from "react-native-vector-icons/FontAwesome5"
import {MoviesDetails} from "../../Reducer/MovieDetails"

const MoviesDetail = ({route,navigation}) => {
    const dispatch=useDispatch();
    let flag =false
    const id=route.params.id
  
   
    const{moviesDetails} = useSelector((state)=>state.film)

    useEffect(()=>{
        dispatch(MoviesDetails(id))
    },[id,moviesDetails])

    if(moviesDetails){
        flag=true

    }
    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
          "Added to Favourite",
          ToastAndroid.SHORT,
          ToastAndroid.TOP
        );
      };

   

if(flag){
    const{backdrop_path,id,poster_path,original_language,release_date,title,vote_average,overview,}=moviesDetails


    return (
       
        <SafeAreaView style={{
            flex:1,backgroundColor:"#fff"}}>
                <View style={{paddingHorizontal:20,
                marginTop:25,flexDirection:"row",justifyContent:"space-between"
                }}>
                    
                    <Icon name="arrow-back-outline" size={28} onPress={()=>navigation.goBack()} />
                    <Icon name="bookmarks-outline" size={28}    onPress={() => showToastWithGravity()} />

                </View>
                <View style={{flex:0.45,marginTop:25,justifyContent: 'center',alignItems:"center",}}>
                    <Image source={{uri:`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}} style={{height:300,width:"80%",resizeMode:"contain",flex:1}}/>
                 
                </View>
                <View style={{width:90,height:25,backgroundColor:"#4caf50d6",borderBottomRightRadius:10,borderTopRightRadius:10}}>
                    <TouchableOpacity styles={{borderWidth:1}} onPress={()=>navigation.navigate("MovieReviewPage",{id:id})}>
                        <Text style={{fontWeight:"bold", color:"#fff"}}>More Details</Text>
                    </TouchableOpacity>
                    </View>
               
                <View style={{flex:0.55,backgroundColor:"#9e9e9e47",
                    marginTop:10,paddingTop:30,borderTopStartRadius:20,borderTopRightRadius:20
                }}>
                     <ScrollView>
                    <View style={{marginLeft:20,flexDirection:"row"}}>
                        <Text style={{fontSize:22,fontWeight:"bold",color:"#e91e63",marginHorizontal:10}}>{title}</Text>
                        <Text style={{fontSize:17,paddingTop:5,paddingLeft:8,}}>{vote_average}</Text>
                    </View>
                    <View style={{marginTop:10,marginLeft:20}}>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>About Movie :-</Text>
                       
                        <View style={{marginTop:5,marginLeft:10,}}>
                            
                           <View style={{flexDirection:"row"}}>
                            <Text style={{fontSize:15,fontWeight:"bold" ,}}>OverView</Text>
                            <Icons name="share" size={20} style={{marginLeft:10}}/>
                            
                            </View>
                            <View style={{marginLeft:10}}>
                                <Text>{overview}
                                </Text>
                            </View>
                            <View style={{flexDirection:"row",marginTop:10}}>
                            <Text style={{fontSize:15,fontWeight:"bold" ,}}>Release Date</Text>
                            <Icons name="share" size={20} style={{marginLeft:10}}/>
                            
                            </View>
                            <View style={{marginLeft:10}}>
                                <Text>{release_date}</Text>
                            </View>
                            <View style={{flexDirection:"row",marginTop:10}}>
                            <Text style={{fontSize:15,fontWeight:"bold" ,}}>language</Text>
                            <Icons name="share" size={20} style={{marginLeft:10}}/>
                            <View style={{marginLeft:10}}>
                                <Text style={{fontSize:15,fontWeight:"bold" ,}}>{original_language}</Text>
                            </View>
                            
                            </View>
                           
                        </View>
                        
                        

                    </View>
                    </ScrollView>

                </View>
       

        </SafeAreaView>
    )
            }else{
                return(
                    <View style={{flex: 1,justifyContent: 'center'}}>
                        <ActivityIndicator size={45} color="black"/>
                    </View>
                        
                        )
            }
}

export default MoviesDetail

const styles = StyleSheet.create({})
