<script>
	import '../app.css';
	import { page } from '$app/stores';

	let open = 'hidden';
	let isOpen = false;

	const collapse = () => {
		isOpen = !isOpen;
		if (isOpen) open = '';
		else open = 'hidden';
	};

	const collapseMenu = (option) => {
		isOpen = option;
		if (isOpen) open = '';
		else open = 'hidden';
	};
</script>

<div class="relative h-full max-h-screen md:flex">
	<!-- mobile menu bar -->
	<div class="text-gray-100 flex justify-between md:hidden">
		<!-- logo -->
		<a href="/" on:click={() => collapseMenu(false)}>
			<div class="logo text-white text-left pl-4 pt-4 hover:text-primary cursor-pointer">
				<span class="block text-xl">Adam</span>
				<span class="block text-xl font-bold">Beis</span>
			</div>
		</a>

		<!-- mobile menu button -->

		<button
			on:click={collapse}
			class="mobile-menu-button p-4 transition duration-200 focus:outline-none focus:bg-primary"
		>
			{#if isOpen}
				<svg
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>
	</div>

	<div class={open} id="mobile-menu">
		<div class="px-2 pt-2 pb-3 space-y-1 text-center">
			<a
				href="/about"
				on:click={collapse}
				class="block px-3 py-2 rounded transition duration-200 hover:underline hover:bg-blue-700 hover:text-white  {$page
					.url.pathname === '/about'
					? 'underline'
					: ''}">About</a
			>

			<a
				href="/projects"
				on:click={collapse}
				class="block px-3 py-2 rounded transition duration-200 hover:underline hover:bg-blue-700 hover:text-white {$page
					.url.pathname === '/projects'
					? 'underline'
					: ''}">Projects</a
			>

			<a
				href="/contact"
				on:click={collapse}
				class="block px-3 py-2 rounded transition duration-200 hover:underline hover:bg-blue-700 hover:text-white {$page
					.url.pathname === '/contact'
					? 'underline'
					: ''}">Contact</a
			>
		</div>
	</div>

	<!-- content -->
	<div class="flex-1 p-0 md:p-6 md:pr-0">
		<slot />
	</div>

	<!-- sidebar -->
	<div
		class="sidebar uppercase space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
	>
		<!-- logo -->
		<a href="/">
			<div class="logo text-white text-right space-x-2 pl-4 pr-5 hover:text-primary cursor-pointer">
				<span class="block text-2xl">Adam</span>
				<span class="block text-2xl font-bold">Beis</span>
			</div>
		</a>

		<!-- nav -->
		<nav class="font-bold grid justify-items-end">
			<a
				href="/about"
				class="text-vertical block my-4 py-2.5 px-4 rounded transition duration-200 hover:underline hover:bg-blue-700 hover:text-white {$page
					.url.pathname === '/about'
					? 'underline'
					: ''}"
			>
				About
			</a>
			<a
				href="/projects"
				class="text-vertical block my-4 py-2.5 px-4 rounded transition duration-200 hover:underline hover:bg-blue-700 hover:text-white {$page.url.pathname.includes(
					'/projects'
				)
					? 'underline'
					: ''}"
			>
				Projects
			</a>
			<a
				href="/contact"
				class="text-vertical block my-4 py-2.5 px-4 rounded transition duration-200 hover:underline hover:bg-blue-700 hover:text-white {$page
					.url.pathname === '/contact'
					? 'underline'
					: ''}"
			>
				Contact
			</a>
		</nav>
	</div>
</div>
