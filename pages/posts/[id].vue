<template>
	{{ post }}
</template>

<script setup>
// import axios from "axios";
// export default {
// 	mounted() {
// 		this.getPost();
// 	},
// 	methods: {
// 		getPost() {
// 			axios.get(
// 				`http://localhost:1337/api/blogs[slug][$eq]=${this.slug.slug}`
// 			).then((response) => {
// 				this.post = response.data.data[0];
// 				console.log(response.data.data[0]);
// 			});
// 		}
// 	},
// 	data() {
// 		return {
// 			slug: this.$route.params,
// 			post: ""
// 		};
// 	}
// };

// const movie_id = useRoute().params.id;

// const { data: movie } = await useFetch(
// 	`https://api.themoviedb.org/3/movie/${movie_id}`,
// 	{
// 		headers: {
// 			Authorization:
// 				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDE2ZmExMzA2YWM2ZTg0OGYyYjU5OTIwMWUxNWU1NSIsInN1YiI6IjY0OWFlMzdkYTZkZGNiMDBjNjllZDI2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mOChB4cP_qoPOw4MF1Q7M5p9gK8dkWbDrCdvkcB3ZGs"
// 		}
// 	}
// );
// const { id } = useRoute().params;
// const { data: post } = await useFetch(`http://127.0.0.1:8000/posts`, {
// 	pick: ["articles"]
// });

const id = useRoute().params.id;
const url = "https://blog-backend-strapi.onrender.com";

const { data: post } = await useFetch(`${url}/api/blogs/${id}`, {});

// const { data: post } = await useFetch(
// 	`https://feline-rail.000webhostapp.com/wp-json/wp/v2/posts/${id}?_embed`,
// 	{
// 		key: id
// 	}
// );

// console.log(document.querySelector(".content"));
// const convertHtml = computed((content) => {
// 	document.querySelector(".content").innerHTML = content;
// });

// const users = await $fetch(
// 	`https://feline-rail.000webhostapp.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
// ).catch((error) => error.data);
// const pos = post.value.data[0];
</script>

<style></style>
