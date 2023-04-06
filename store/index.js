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
                const post = axios.get( process.env.USER_API )
                    .then( res =>
                    {
                        const postsArray = []
                        for ( const key in res.data )
                        {
                            postsArray.push( { ...res.data[ key ], id: key } )
                        }
                        vuexContext.commit( 'setBlog', postsArray )
                    } ).catch( e => context.error( e ) );

                const weather = axios.get( process.env.WEATHER_API )
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

                const technews = axios.get( process.env.TECH_API )
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

                const topnews = axios.get( process.env.NEWS_API )
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