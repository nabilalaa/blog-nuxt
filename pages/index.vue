<template>
	<section class="py-10">
		<div class="container">
			<div class="flex justify-between items-center">
				<div class="flex items-center">
					<div class="provider py-8 ml-4">
						آخر افلام Netflix
					</div>
					<img
						class="w-20 h-20"
						src="../assets/images/logo__netflix.png"
						alt=""
					/>
				</div>
				<NuxtLink
					class="p-2 px-4 rounded-xl border-2 border-mainColor text-xs font-bold hover:bg-mainColor hover:text-secondaryColor"
					>شاهد المزيد</NuxtLink
				>
			</div>
			<div
				class="grid lg:grid-cols-5 gap-4 sm:grid-cols-2 grid-cols-1"
			>
				<div v-for="movie in movies.results" :key="movie">
					<div class="image mb-4">
						<img
							class="m-auto"
							:src="`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`"
							alt=""
						/>
					</div>
					<h2 class="font-bold text-lg mb-4">
						{{ movie.original_title }}
					</h2>
					<p>{{ movie.overview }}</p>

					<NuxtLink :to="String(movie.id)">تفاصيل</NuxtLink>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const { data: movies } = await useFetch(
	"https://api.themoviedb.org/3/movie/popular",
	{
		headers: {
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDE2ZmExMzA2YWM2ZTg0OGYyYjU5OTIwMWUxNWU1NSIsInN1YiI6IjY0OWFlMzdkYTZkZGNiMDBjNjllZDI2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mOChB4cP_qoPOw4MF1Q7M5p9gK8dkWbDrCdvkcB3ZGs"
		},
		pick: ["results"]
	}
);
</script>

<style>
@import url("https://fonts.googleapis.com/earlyaccess/droidarabickufi.css");
body {
	background: #e2ffdb;
	font-family: "Droid Arabic Kufi", serif;
}
</style>
