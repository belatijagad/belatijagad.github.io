<script>
    import me from '$lib/assets/me.png';
    export let id;
</script>

<section {id} class="h-screen container mx-auto flex flex-col text-center justify-center gap-4">
    <img src={me} class="w-[250px] h-[250px] rounded-full mx-auto" alt="me" />
    <h1 class="text-4xl">Future Research Scientist</h1>
    <p>Hello, my name is Abel.</p>
    <div class="flex flex-row mx-auto gap-x-16">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
    </div>
</section>