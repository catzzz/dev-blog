import fs from "fs";
import path from "path";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import matter from 'gray-matter'
import Link from 'next/link'
import Post from '@/components/Post'
// import { getPosts } from '@/lib/posts'

import {sortByDate} from '@/utils/index'
import { POSTS_PER_PAGE } from "@/config/index";
import Pagination from "@/components/Pagination";

export default function BlogPage({posts,numPages,currentPage}) {
  return (
    <Layout>
      <h1 className='text=5xl border-b-4 p-5 font-bold'>Blogs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, index) => 
          <Post key={index} post={post} />
        )}
      </div>
      <Pagination currentPage={currentPage} numPages={numPages}/>
    </Layout>
  );
}

export async function getStaticPaths() {
    
    const files = fs.readdirSync(path.join('posts'))
  
    const numPages = Math.ceil(files.length / POSTS_PER_PAGE)
  
    let paths = []
  
    for (let i = 1; i <= numPages; i++) {
      paths.push({
        params: { page_index: i.toString() },
      })
    }
  
    return {
      paths,
      fallback: false,
    }
  }
export async function getStaticProps({params}) {
    const page = parseInt((params && params.page_index) || 1)


  
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename),'utf-8')
    // console.log(markdownWithMeta)
    const {data:frontmatter} = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
    };

  });
  const numPages = Math.ceil(files.length/POSTS_PER_PAGE)
  const pageIndex = page - 1
  const orderedPosts = posts.sort(sortByDate).slice(pageIndex*POSTS_PER_PAGE,(pageIndex + 1)*POSTS_PER_PAGE)
  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage :page
    },
  };
}

