<script setup>
import ProjectPreview from "../components/ProjectPreview.vue";
</script>

<template>
  <main>
    <ProjectPreview cover="projects/summary/portada.jpg" title="Summary (Illustration)" desc="Personal work"
      url="https://www.artstation.com/artwork/3qbggg" />
    <ProjectPreview cover="projects/swordtember/portada.jpg" title="Swordtember 2021 (Concept Art)"
      desc="Prop design of 30 swords following Faith Schaffer's prompt list"
      url="https://www.artstation.com/artwork/Eaw8Lv" />
    <ProjectPreview cover="@/assets/img/projects/summary/portada.jpg" title="Summary (Illustration)"
      desc="Personal work" url="https://www.artstation.com/artwork/3qbggg" />
    <ProjectPreview cover="@/assets/img/projects/summary/portada.jpg" title="Summary (Illustration)"
      desc="Personal work" url="https://www.artstation.com/artwork/3qbggg" />
  </main>
</template>