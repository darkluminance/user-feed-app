import Vuex from 'vuex';
import axios from 'axios';

const store = () =>
{
    return new Vuex.Store( {

        state: {
            weatherData: [],
            technewsData: [],
            topnewsData: [],
            blogData: []
        },
        getters: {
            weatherData: state =>
            {
                return state.weatherData;
            },
            technewsData: state =>
            {
                return state.technewsData;
            },
            topnewsData: state =>
            {
                return state.topnewsData;
            },
            blogData: state =>
            {
                return state.blogData;
            }
        },
        actions: {

            async fetchTechNews ( { commit } )
            {
                const TECH_NEWS_API = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&sortBy=popularity&apiKey=c7024ffb8f944c9380bd7773981dfbc5'
                try
                {
                    const res = await axios.get( TECH_NEWS_API )

                    const postsArray = []
                    for ( const key in res.data )
                    {
                        postsArray.push( { ...res.data[ key ], id: key } )
                    }
                    commit( 'setTechNews', postsArray )

                } catch ( error )
                {
                    console.log( error );
                }

            },
            async fetchNews ( { commit } )
            {
                const NEWS_API = 'https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&sortBy=popularity&apiKey=c7024ffb8f944c9380bd7773981dfbc5'
                try
                {
                    const res = await axios.get( NEWS_API )

                    const postsArray = []
                    for ( const key in res.data )
                    {
                        postsArray.push( { ...res.data[ key ], id: key } )
                    }
                    commit( 'setTopNews', postsArray )

                } catch ( error )
                {
                    console.log( error );
                }
            },





        },
        mutations: {
            setWeather ( state, value )
            {
                state.weatherData = value;
            },
            setTechNews ( state, value )
            {
                state.technewsData = value;
            },
            setTopNews ( state, value )
            {
                state.topnewsData = value;
            },
            setBlogs ( state, value )
            {
                state.blogData = value;
            }
        }
    } );
}

export default store;