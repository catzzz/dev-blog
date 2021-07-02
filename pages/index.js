import fs from "fs";
import path from "path";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import matter from 'gray-matter'
export default function HomePage() {
  return (
    <Layout>
      <h1>Homepage</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const post = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename),'utf-8')
    // console.log(markdownWithMeta)
    const {data:frontmatter} = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
    };

  });
  console.log(post);
  return {
    props: {
      posts
    },
  };
}
