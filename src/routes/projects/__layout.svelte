<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	function routeToPage(route, replaceState) {
		goto(`/${route}`, { replaceState });
	}
</script>

<div class="h-full flex flex-col">
	<slot />
	<div class="mt-6 md:mt-8 text-center">
		<button
			title="Lottery App"
			on:click={() => {
				routeToPage('projects/LotteryApp', false);
			}}
			class="bg-[#f87171] h-8 w-8 md:h-5 md:w-5 rounded border border-4 {$page.url.pathname ===
			'/projects/LotteryApp'
				? 'border-primary'
				: 'border-transparent'}"
		/>

		<button
			title="Serpent NFT Game"
			on:click={() => {
				routeToPage('projects/Serpent', false);
			}}
			class="mx-1 bg-[#99f45d] h-8 w-8 md:h-5 md:w-5 rounded border border-4 {$page.url.pathname ===
			'/projects/Serpent'
				? 'border-primary'
				: 'border-transparent'}"
		/>

		<button
			title="Election App"
			on:click={() => {
				routeToPage('projects/ElectionApp', false);
			}}
			class="bg-[#87aade] h-8 w-8 md:h-5 md:w-5 rounded border border-4 {$page.url.pathname ===
			'/projects/ElectionApp'
				? 'border-primary'
				: 'border-transparent'}"
		/>
	</div>
</div>
