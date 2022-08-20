<script>
	export let title;
	export let description;
	export let imgSrc;
	export let link;
	export let containerClass;
	export let imgClass;
</script>

<a class="space-y-2 hover:bg-primary rounded-lg p-4" href={link}>
	<h1 class="font-bold text-4xl">{title}</h1>
	<div class={containerClass}><img class={imgClass} src={imgSrc} alt="" /></div>
	<p class="text-2xl">{description}</p>
</a>
