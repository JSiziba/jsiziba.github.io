<script lang="ts">
  export var name: string;
  export var link: string = "#";
</script>

<a target="_blank" class="text-[14px] whitespace-nowrap hidden lg:flex text-sylphrena-cyan items-center gap-1 bg-windrunner-blue-primary bg-opacity-10 px-10 h-[37px] rounded-[18px]" href={link}>
  {name}
</a>

<a class="text-[14px] block lg:hidden whitespace-nowrap" href={link}>
  {name}
</a>