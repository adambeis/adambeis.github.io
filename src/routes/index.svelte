<script>
	import Github from '$lib/icons/Github.svelte';
	import Telegram from '$lib/icons/Telegram.svelte';
	import Logo from '$lib/icons/Logo.svelte';
</script>

<div class="grid md:h-full md:flex">
	<div class="text-xl font-bold my-auto order-last md:order-first py-8 md:pr-6">
		<div class="flex md:grid space-x-1 md:space-x-0 w-fit m-auto">
			<h1 class="md:block">Blockchain</h1>
			<h1 class="md:block">& Web</h1>
			<h1>Developer</h1>
		</div>

		<div class="mt-0 md:mt-4 py-4">
			<div class="w-fit m-auto md:m-0 flex md:grid space-x-1 md:space-x-0 md:space-y-3 space-y-0">
				<a href="https://github.com/adambeis" target="_blank" rel="noopener noreferrer"
					><Github /></a
				>
				<a href="https://t.me/adambeis" target="_blank" rel="noopener noreferrer"><Telegram /></a>
			</div>
		</div>
	</div>
	<div class="flex order-first md:order-last w-full">
		<div class="glowing-circle rounded-full border border-8 border-primary m-auto p-10">
			<Logo logoClass="w-[300px] h-[300px] md:w-[384px] md:h-[384px] fill-primary m-auto" />
		</div>
	</div>
</div>
