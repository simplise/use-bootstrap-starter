import defaultNavs from "~/assets/json/navigations/default.json"

export default defineAppConfig({
    usebootstrap: {
        navigations: {
            default: defaultNavs,
        },
    }
})
