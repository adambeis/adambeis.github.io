<script>
	import Icon from '$lib/Icon.svelte';
</script>

<div class="grid w-full h-full text-xl md:text-2xl text-center">
	<div class="m-auto pl-0 md:pl-10">
		<div class="grid tracking-wide space-y-1 mt-8">
			<span>Hi there, I'm <span class="font-bold md:text-3xl text-primary">Adam Beis.</span></span>
			<span>I am a Blockchain and Web Developer.</span>
			<span>I love Technology, Movies and Coding.</span>
		</div>
		<div class="mt-8 md:mt-10">
			<h1 class="">Things I Have Learned</h1>
			<div class="flex">
				<div class="flex m-auto">
					<div class="mt-3 flex space-x-2 grid grid-cols-2 md:grid-cols-4">
						<Icon icon="solidity" />
						<Icon icon="truffle" />
						<Icon icon="ganache" />
						<Icon icon="ipfs" />
						<Icon icon="web3js" />
						<Icon icon="ethers" />
						<Icon icon="metamask" />
						<Icon icon="remix" />
					</div>

					<div class="mt-2 flex space-x-2 grid grid-cols-2 md:grid-cols-4">
						<Icon icon="svelte" />
						<Icon icon="tailwindcss" />
						<Icon icon="html" />
						<Icon icon="css" />
						<Icon icon="js" />
						<Icon icon="nodejs" />
						<Icon icon="npm" />
						<Icon icon="git" />
					</div>
				</div>
			</div>
			<h1 class="mt-3">And Many More</h1>
		</div>
	</div>
</div>
