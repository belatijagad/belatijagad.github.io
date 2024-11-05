<script>
    // @ts-nocheck
    import Github from 'virtual:icons/mdi/github';
    import Linkedin from 'virtual:icons/mdi/linkedin';
    import Twitter from 'virtual:icons/mdi/twitter';
    import { onMount } from 'svelte';
    
    let lastScrollY = 0;
    let hideHeader = false;
    const scrollUpThreshold = 25;

    onMount(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDiff = lastScrollY - currentScrollY;

            hideHeader = (currentScrollY > 50 && scrollDiff < 0) || (hideHeader && scrollDiff <= scrollUpThreshold);
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<header class="w-full py-4 fixed top-0 border-b border-gray-200 bg-white bg-opacity-50"
    class:hide={hideHeader} class:show={!hideHeader}>
    <div class="container mx-auto flex flex-row items-center justify-between">
        <div class="flex flex-row">
            <a href="https://github.com/belatijagad" target="_blank" class="text-2xl">
                <Github />
            </a>
            <a href="https://linkedin.com/in/belati-jagad" target="_blank" class="text-2xl">
                <Linkedin />
            </a>
            <a href="https://x.com/belatijagad" target="_blank" class="text-2xl">
                <Twitter />
            </a>
        </div>
        <div>
            Reach out to me
        </div>
    </div>
</header>

<style>
    .hide {
        transform: translateY(-100%);
        transition: transform 0.3s ease-in-out;
    }
    .show {
        transform: translateY(0);
        transition: transform 0.3s ease-in-out;
    }
    header a {
        margin-right: 1rem;
    }
</style>