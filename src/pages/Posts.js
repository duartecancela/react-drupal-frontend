import React,{useState, useEffect} from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts";

function Posts(props) {

    const [post, setPost] = React.useState(null);
    const [data, setData] = useState({results:[]});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios(URL);
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);
    
    console.log(data)

  return (
    <div className="Home">
        {isError && <div>Something went wrong ...</div>}

        {isLoading ? (
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        ) : 
        (
            <div>
                {data.map(item => (
                    <>
                        <h1>{item.title}</h1> 
                        <p>{item.body}</p>
                    </>
                ))}
            </div>
        )}
    </div>
  )
}


export default Posts
