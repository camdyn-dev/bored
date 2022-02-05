const actButton = document.querySelector("#getActivity")
const actDisplay = document.querySelector("#activityDisplay")
const actForm = document.querySelector("#activityForm")
const actOpts = document.querySelector("#actOpts")


actForm.addEventListener("submit", async (e) => {
    console.log(actForm)
    e.preventDefault()
    const params = constructParams(actOpts)
    console.log(params)
    const res = await fetch(`http://www.boredapi.com/api/activity/${params}&participants=1`)
    const act = await res.json()
    console.log(act)
    actDisplay.innerText = act.activity
})

//yes, this code looks like absolute fucking AIDS, but originally I had the idea of fleshing this out into something larger, with participants, accessibility, larger price, etc, but the API doesn't really have a whole lot of options other than type and price (for example, busywork doesn't have any multi-person activities)
const constructParams = (ops) => {
    let params = `?`
    for (i = 0; i < ops.children.length; i++) {
        params += (ops.children[i].value === "any") ? "" : `&${ops.children[i].attributes.name.value}=${ops.children[i].value}`
    }
    return params
}