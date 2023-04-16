import { BlogsContext } from "../context/BlogsContext";
import { useContext } from "react";

export default function useBlogsContext() {
    const context = useContext(BlogsContext)
    if(!context){
        throw Error("useBlogsContext must be inside BlogsContextProvider")
    }
    return context
}