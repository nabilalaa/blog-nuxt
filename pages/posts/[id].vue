<template>
	<div>
		<!-- {{ post }} -->

		<article class="py-24">
			<div class="container">
				<h1 class="text-center">{{ post.title.rendered }}</h1>
				<p class="text-center">{{ post.date }}</p>

				<img
					class="m-auto w-1/2 my-8"
					:src="
						post._embedded['wp:featuredmedia']
							? post._embedded[
									'wp:featuredmedia'
							  ][0].source_url
							: ''
					"
					alt=""
				/>
				<div
					class="content"
					v-html="post.content.rendered"
				></div>
			</div>
		</article>
	</div>
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
// const url = "http://127.0.0.1:8000";

// const { data: post } = await useFetch(() => `${url}/posts/${id}`, {
// 	headers: {
// 		"Content-Type": "application/json",
// 		"Access-Control-Allow-Origin": "*"
// 	},
// 	mode: "no-cors",
// 	key: id,

// });
// const url = "https://django-api-blog.onrender.com";

// const { data: post } = await useFetch(() => url + "/posts/" + id);

// console.log(post);

// const url = "http://127.0.0.1:8000";

// const { data: post } = await useFetch(
// 	() => url + `/api/blogs/${id}?populate=image`
// );
// console.log(post);

const { data: post } = await useFetch(
	`https://feline-rail.000webhostapp.com/wp-json/wp/v2/posts/${id}?_embed`,
	{
		key: id
	}
);

// console.log(document.querySelector(".content"));
// const convertHtml = computed((content) => {
// 	document.querySelector(".content").innerHTML = content;
// });

// const users = await $fetch(
// 	`https://feline-rail.000webhostapp.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
// ).catch((error) => error.data);
// const pos = post.value.data[0];
</script>

<style scoped>
.content img {
	width: 50% !important;
}
.content ul {
	list-style-type: disc !important;
	list-style-position: inside !important;
}
.content ol {
	list-style-type: decimal !important;
	list-style-position: inside !important;
}
h1 {
	display: block;
	font-size: 2em;
	margin-top: 0.67em;
	margin-bottom: 0.67em;
	margin-left: 0;
	margin-right: 0;
	font-weight: bold;
}
h2 {
	display: block;
	font-size: 1.5em;
	margin-top: 0.83em;
	margin-bottom: 0.83em;
	margin-left: 0;
	margin-right: 0;
	font-weight: bold;
}
h3 {
	display: block;
	font-size: 1.17em;
	margin-top: 1em;
	margin-bottom: 1em;
	margin-left: 0;
	margin-right: 0;
	font-weight: bold;
}
h4 {
	display: block;
	margin-top: 1.33em;
	margin-bottom: 1.33em;
	margin-left: 0;
	margin-right: 0;
	font-weight: bold;
}
h5 {
	display: block;
	font-size: 0.83em;
	margin-top: 1.67em;
	margin-bottom: 1.67em;
	margin-left: 0;
	margin-right: 0;
	font-weight: bold;
}
h6 {
	display: block;
	font-size: 0.67em;
	margin-top: 2.33em;
	margin-bottom: 2.33em;
	margin-left: 0;
	margin-right: 0;
	font-weight: bold;
}
</style>
