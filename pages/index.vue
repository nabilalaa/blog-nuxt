<template>
	<section class="py-20" v-if="posts">
		<div class="container">
			{{ posts }}
			<div class="lg:flex gap-4 lg:h-[35rem] h-full">
				<Post
					class="lg:w-[60%] lg:h-full w-full h-96"
					v-for="post in posts.articles.slice(0, 1)"
					:key="post"
					:image="`http://127.0.0.1:8000/media/${post.image}`"
					:title="post.title"
					:to="'posts/1'"
				/>
				<!-- <Post
					v-for="post in posts?.data.slice(0, 1)"
					:key="post"
					:image="
						'https://blog-backend-strapi.onrender.com' +
						post.attributes.cover.data[0].attributes.url
					"
					class="lg:w-[60%] lg:h-full w-full h-96"
					:title="post.attributes.title"
					:to="`posts/${post.id}`"
					:date="post.attributes.createdAt.slice(0, 10)"
				/> -->

				<!-- <post
					v-for="post in posts.data?.slice(0, 1)"
					:key="post"
					class="lg:w-[60%] lg:h-full w-full h-96"
					:image="
						'https://blog-backend-strapi.onrender.com' +
						post.attributes.cover.data[0].attributes.url
					"
					:to="`posts/${post.id}`"
					:title="post.attributes.title"
					:date="post.attributes.createdAt.slice(0, 10)"
				/> -->
				<div
					class="lg:flex lg:gap-y-4 lg:flex-col flex-col lg:w-1/2 lg:h-full h-full"
				>
					<!-- <Post
						class="lg:w-full lg:h-1/2 w-full h-[400px] lg:my-0 my-4"
						v-for="post in posts.articles.slice(1, 3)"
						:key="post"
						:image="`http://127.0.0.1:8000/media/${post.image}`"
						:title="post.title"
						:to="`posts/${post.title}`"
					/> -->
					<!-- <Post
						class="lg:w-full lg:h-1/2 w-full h-[400px] lg:my-0 my-4"
						v-for="post in posts.slice(1, 3)"
						:key="post"
						:title="post.title"
						:to="`posts/${post.id}`"
					/> -->

					<!-- <Post
						v-for="post in posts.data?.slice(1, 3)"
						:key="post"
						class="lg:w-full lg:h-1/2 w-full h-[400px] lg:my-0 my-4"
						:image="
							'https://blog-backend-strapi.onrender.com' +
							post.attributes.cover.data[0]
								.attributes.url
						"
						:to="`posts/${post.id}`"
						:title="post.attributes.title"
						:date="
							post.attributes.createdAt.slice(0, 10)
						"
					/> -->
					<!-- <Post
						v-for="post in posts?.slice(1, 3)"
						:key="post"
						class="lg:w-full lg:h-1/2 w-full h-[400px] lg:my-0 my-4"
						:image="
							post._embedded['wp:featuredmedia']
								? post._embedded[
										'wp:featuredmedia'
								  ][0].source_url
								: ''
						"
						:to="`posts/${post.id}`"
						:title="post.title.rendered"
						:date="post.date.slice(0, 10)"
					/> -->
				</div>
			</div>
		</div>
	</section>
	<section class="py-20">
		<div class="container">
			<div class="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full">
				<!-- <post
					v-for="post in posts"
					:key="post"
					class="h-[400px]"
					:title="post.title"
					:to="`posts/${post.id}`"
				/> -->
			</div>
		</div>
	</section>
</template>

<script setup>
const { data: posts } = await useFetch("http://127.0.0.1:8000/posts", {
	pick: ["articles"]
});
// console.log(posts);
// const { data: posts } = useFetch(
// 	"https://feline-rail.000webhostapp.com/wp-json/wp/v2/posts?_embed",
// 	{}
// );
// console.log(posts);
// import axios from "axios";
// export default {
// 	data() {
// 		return {
// 			posts: []
// 		};
// 	},
// 	mounted() {
// 		axios.get("http://127.0.0.1:8000/posts").then((response) => {
// 			this.posts = response.data;
// 			console.log(response.data);
// 		});
// 	}
// };
</script>

<style>
@import url("https://fonts.googleapis.com/earlyaccess/droidarabickufi.css");
body {
	background: #e2ffdb;
	font-family: "Droid Arabic Kufi", serif;
}
</style>
