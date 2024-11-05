<script>
	import Card from "$lib/components/experienceCard.svelte";
    import { experiences } from "$lib/data/experienceData.ts";
    export let id;
</script>

<section {id} class="h-screen container mx-auto flex flex-col justify-center gap-8">
    <h1 class="text-center text-4xl">My journey</h1>
    <div class="flex flex-row justify-center gap-16">
        {#each experiences as experience}
            <Card 
                imgSrc={experience.imgSrc}
                position={experience.position}
                organization={experience.organization}
                period={experience.period}
                description={experience.description}
            />
        {/each}
    </div>
</section>