<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scorll",
    data() {
      return {
        scroll: null
      }
    },
    props:{
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      //this.$nextTick(()=>{
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        pullUpLoad:this.pullUpLoad,
        probeType: this.probeType,
      })
      //this.scroll.scrollTo(0, 0)
      this.scroll.on('scroll', (position) => {
        //console.log(position);
        this.$emit('scroll',position)
      })
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
      // setTimeout(()=>{
      //   console.log(this.scroll)
      //   this.scroll.scrollTo(0,200,1000)
      // })
      //})
    },
    methods: {
      scrollTo(x, y, time = 300) {
        this.scroll.scrollTo(x, y, time)
        console.log(".............")
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>
