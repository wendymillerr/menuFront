import axios, { AxiosPromise } from "axios"
import { foodData } from "../interface/foodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const postData = async (data: foodData): AxiosPromise<unknown> => {
    const response = axios.post(API_URL + "/post", data )
    console.log(data)
    return response;
}

export function useFoodDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
        queryClient.invalidateQueries(['food-data']);
    }
    })

    return mutate;
}