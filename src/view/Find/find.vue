<template>
    <div id="find">
        <topNav />
        <router-view />
    </div>
</template>
<script>
import topNav from '../../components/topNav.vue'
export default {
    name:"find",
    components:{
        topNav
    }
}
</script>