<template>
  <div class="c-projects o-container u-py3">
    <h3 class="c-title">Projects</h3>
    <div class="o-flex">
      <div class="c-projects__item u-px1 u-mb4" v-for="(project, key) in projects" :key="key">
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
  // background-color: #fefefe;
  .c-title {
    color: #f3f3f3;
  }

  &__item { 
    flex: 0 0 100%;
    max-width: 100%;
    .c-card { 
      transition: all 0.25s ease-out; 
      height: 100%;
      border-radius: $global-radius;
      border: rem(3) solid #01d5c7;
      border-bottom-width: rem(5);
      box-shadow: rem(-15) 0 rem(45) $black;
      background-color: #101010;
      // &:hover { 
      //   opacity: .7; 
      //   transform: scale(1.025);
      // }
    }
    @include breakpoint(md) {
      flex: 0 0 25%;
      max-width: 25%;
    }

    &:hover {
      img {
        transform: scale(1.025);
      }
    }

    img {
      transition: all 0.25s ease-out; 
      border-radius: $global-radius;
      margin-top: rem(-20);
      box-shadow: 0 rem(10) rem(40) 0 rgba(62,57,107,.2), 0 rem(2) rem(9) 0 rgba(62,57,107,.2);
      max-width: calc(100% - 0.5rem);
      margin-left: auto;
      margin-right: auto;
    }

    &--title {
      margin: 0;
      color: $white;
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
