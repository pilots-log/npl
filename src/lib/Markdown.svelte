<script lang="ts">
    import { default as SvelteMarkdown, type SvelteMarkdownOptions } from "@humanspeak/svelte-markdown"
    import type { Tokens, TokensList } from "marked"

    const { source, headers = $bindable() }: { source: string, headers: string[] } = $props()
    const options: SvelteMarkdownOptions = {
        gfm: true,
    }

    function parsed(tokens: TokensList) {
        tokens.filter((t): t is Tokens.Heading => t.type === 'heading').map(t => ({ depth: t.depth, text: t.text }))
    }
</script>

<SvelteMarkdown {source} {options} />