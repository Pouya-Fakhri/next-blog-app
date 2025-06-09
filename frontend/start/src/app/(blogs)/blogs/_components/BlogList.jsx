import axios from "axios";
import Link from "next/link";

async function BlogList() {
  const respons = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`).then(({ data }) => data);
  const {data: { posts }} = await respons

  console.log(posts);

  return (
    <>
    <div>
        {posts.map((post)=>{
            return (
                <div>
                     <div>{post.title}</div>
                </div>
            )
        })}
    </div>
    </>
  );
}
export default BlogList;
