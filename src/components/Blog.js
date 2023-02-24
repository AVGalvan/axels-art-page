import React, {Suspense} from "react";
import { blogPostData } from "./Helper";
const BlogPost = React.lazy(() => import("./BlogPost"))

export default function Blog () {


// Each object in blogposts array is made into a blog post by passing 
// the Hepler component data into the BlogPost component and then mapped into
// an array of elements ready for rendering
  let blogPosts = blogPostData.map((post)=>{
    return(
      <Suspense>
        <BlogPost
        title={post.title}
        text={post.text}
        pictures={post.pictures}
        />
      </Suspense>
    )
  })


  return(
    <div className="blog">
      {blogPosts}
    </div>
  )
}