<template>
    <Disclosure as="nav" class="bg-white shadow-md sticky top-0" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-purple-700 hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
              <span class="absolute -inset-0.5 -z-10" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0">
              <img class="h-10 w-auto" src="/laptop.png" alt="logo" />
              <router-link to="/" style="text-decoration: none;" class="font-serif text-purple-500 font-normal text-2xl px-4 py-1"> Lema</router-link>
            </div>
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <a style="text-decoration: none;" v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-purple-900 text-purple-500' : 'text-purple-500 hover:text-purple-700', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
              </div>
            </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <!-- Hire button -->
            <Menu as="div" class="relative ml-3">
             <router-link to="/about"><button class="font-sans px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 ease-in-out transform hover:scale-105">
                Hire Me
                </button>
              </router-link> 
            </Menu>
          </div>
        </div>
      </div>
  
      <DisclosurePanel class="sm:hidden">
        <div class="bg-gradient-to-r from-neutral-50 space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton style="text-decoration: none;" v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-purple-900 text-purple-500' : 'text-purple-500 hover:bg-purple-100 hover:text-purple-500', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Create CV', href: '/create-cv', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ]
  </script>

  <style scoped>
  </style>