import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,FlatList,TextInput, TouchableOpacity,SafeAreaView } from 'react-native'
import {useSelector,useDispatch} from "react-redux"

import Icons from "react-native-vector-icons/Ionicons"
import {HomeMovies} from "../../Reducer/Movie"

import MovieListPage from "./MovieLists"
const MoviesIndex = ({navigation}) => {
    const dispatch=useDispatch()
    
    const{MoviesHolly}=useSelector((state)=>state.Movies)
    const Movie=MoviesHolly ? MoviesHolly.results:[]

    const categories=["Movies"]
    const [categoryIndex,setcategoryIndex]=useState(0)

  
   const CategoryList=()=>{
       return(
        <View style={styles.categoryContainer}>
        {categories.map((item,index)=>(
            <TouchableOpacity key={index} 
            activeOpacity={0.8}
            onPress={()=>setcategoryIndex(index)}>
            <Text  style={[styles.categoryText,categoryIndex==index && styles.categoryTextSelected]}>{item}</Text>
            </TouchableOpacity>
        ))}
       
    </View>
       )
   }
     

    console.log("reck",Movie)
   
    useEffect((data)=>{
        dispatch(HomeMovies(data))
    },[])

    const renderLists=((item)=>{
        const{id,backdrop_path,original_language,
            original_title,overview,popularity,
            poster_path,release_date,
            title,vote_average,vote_count,}=item
        return (
            <MovieListPage id={id} backdrop_path={backdrop_path} title={title} poster_path={poster_path} navigation={navigation}/>
        )
    })
    return (
        <>
              <SafeAreaView style={{
            flex:1,
            paddingHorizontal:20,
            backgroundColor:"#fff"
        }}>
            <View style={styles.header}>
            <View>
                    <Text style={{fontSize:25,fontWeight:"bold"}}>Welcome to</Text>
                    <Text style={{fontSize:38,fontWeight:"bold",color:"green",marginTop:-12}}>Movies App</Text>

                </View>
                <Icons name="beer-outline" size={24} color="#4caf50"/>

            </View>
            <View style={{marginTop:30,flexDirection:"row"}}>
              
                <View style={{height:50,backgroundColor:"#272a2f1f",borderRadius:10,flex:1,flexDirection:"row",
                            alignItems:"center",
            }}>
                    <Icons name="search" size={25} style={{marginLeft:20}}/>
                    <TextInput placeholder="search movies"
                    style={{fontSize:18,fontWeight:"bold",color:"black",flex:1}}/>
                </View>
                <View  style={{marginLeft:10,height:50,width:50,backgroundColor:"green",justifyContent:"center",alignItems:"center",borderRadius:10}}>
                    <Icons name="funnel-outline" size={30} color="#fff"/>

                </View>

            </View>
            <CategoryList/>
            {/* <MovieListPage/>
             <MovieListPage/>
             <MovieListPage/> */}
             <FlatList
         numColumns={2}
         columnWrapperStyle={{justifyContent:"space-between"}}
         showsVerticalScrollIndicator={false}
         contentContainerStyle={{
             marginTop:10,
             paddingBottom:50
         }}
        data={Movie}
       
        renderItem={({item})=>{
            return renderLists(item)
            }}
        keyExtractor={item=>{item.id}}
        /> 
            
        </SafeAreaView>
    

        
        
        
     

        </>
    )
}

export default MoviesIndex

const styles = StyleSheet.create({
    header: {
        marginTop:25,
        flexDirection:"row",
        justifyContent:"space-between",

    },
    categoryContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:30,
        marginBottom:30,
        marginHorizontal:10
    },
    categoryText:{
        fontSize:16,
        fontWeight:"bold",
        color:"grey"
    },
    categoryTextSelected:{
        color:"green",
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor:"green"
    }
})
