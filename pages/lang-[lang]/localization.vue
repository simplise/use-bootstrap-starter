<template>
    <Head>
        <Localization>
            <template #en>
                <PageMeta title="Localization" description="Make your site multilingual with <Localization>" />
            </template>
            <template #ja>
                <PageMeta title="Localization" description="<Localization>を用いて多言語に対応するサイトを作りましょう。" />
            </template>
        </Localization>
    </Head>
    <DocsIntro />
    <Localization>
        <template #en>
            <h2>Hi! This is English</h2>
        </template>
        <template #ja>
            <h2>こんにちは! This is Japanese</h2>
        </template>
    </Localization>
</template>