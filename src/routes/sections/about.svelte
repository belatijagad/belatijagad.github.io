<script>
    import me from '$lib/assets/me.png';
    export let id;
</script>

<section {id} class="h-screen container mx-auto">
    <div class="grid grid-cols-12 gap-8 h-full items-center">
        <div class="col-span-5">
            <img src={me} class="rounded-lg" alt="me"/>
        </div>
        <div class="col-span-7 flex flex-col justify-center gap-8">
            <h2 class="text-4xl">Here's a piece of <span class="underline decoration-amber-200">my story</span>...</h2>
            <p class="text-lg text-neutral-600">
                I'm a <span class="text-gradient from-red-600 to-blue-600">Computer Science</span> Undergraduate at <span class="text-gradient from-amber-500 to-yellow-400">Universitas Indonesia</span>. 
                I do machine learning side projects on my free time and I love to mess around using <span class="text-orange-600">PyTorch</span> for NLP and Computer Vision tasks.
                Currently doing one-project-a-week to sharpen my skills and grow my imaginations.
                This site will be where I'll showcase my fun little projects at.
            </p>
        </div>
    </div>
</section>