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
            nuxtServerInit ( vuexContext, callback )
            {


                const TECH_NEWS_API = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&sortBy=popularity&apiKey=c7024ffb8f944c9380bd7773981dfbc5'
                const technews = axios.get( TECH_NEWS_API )
                    .then( res =>
                    {
                        const postsArray = []
                        for ( const key in res.data )
                        {
                            postsArray.push( { ...res.data[ key ], id: key } )
                        }
                        vuexContext.commit( 'setTechNews', postsArray )

                    } ).catch( error => console.log( error ) )

                const NEWS_API = 'https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&sortBy=popularity&apiKey=c7024ffb8f944c9380bd7773981dfbc5'
                const topnews = axios.get( NEWS_API )
                    .then( res =>
                    {
                        const postsArray = []
                        for ( const key in res.data )
                        {
                            postsArray.push( { ...res.data[ key ], id: key } )
                        }
                        vuexContext.commit( 'setTopNews', postsArray )

                    } ).catch( error => console.log( error ) )




                return axios.all( [ technews, topnews ] );
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