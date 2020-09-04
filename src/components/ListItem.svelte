<script>
    export let thumb = "null";
    export let title = "null"
    export let desc = "null"
    export let link = "null"
</script>

<style lang="sass">
    .main-div
      padding: 10px
      overflow: auto
      margin-right: 12px
      min-width: 21em
      margin-top: 10%
    .title
      font-size: 32px
    .desc
      font-size: 23px
</style>

<div class="shadow w-1/4 main-div">
    <div class="md:flex-shrink-0">
        <img class="rounded-lg w-16 h-16" src={thumb} alt="thumbnail">
    </div>
    <div class="mt-4 md:mt-0 md:ml-6 float-left">
        <a href={link} class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline title">{title}</a>
        <p class="mt-2 text-gray-600 desc">{desc}</p>
    </div>
</div>
