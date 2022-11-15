export default {
    name: "TheHeroThumb",

    props: {
        hero: Object
    },

    template: `
    <li>
        <div class="img_wrapper">
            <img :src='"images/" + hero.biopic' alt="hero img">
        </div>
        <span>{{hero.name}}</span>       
    </li>
    `
}