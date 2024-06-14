<template>
  <div class="flex flex-col min-h-screen">


    <main class="flex-1">


      <!-- Features Section -->
      <section>
        <Container class="py-20 px-10" inner-class="space-y-20">
          <div class="grid grid-cols-2 gap-10">
            <div>
              <h2 class="text-5xl font-semibold">Welcome to the Site</h2>
              <p class="text-lg mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, distinctio nihil? Ipsa vero, veniam quia repellendus et maiores rerum provident aliquam nihil. Et maxime officiis rem, dignissimos minima quaerat? Delectus necessitatibus, voluptates animi nostrum sit quos incidunt quasi autem quaerat.</p>
              <NuxtLink to="/" class="btn mt-5">Learn More</NuxtLink>
            </div>
            <div class="">
              <img class="object-fit object-cover" src="/tech.jpg">
            </div>

          </div>
          <div class="grid grid-cols-2 gap-10 justify-center">
            <div class="">
              <img class="w-full object-fit object-cover" src="/tech.jpg">
            </div>
            <div>
              <h2 class="text-5xl font-semibold">Welcome to the Site</h2>
              <p class="text-lg mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, distinctio nihil? Ipsa vero, veniam quia repellendus et maiores rerum provident aliquam nihil. Et maxime officiis rem, dignissimos minima quaerat? Delectus necessitatibus, voluptates animi nostrum sit quos incidunt quasi autem quaerat.</p>
              <NuxtLink to="/" class="btn mt-5">Learn More</NuxtLink>
            </div>
          </div>
        </Container>
      </section>
    </main>

    <footer></footer>
  </div>
</template>

