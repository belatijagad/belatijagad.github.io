<script lang="ts">
    export let imgSrc: string = "default";
    export let position: string;
    export let organization: string;
    export let period: string;
    export let description: string;
</script>

<div class="w-[384px] h-[512px] rounded-lg overflow-hidden border shadow-lg">
    <slot>
        <div class="h-64 overflow-hidden rounded-t-lg">
            {#if imgSrc != "default"}
                <img src={`/assets/experience/${imgSrc}`} alt={position} class="w-full h-full object-cover" />
            {:else}
                <div class="aspect-video bg-gray-300 h-full"></div>
            {/if}
        </div>
    </slot>
    <div class="p-6 space-y-2">
        <div>
            <h1 class="text-xl font-semibold text-gray-800">{@html position}</h1>
            <h2 class="text-lg font-medium text-gray-600">{organization}</h2>
            <h3 class="text-sm font-light text-gray-500">{period}</h3>
        </div>
        <p class="text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
</div>