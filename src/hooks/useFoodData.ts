import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { foodData } from '../interface/foodData';

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<foodData[]> => {
    const response = axios.get(API_URL + "/foods" )
    return response;
}

export function useFoodData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}