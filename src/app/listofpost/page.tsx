import Image from "next/image"

const getPostsData = async () => {
    const res = await fetch("https://jsonplaceholder.org/posts")
    return res.json()
}

const getUserData = async () => {
    const res = await fetch("https://jsonplaceholder.org/users")
    return res.json()
}

const getDogData = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random")
    return res.json()
}

export default async function ListOfPost () {
    const [posts,users,dog] = await Promise.all([
        getPostsData(), 
        getUserData(), 
        getDogData()])
    // console.log(users)
    return (
        <div>
            <Image src={dog.message} alt="dog" width={300} height={300}/>

            {posts.map((post : any) =>
            {
                return <p>{post.title}</p>
            })}

            <div>
                {users.map((user :any)=> {
                    return(
                        <p>{user.name}</p>
                    )
                })}
            </div>
        </div>
    ) 
}