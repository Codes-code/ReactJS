import axios from 'axios';

// Creating an instance of the axios client, with my auth ID. will call this using 'unsplash.get'

export default axios.create(
    {
        headers: {Authorization : 'Client-ID euvETru-dyZew23SFLrejHKJLSXynaR0brs4fDw68Ms'},
        baseURL: 'https://api.unsplash.com'
    }
)

