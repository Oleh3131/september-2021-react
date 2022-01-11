

const Post = (props)=>{

    const {id,userId,title,body} = props;


    return (
        <div>
            <h1>id:{id}</h1>
            <h2>userId:{userId}</h2>
            <p>title:{title}</p>
            <p>body:{body}</p>
        </div>
    )
}
export default Post;