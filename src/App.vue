<template>
  <div id="app">
    <h1>Vue + Firebase Example</h1>
    <ul>
      <li v-for="doc in docs" :key="doc.id">
        {{ doc.data.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from "./firebase";

export default {
  name: "App",
  data() {
    return {
      docs: [],
    };
  },
  mounted() {
    return async () => {
      try {
        const querySnapshot = await db.collection("users").get();
        this.docs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };
  },
};
</script>

<style>
/* Your styles here */
</style>
