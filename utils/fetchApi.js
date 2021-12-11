import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const {data} = await axios.get(url, {
        headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '530cf11fabmsh79e60c0e05c7b69p139c05jsna753fd49ae56'
        }

    })

    return data;
}