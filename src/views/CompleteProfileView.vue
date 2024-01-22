<!-- <template>
  <div class="columnItemsCenter w-100 py-5 ga-5">
    <h2>Completa tu perfil</h2>
    <v-form @submit.prevent="submitForm" class="columnItemsCenter w-100">
      <v-text-field
        class="w-75"
        label="Correo electrónico"
        placeholder="usuario@gmail.com"
        type="email"
        v-model="profile.email" />
      <v-select
        class="w-75"
        label="Categoría"
        :items="categories"
        v-model="profile.category"
        >
        </v-select>
      <v-btn
        variant="elevated"
        color="blue"
        size="large"
        class="mt-6 px-10"
        type="submit"
        >Guardar</v-btn
      >
    </v-form>
  </div>
</template>

<script>
  export default {
    name: "CompleteProfileView",
    data() {
      return {
        profile: {
          email: "",
          category: "",
        },
        categories: ["Ateneo de Servicio", "Carrera de Especialista de Servicio", "Actividad de Residentes de Servicio", "UBA", "Universidad Privada", "Tecnicaturas del Hospital", "Actividades Especiales", "Actividad Especial de Dirección"]
      };
    },
    mounted() {
      document.title = "Completá tu perfil";
    },
    methods: {
      submitForm() {
        this.$store.state.hasCompleteProfile = true;
        this.$router.push('/inicio')
      },
    },
  };
</script> -->
