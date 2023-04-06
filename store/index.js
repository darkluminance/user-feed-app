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
                const post = axios.get( 'https://user-feed-6041f-default-rtdb.asia-southeast1.firebasedatabase.app/user-posts.json' )
                    .then( res =>
                    {
                        const postsArray = []
                        for ( const key in res.data )
                        {
                            postsArray.push( { ...res.data[ key ], id: key } )
                        }
                        vuexContext.commit( 'setBlog', postsArray )
                    } ).catch( e => context.error( e ) );

                const weather = axios.get( 'https://api.weatherapi.com/v1/forecast.json?key=d20764e093a0499a8c370116232303&q=Dhaka&days=3&aqi=yes&alerts=no' )
                    .then( res =>
                    {
                        const postsArray = []
                        for ( const key in res.data )
                        {
                            postsArray.push( { ...res.data[ key ], id: key } )
                        }
                        vuexContext.commit( 'setWeather', postsArray )
                    } )
                    .catch( e => context.error( e ) );

                const technews = axios.get( 'https://newsapi.org/v2/top-headlines?sources=techcrunch&sortBy=popularity&apiKey=c7024ffb8f944c9380bd7773981dfbc5' )
                    .then( res =>
                    {
                        const postsArray = []
                        for ( const key in res.data )
                        {
                            postsArray.push( { ...res.data[ key ], id: key } )
                        }
                        vuexContext.commit( 'setTechNews', postsArray )
                    } )
                    .catch( e => context.error( e ) );

                const topnews = axios.get( 'https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&sortBy=popularity&apiKey=c7024ffb8f944c9380bd7773981dfbc5' )
                    .then( res =>
                    {
                        const postsArray = []
                        for ( const key in res.data )
                        {
                            postsArray.push( { ...res.data[ key ], id: key } )
                        }
                        vuexContext.commit( 'setTopNews', postsArray )
                    } )
                    .catch( e => context.error( e ) );

                return axios.all( [ weather, technews, topnews, post ] );
            }
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
            setBlog ( state, value )
            {
                state.blogData = value;
            }
        }
    } );
}

export default store;