// import { server } from "../config";

// export default function Home({ articles }) {
//   return (
//     <>
//       <p className="text-xl md:text-2xl text-white"> Welcome to my Blog </p>
//       {articles}
//     </>
//   );
// }


// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
