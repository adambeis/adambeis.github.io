<script context="module">
	export async function load({ params }) {
		let project = params.id;
		let type = project === 'Serpent' ? 'png' : 'svg';
		let img = (await import(`../../assets/${project}.${type}`)).default;
		let bg;
		switch (project) {
			case 'LotteryApp':
				bg = 'bg-[#f87171]';
				break;
			case 'Serpent':
				bg = 'bg-[#111826]';
				break;
			case 'ElectionApp':
				bg = 'bg-[#2a4b8d]';
				break;
			default:
				bg = 'bg-white';
				break;
		}
		return { props: { project, img, bg } };
	}
</script>

<script>
	import projects from '../../constants.json';

	export let project;
	export let img;
	export let bg;
</script>

<div class="grid grid-cols-1 md:grid-cols-3 md:gap-2 text-center m-auto px-4 pt-2 md:pt-8">
	<div class="grid m-auto">
		<div class="w-1/2 md:w-full m-auto"><img class="rounded-lg {bg}" src={img} alt="" /></div>
	</div>
	<div class="text-xl text-center col-span-2 rounded-lg pt-2 m-auto">
		<h1 class="font-bold text-2xl">{projects[project].title}</h1>
		<p class="m-auto md:w-3/5 md:mt-4">{projects[project].description}</p>
		<div class="mt-4 md:mt-8">
			<h1 class="font-bold">Languages</h1>
			<div class="md:mt-4">
				{#each projects[project].languages as language}
					<span class="mx-1">{language}</span>
				{/each}
			</div>
		</div>
		<div class="mt-4 md:mt-8">
			<a
				class="px-2 py-1 rounded-lg bg-white text-black hover:bg-primary hover:text-white inline-flex items-center"
				target="_blank"
				href={projects[project].repo}
			>
				<svg
					role="img"
					class="rounded-full w-8 h-8 cursor-pointer"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><title>GitHub</title><path
						d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
					/></svg
				>
				<span class="ml-1">Repo</span>
			</a>
			<a
				class="px-2 py-1 rounded-lg bg-white text-black hover:bg-primary hover:text-white inline-flex items-center"
				target="_blank"
				href={projects[project].demo}
			>
				<svg
					class="rounded-full w-8 h-8 cursor-pointer"
					viewBox="0 0 576 512"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
					/></svg
				>
				<span class="ml-1">Demo</span>
			</a>
		</div>
	</div>
</div>
