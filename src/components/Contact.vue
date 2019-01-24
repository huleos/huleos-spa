<template>
  <div class="o-container">
  	<div class="c-contact u-pt4 u-pb3">
      <div class="o-container--md">
        <h2 class="c-title">Interested in doing a project together?</h2>
        <p>I'm currently accepting new projects and would love to hear about yours. Please take a few minutes to tell me about it.</p>

        <div class="o-row o-flex o-flex--center u-text--left u-mt2">
          <form name="contact" 
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                class="form--contact">

            <input type="hidden" name="form-name" value="contact" />
            <label class="hidden">Don’t fill this out if you're human: <input name="bot-field" /></label>
            
            <input type="text" name="name" class="c-form-input" placeholder="Your name" required>
            <input type="email" name="email" class="c-form-input" placeholder="Your email address" required>
            <textarea name="message" cols="30" rows="5" class="c-form-input" placeholder="Your message" required></textarea>
            <button type="submit" class="c-contact__cta">Submit</button>
          </form>
        </div>

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
  border-radius: $global-radius;
  box-shadow: rem(-15) 0 rem(45) $black;
  
  &__cta {
    border-radius: rem(30);
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
  flex: 0 0 calc(100% - 32px);
  max-width: calc(100% - 32px);
  @include breakpoint(md) {
    flex: 0 0 calc(60% - 32px);
    max-width: calc(60% - 32px);
  }
  .c-form-input {
    border-radius: rem(30);
    padding: rem(15);
    border-width: rem(2);
    &:focus {
      border-color: #01d5c7;
    }
  }
}

.hidden {
  display: none;
}
</style>