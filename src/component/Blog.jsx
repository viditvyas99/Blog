import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchPost,    } from '../feature/post/PostSlice'
import { GetTags } from '../feature/tags/tagSlice'

const Blog = () => {
  const dispatch=useDispatch()
  const posts= useSelector((state)=>state.posts.data.posts)
  const tag = useSelector((state)=>state.tagList.tag)
  console.log(tag)
  useEffect(()=>{
    dispatch(FetchPost())
    dispatch(GetTags())
  },[dispatch])



  // console.log(posts)
  return(
    <div>
      <h1 className='text-center  text-[25px] font-bold  mb-10 ' key='1'>blog</h1>
      <div  className='flex flex-wrap gap-[10px] px-10 mx-auto '>
        {
          (!posts)?

          <>loading ...</>
          :
        
        posts.map((post)=>
        <div className='basis-[30%]  px-5 flex flex-col'>
          <div className='py-5 font-bold' >TITLE:{post.title}</div>
          <div>{post.body}</div>
        </div>
      )
      }
      </div>
    </div>
  )
}

export default Blog
