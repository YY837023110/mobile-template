<template lang="pug">
    .index
        h1 {{msg}}

</template>


<script>
import { getIndex, Login } from "./../api";
export default {
    name: "Index",
    data() {
        return {
            msg: "使用pug 跟 stylus"
        };
    },
    created() {
        
        // getIndex({}, res => {
        //     console.log(res);
        // });
        // Login({
        //     'name':'aaa',
        //     'pwd':'123456789'
        // },res=>{
        //     console.log(res)
        // })
    },
    components: {},
    computed: {},
    mounted() {

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1 {
    color: #ff0000;
}
</style>

