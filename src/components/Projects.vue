<template>
  <div class="c-projects o-container u-py3">
    <h3 class="c-title">Projects</h3>
    <div class="o-flex">
      <div class="c-projects__item u-px1 u-mb2" v-for="(project, key) in projects" :key="key">
        <a :href="project.link" class="c-card u-mb0" target="_blank">
          <img :src="project.screen" :alt="project.name" class="c-card__img">
          <div class="c-card__content">
            <h3 class="c-projects__item--title">{{ project.name }}</h3>
            <h2 class="c-projects__item--text">Role: <strong>{{ project.role }}</strong></h2>
            <p class="c-projects__item--text">
              Skills:
              <strong class="c-projects__item--skill" v-for="(skill, key) in project.skills" :key="key"> {{skill}}</strong>
             </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.c-projects {
  background-color: #fefefe;

  &__item { 
    flex: 0 0 100%;
    max-width: 100%;
    .c-card { 
      transition: all 0.25s ease-out; 
      height: 100%;
      &:hover { opacity: .7; transform: scale(1.025); }
    }
    @include breakpoint(md) {
      flex: 0 0 25%;
      max-width: 25%;
    }

    img {
      border-radius: rem(4) rem(4) 0 0;
    }

    &--title {
      margin: 0;
      color: #545454;
      font-size: rem(20);
    }

    &--text {
      font-size: rem(12);
      color: #999;
      margin: rem(8) 0;
    }

    &--skill {
      &:after {
        content: ',';
      }
      &:last-child {
        &:after {
          content: '.';
        }
      }
    }
    
  }
  
}
</style>

<script>
import Projects from '../projects.js';

export default {
  data() {
    return {
      projects: Projects
    }
  }
}
</script>
