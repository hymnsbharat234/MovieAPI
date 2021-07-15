import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
const url="https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1"

const initialState={
   
}

export const HomeMovies=createAsyncThunk(
    "HomeMovies",
        async(body)=>{
            console.log("rocky")
            const result = await axios.get(url)
            
            return result.data

        }
    
)


const MovieReducer=createSlice({
    name:"Movies",
    initialState,
    reducers:{},
    extraReducers:{
        [HomeMovies.fulfilled]:(state, { payload:MoviesHolly})=>{
            if(MoviesHolly.status){
                state.MoviesHolly=payload
            }else{
                state.MoviesHolly=MoviesHolly
            }

        },
        

    },
})
export default MovieReducer.reducer