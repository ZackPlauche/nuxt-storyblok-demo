<template>
  <Header />
  <Hero headline="Contact" subheadline="Get in touch with us"
    :cta="{ text: 'Contact Us', link: '/contact' }"
    :background-image="{
      filename: '/tech.jpg',
      alt: 'Tech'
    }" />
</template>