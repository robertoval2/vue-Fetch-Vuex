<template>
  <main>
    <section>
      <div>
        <h1>COUNTER store</h1>
        Clicked: {{ countCounter }} times, count is {{ evenOrOdd }}.<br />
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">Increment if odd</button>
        <button @click="incrementAsync">Increment async</button>
      </div>
    </section>
    <section>
      <div>
        <h1>USERS store</h1>
        Clicked: {{ countUsers }} times, count is {{ evenOrOddUsers }}.<br />
        <button @click="incrementUsers">+</button>
        <button @click="decrementUsers">-</button>
        <button @click="incrementIfOddUsers">Increment if odd</button>
        <button @click="incrementAsyncUsers">Increment async</button>
      </div>
    </section>
    <section>
      <h1>Fetch</h1>
      <div v-if="!isLoading && data">
        <ul>
          <li v-for="(dato, index) in data" :key="index">
            <strong>{{ dato.API }}</strong
            >. {{ dato.Description }}
          </li>
        </ul>
      </div>
      <div v-else-if="isLoading">Cargando...</div>
    </section>
  </main>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useFetch } from './fetch';

export default {
  name: 'App',
  setup() {
    const store = useStore();
    const { data, error, isLoading } = useFetch(
      'https://api.publicapis.org/entries'
    );
    return {
      // COUNTER Store
      countCounter: computed(() => store.state.counter.count),
      evenOrOdd: computed(() => store.getters['counter/evenOrOdd']),
      increment: () => store.dispatch('counter/increment'),
      decrement: () => store.dispatch('counter/decrement'),
      incrementIfOdd: () => store.dispatch('counter/incrementIfOdd'),
      incrementAsync: () => store.dispatch('counter/incrementAsync'),
      // USERS Store
      countUsers: computed(() => store.state.users.count),
      evenOrOddUsers: computed(() => store.getters['users/evenOrOdd']),
      incrementUsers: () => store.dispatch('users/increment'),
      decrementUsers: () => store.dispatch('users/decrement'),
      incrementIfOddUsers: () => store.dispatch('users/incrementIfOdd'),
      incrementAsyncUsers: () => store.dispatch('users/incrementAsync'),
      data,
      error,
      isLoading,
    };
  },
};
</script>

<style></style>
