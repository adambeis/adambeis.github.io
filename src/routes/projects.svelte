<script>
	import { page } from '$app/stores';
	import lottery from '../assets/LotteryApp.svg';
	import vote from '../assets/ElectionApp.svg';
	import serpent from '../assets/Serpent.png';
	import Project from '../lib/Project.svelte';
</script>

<div class="flex h-full">
	<div class="grid md:grid-cols-3 gap-4 text-center m-auto px-4 bg-black">
		<Project
			title="Lottery"
			description="Lottery App"
			imgSrc={lottery}
			link={`${$page.url.pathname}/LotteryApp`}
			containerClass="w-full"
			imgClass="m-auto"
		/>
		<Project
			title="Serpent"
			description="Serpent NFT Game"
			imgSrc={serpent}
			link={`${$page.url.pathname}/Serpent`}
			containerClass="w-full"
			imgClass="m-auto rounded-full"
		/>
		<Project
			title="Vote"
			description="Votting App"
			imgSrc={vote}
			link={`${$page.url.pathname}/ElectionApp`}
			containerClass="w-full"
			imgClass="m-auto"
		/>
	</div>
</div>
