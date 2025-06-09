// import PostList from "../_components/PostList";

import { Suspense } from "react";
import BlogList from "../_components/BlogList";



async function BlogPage() {


  return (
    <>
      
      <Suspense  >
        <BlogList />
      </Suspense>
     
    </>
  );
}
export default BlogPage;


