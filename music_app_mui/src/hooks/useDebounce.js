import { useEffect } from "react";
import useTimeout from "./useTimeout";

/*
    This hook waits a certain amount of time after the user has stopped typing to call a function.
    This is useful for search bars where you don't want to call the API every time the user types a letter.
    Instead, you want to wait until the user has stopped typing for a certain amount of time before calling the API.
*/
export default function useDebounce(callback, delay, dependencies){
    const {reset, clear} = useTimeout(callback, delay);
    useEffect(reset, [...dependencies, reset]);
    useEffect(clear, []);
}