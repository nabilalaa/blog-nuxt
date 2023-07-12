<template>
	<section class="py-20">
		<div class="container">
			<!-- {{ posts }} -->
			<div class="lg:flex gap-4 lg:h-[35rem] h-full">
				<Post
					v-for="post in posts?.slice(0, 1)"
					:key="post"
					class="lg:w-[60%] lg:h-full w-full h-96"
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
				/>
				<!-- <ClientOnly
					fallback-tag="span"
					fallback="Loading on server..."
				> -->
				<!-- <Post
					class="lg:w-[60%] lg:h-full w-full h-96"
					v-for="post in posts.slice(0, 1)"
					:key="post"
					:image="`https://django-api-blog.onrender.com/${post.image}`"
					:title="post.title"
					:to="`posts/${post.title}`"
				/> -->
				<!-- </ClientOnly> -->
				<!-- <Post
					class="lg:w-[60%] lg:h-full w-full h-96"
					v-for="post in posts.slice(0, 1)"
					:key="post"
					:image="`http://127.0.0.1:8000/${post.image}`"
					:title="post.title"
					:to="`posts/${post.title}`"
				/> -->
				<!-- <Post
					v-for="post in posts?.data.slice(0, 1)"
					:key="post"
					:image="
						'https://blog-backend-strapi.onrender.com' +
						post.attributes.image.data[0].attributes.url
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
// const posts = ref();
// async function getPosts() {
// 	await $fetch("http://127.0.0.1:8000/posts")
// 		.then((response) => {
// 			console.log(response);
// 			posts.value = response;
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// }

// const url = "http://127.0.0.1:8000";

// const { data: posts } = await useFetch(() => url + "/posts", {});

// const url = "https://django-api-blog.onrender.com";

// const { data: posts } = await useFetch(() => url + "/posts");

// console.log(posts);
// console.log(posts);
// console.log(posts);
const { data: posts } = useFetch(
	"https://feline-rail.000webhostapp.com/wp-json/wp/v2/posts?_embed",
	{}
);
// import axios from "axios";
// export default {
// 	data() {
// 		return {
// 			posts: []
// 		};
// 	},
// 	mounted() {
// 		axios.get("https://django-api-blog.onrender.com/posts").then(
// 			(response) => {
// 				this.posts = response.data;
// 				console.log(response.data);
// 			}
// 		);
// 	}
// };
</script>

<style></style>
