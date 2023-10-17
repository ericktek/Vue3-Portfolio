<script>
export default {
  data() {
    return {
      isAnimating: true, // Initialize as true to start the animation
      open: false, // Initialize as false to hide the element
    };
  },
  methods: {
    stopAnimation() {
      // Toggle the animation state
      this.isAnimating = !this.isAnimating;
      // Toggle the 'open' state to show/hide the element
      this.open = this.open;
    },
  },
};
</script>

<template>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="grid gap-10 lg:grid-cols-2">
      <div class="lg:pr-10">
        <a aria-label="Go Home" title="Logo" class="inline-block mb-5">
          <div
            class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50"
          >
            <svg
              class="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              ></polygon>
            </svg>
          </div>
        </a>
        <h2 class="mb-4 text-5xl font-extrabold leading-none text-purple-600">
          Hi, I'm Erick Lema<br class="hidden md:block" />
        </h2>
        <h5 class="mb-4 text-3xl font-extrabold leading-none">
          <span class="inline-block text-deep-purple-accent-700 text-purple-400"
            >Full stack developer
          </span>
        </h5>
        <p class="mb-6 text-gray-900">
          I'm passionate about tackling new challenges and working on exciting
          projects. Whether you're in need of a skilled programmer, interested
          in discussing potential collaborations, or simply want to connect and
          chat about all things code, I'm here and ready.
        </p>
        <div
          class="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-5 pb-5"
        >
          <a
            href="cv.pdf"
            class="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-blue-700 bg-purple-600 text-white hover:text-white hover:bg-purple-600 hover:border-purple-600 focus:ring focus:ring-purple-400 focus:ring-opacity-50 active:bg-purple-700 active:border-blue-700 dark:focus:ring-purple-400 dark:focus:ring-opacity-90"
            download="Mr. lema cv.pdf"
          >
            <svg
              class="hi-mini hi-arrow-down-tray inline-block w-5 h-5 opacity-75"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"
              />
              <path
                d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"
              />
            </svg>
            <span> Download CV</span></a
          >
          <a
            href="/contact"
            class="inline-flex justify-center border border-purple-900 items-center space-x-2 font-semibold rounded-lg px-12 py-3.5 text-purple-900 f dark:border-purple-900 dark:bg-transparent dark:text-purple-900 dark:hover:border-purple-900 dark:hover:text-white dark:focus:ring-purple-900 dark:focus:ring-opacity-40 dark:active:border-purple-900 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-purple-500 duration-[900ms,900ms] transition-[color,box-shadow]"
          >
            <span>Hire Me</span>
          </a>
        </div>
        <hr class="mb-5 border-gray-300" />
        <div class="flex items-center space-x-4">
          <a
            class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
              <path
                d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
              ></path>
            </svg>
          </a>
          <a
            class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
              <circle cx="15" cy="15" r="4"></circle>
              <path
                d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
              ></path>
            </svg>
          </a>
          <a
            class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
              <path
                d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
              ></path>
            </svg>
          </a>
          <a
            class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" class="h-6">
              <path
                d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div>
        <img
          src="/staff-image.png"
          class="object-cover w-96 rounded sm:h-96 sm:bg-none lg:ml-28 scale-100 transition-transform transform hover:scale-110 disable-selection"
          alt="staff-image"
        />
        <div class="container max-auto px-0 mb-0">
          <span
            :class="{ 'animate-bounce': isAnimating }"
            @click="stopAnimation"
            class="float-right inline-block rounded-full"
          >
            <button @click="open = !open" type="button">
              <img src="chitchat.svg" alt="chitchat" />
            </button>
          </span>
          <div
            v-if="open"
            class="float-right bg-white divide-gray-100 rounded-lg shadow w-49 dark:bg-purple-400"
          >
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  ><span class="font-bold underline underline-offset-1">Thanks for Visiting!</span> Your visit means a lot to me. If you'd
                  like to support my work, consider buying me a coffee at
                  0769500360. Your contribution keeps me coding!</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.disable-selection {
  user-select: none;
  -webkit-user-drag: none;
}
</style>
