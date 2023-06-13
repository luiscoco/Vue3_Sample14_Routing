# routing

In Vue 3, the routing capabilities can be achieved using the Vue Router library, which provides a way to handle client-side routing in your Vue applications. The Composition API, introduced in Vue 3, can be used alongside Vue Router to create flexible and reusable routing logic.

To get started, you need to install Vue Router as a dependency in your project. You can do this using npm or yarn:

```
npm install vue-router
```

## router.ts
Once installed, you can create a new router instance and configure your routes. Here's an example:

```vue
<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>

    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
});
</script>
```

In the example above, we have a basic template with three router links and a router view. The router-link component is used to navigate to different routes, while the router-view component displays the corresponding component based on the current route.

Within the <script lang="ts" setup> tag, we import the necessary functions from the vue-router package. We then create a new router instance using the createRouter function. The history option is set to createWebHistory(), which enables HTML5 history mode for cleaner URLs.

We define our routes using the routes array, where each route object consists of a path and a corresponding component. In this case, we assume that Home, About, and Contact are components imported or defined elsewhere.

## main.ts  
To make the routing work, you need to mount the router instance to your app. You can do this in your main app file (usually main.ts or main.js) like this:

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
```

In the above code, we import the router instance and use it as a plugin with the app.use method. This makes the router available in all components of your app.

With this setup, Vue Router will handle the routing based on the specified routes, and the corresponding components will be rendered when the URL changes.

Remember to import the necessary components (e.g., Home, About, Contact) in the router component or define them in separate files.

That's a basic overview of routing capabilities in Vue 3 with the Composition API and the <script lang="ts" setup> tag.


## Components files (Home.vue, About.vue and Contact.vue)

### Home.vue
```vue
<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the Home page!</p>
  </div>
</template>

<script lang="ts" setup>
</script>
```
 
### About.vue
```vue
<template>
  <div>
    <h1>About Page</h1>
    <p>This is the About page.</p>
  </div>
</template>

<script lang="ts" setup>
</script>
```
  
### Contact.vue
```vue
<template>
  <div>
    <h1>Contact Page</h1>
    <p>Feel free to contact us!</p>
  </div>
</template>

<script lang="ts" setup>
</script> 
```

You can create separate files for each component (e.g., Home.vue, About.vue, Contact.vue) and place them in the appropriate location in your project directory. Make sure to import these components correctly in the router setup script, as shown in the previous example.
  
## App.vue

Here's an example of the App.vue file that incorporates the routing setup we discussed earlier:

```vue
<template>
  <div id="app">
    <h1>My Vue App</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>
```

In this App.vue file, we have a template that includes a navigation bar with router-link components for navigating to different routes. The router-view component is used to display the corresponding component based on the current route.

The script section imports the necessary functions and components from Vue, and we define the App component using the defineComponent function. You can further customize the App component to suit your application's needs.

Remember to include the necessary imports and setup in your main.ts or main.js file to mount the App component with the Vue Router instance, as mentioned in the previous response.
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
