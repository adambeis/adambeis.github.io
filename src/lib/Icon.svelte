<script>
	import svelte from '../assets/svelte.png';
	import solidity from '../assets/solidity.png';
	import tailwindcss from '../assets/tailwindcss.png';
	import truffle from '../assets/truffle.png';
	import ganache from '../assets/ganache.png';
	import html from '../assets/html.png';
	import css from '../assets/css.png';
	import js from '../assets/js.png';
	import nodejs from '../assets/nodejs.png';
	import ipfs from '../assets/ipfs.png';
	import metamask from '../assets/metamask.png';
	import web3js from '../assets/web3js.svg';
	import ethers from '../assets/ethersjs.png';
	import remix from '../assets/remix.png';
	import hardhat from '../assets/hardhat.png';
	import github from '../assets/github.png';
	import telegram from '../assets/telegram.png';
	import npm from '../assets/npm.png';
	import git from '../assets/git.png';

	import logo from '../assets/ab_logo.svg';

	export let icon;

	let iconClass = 'w-full h-full img-bnw';
</script>

<div class="icon hover:bg-white rounded-full w-16 h-16 p-3">
	{#if icon == 'svelte'}
		<img src={svelte} class={iconClass} alt="" />
	{:else if icon == 'solidity'}
		<img src={solidity} class="h-full w-auto m-auto img-negative" alt="" />
	{:else if icon == 'tailwindcss'}
		<img src={tailwindcss} class={iconClass} alt="" />
	{:else if icon == 'truffle'}
		<img src={truffle} class={iconClass} alt="" />
	{:else if icon == 'ganache'}
		<img src={ganache} class={iconClass} alt="" />
	{:else if icon == 'html'}
		<img src={html} class="w-full h-full m-auto img-negative-bnw" alt="" />
	{:else if icon == 'css'}
		<img src={css} class="h-full w-auto m-auto img-negative-bnw" alt="" />
	{:else if icon == 'js'}
		<img src={js} class="w-full h-full img-bnw" alt="" />
	{:else if icon == 'nodejs'}
		<div class="w-full h-full grid bg-white">
			<img src={nodejs} class="w-full h-auto m-auto img-bnw" alt="" />
		</div>
	{:else if icon == 'ipfs'}
		<img src={ipfs} class={iconClass} alt="" />
	{:else if icon == 'metamask'}
		<img src={metamask} class={iconClass} alt="" />
	{:else if icon == 'web3js'}
		<img src={web3js} class="w-full h-full img-negative" alt="" />
	{:else if icon == 'ethers'}
		<img src={ethers} class={iconClass} alt="" />
	{:else if icon == 'remix'}
		<img src={remix} class={iconClass} alt="" />
	{:else if icon == 'hardhat'}
		<img src={hardhat} class={iconClass} alt="" />
	{:else if icon == 'github'}
		<img src={github} class="" alt="" />
	{:else if icon == 'telegram'}
		<img src={telegram} class="" alt="" />
	{:else if icon == 'logo'}
		<img src={logo} class="w-full h-full img-negative" alt="" />
	{:else if icon == 'npm'}
		<div class="w-full h-full grid bg-white">
			<img src={npm} class="w-full h-auto m-auto img-bnw" alt="" />
		</div>
	{:else if icon == 'git'}
		<img src={git} class={iconClass} alt="" />
	{/if}
</div>
