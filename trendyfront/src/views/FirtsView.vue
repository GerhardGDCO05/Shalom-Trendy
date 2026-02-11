<template>
  <section class="start">
    <h1>{{ user.companyname }}</h1>
    <p>Correo: {{ user.email }}</p>
    <p>Telefono: {{ user.contacto }}</p>
    <article class="sign-up">
      <h2>Registrarse</h2>
      <form action="">
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name">
        <label for="email">Correo</label>
        <input type="email" id="email" name="email">
        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password">
        <button >Registrarse</button>
      </form>
    </article>
    <article class="sign-in">
      <h2>Iniciar Sesión</h2>
      <form action="">
        <label for="email">Correo</label>
        <input type="email" id="email" name="email">
        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password">
        <button>Iniciar Sesión</button>
      </form>
    </article>
    
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'firtsview',
  components: {
  },
  data() {
    return {
      user: {
        companyname: 'ShalomTrendy',
        name: 'Gabriel Pardon',
        email: 'pardo@shalom.com',
        id: '31322111',
        password: '123456',
        role: 'admin',
        contacto: '04241235544',
      },
    };
  },
});
</script>
