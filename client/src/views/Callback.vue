<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/user'

export default {
  methods: mapActions(useUserStore, ['login']),
  async created() {
    this.login(this.$route.params.provider, this.$route.query)
  },
}
</script>
