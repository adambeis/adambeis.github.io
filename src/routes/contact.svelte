<script>
	let email;
	let message;
	let notificationMsg;
	let showNotification;

	const clearMsg = () => {
		notificationMsg = '';
		showNotification = false;
	};

	const notification = (msg) => {
		notificationMsg = msg;
		showNotification = true;
		setTimeout(clearMsg, 6000);
	};

	const handleSubmit = async () => {
		if (!email || !message) {
			notification('Email and Message required');
			return;
		}

		const submit = await fetch('https://formspree.io/f/mdojoylq', {
			method: 'POST',
			body: JSON.stringify({ email, message }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (submit.ok) {
			email = '';
			message = '';
			notification('Email has been sent');
		} else {
			notification('Error!. Email has not been sent');
		}
	};
</script>

<div class="h-full w-full grid grid-rows-5">
	<div class="row-span-1">
		<div class="w-full text-xl text-primary">
			{#if showNotification}
				<p class="bg-white w-fit m-auto p-2 rounded">{notificationMsg}</p>
			{/if}
		</div>
	</div>
	<div class="row-span-4">
		<form class="grid m-auto w-fit" on:submit|preventDefault={handleSubmit}>
			<h1 class="m-auto text-3xl uppercase font-bold text-primary">Get in touch</h1>
			<label class="grid mt-8">
				Email
				<input
					class="text-black mt-2 w-72 py-1 px-2"
					type="email"
					name="email"
					bind:value={email}
				/>
			</label>
			<label class="grid mt-6">
				Message
				<textarea class="text-black mt-2 w-72 py-1 px-2" name="message" bind:value={message} />
			</label>
			<button
				class="mt-6 y-4 py-2.5 px-4 rounded font-bold transition duration-200 hover:underline bg-primary text-white"
				type="submit">Send</button
			>
		</form>
	</div>
</div>
