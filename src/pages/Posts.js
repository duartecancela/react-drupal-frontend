import React from 'react'
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Posts(props) {

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${baseURL}`).then((response) => {
          setPost(response.data);
        });
      }, []);

    if (!post) return "No post!"
    console.log(post)

  return (
    <div>
        {post.map(item => (
            <>
                <h1>{item.title}</h1> 
                <p>{item.body}</p>
            </>
        ))}
    </div>
  )
}


export default Posts
