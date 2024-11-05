<script>
	import Card from "$lib/components/experienceCard.svelte";
    import { experiences } from "$lib/data/experienceData.ts";
    export let id;
</script>

<section {id} class="h-screen container mx-auto">
    <h1 class="text-center">Experience</h1>
    <div>
        {#each experiences as experience}
            <Card 
                position={experience.position}
                organization={experience.organization}
                period={experience.period}
                description={experience.description}
            />
        {/each}
    </div>
</section>