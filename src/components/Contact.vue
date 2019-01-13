<template>
	<div class="c-contact u-py3">
    <div class="o-container--md">
      <h2 class="c-title">Interested in doing a project together?</h2>
      <p>I'm currently accepting new projects and would love to hear about yours. Please take a few minutes to tell me about it.</p>

      <div class="o-row o-flex o-flex--center u-text--left u-mt2">
        <form name="contact" 
              method="POST"
              action="/" 
              data-netlify="true"
              netlify-honeypot="bot-field"
              netlify 
              class="form--contact">
          <p class="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>
          <input type="text" class="c-form-input" placeholder="Your name" required>
          <input type="email" class="c-form-input" placeholder="Your email address" required>
          <textarea name="message" cols="30" rows="5" class="c-form-input" placeholder="Your message" required></textarea>
          <button type="submit" class="c-contact__cta">Submit</button>
        </form>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
$cta-color: map-get($brand-color, primary) !default;
$cta-border: 2px solid map-get($brand-color, primary) !default;
$contatc-bg-color: #f1f1f1;

.c-contact {
  background-color: $contatc-bg-color;
  text-align: center;
  font-size: rem(20);
  
  &__cta {
    border-radius: 5px;
    border: $cta-border;
    color: $cta-color;
    padding: rem(15) rem(24);
    text-align: center;
    display: inline-block;
    font-size: rem(18);
    margin-top: rem(15);
    margin-bottom: rem(15);
    min-width: rem(160);
    transition: all .25s ease;
    background: transparent;
    &:hover {
      transform: scale(1.025);
      opacity: .4;
    }
  }
}

.form--contact {
  flex: 0 0 calc(100% - 32px;
  max-width: calc(100% - 32px;
  @include breakpoint(md) {
    flex: 0 0 calc(60% - 32px);
    max-width: calc(60% - 32px);
  }
}

.hidden {
  display: none;
}
</style>