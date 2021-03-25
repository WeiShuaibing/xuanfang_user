<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import userIndex from './userIndex'
export default {
  name: 'Dashboard',
  components: { adminDashboard, userIndex },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    /* if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }*/
    if (this.roles.includes('user')) {
      this.currentRole = 'userIndex'
    }
  }
}
</script>
