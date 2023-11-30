<template>
    <Menubar :model="computedItems">
      <template #start>
        <div class="nav-me">
        <Avatar :image="require('../assets/images/JakePfP.jpg')" id="myPfP" class="mr-2" shape="circle"></Avatar>
        <h3 class="header-me">Jake Levinsky</h3>
      </div>
      </template>
  </Menubar>
</template>

<script lang="ts">
import Menubar from 'primevue/menubar'
import Avatar from 'primevue/avatar'

export default {
  components: {
    Menubar,
    Avatar
  },
  data() {
    return {
      items: [
        {
          label: 'Home',
          routeName: 'home',
          icon: 'pi pi-home',
          command: () => {
          this.$router.push({name: 'home'})        
          }
        },
        {
          label: 'About',
          routeName: 'about',
          icon: 'pi pi-user',
          command: () => {
          this.$router.push({name: 'about'})
          }
        },
        {
          label: 'Contact',
          routeName: 'contact',
          icon: 'pi pi-envelope',
          command: () => {
          this.$router.push({name: 'contact'})
          }
        },
        {
          label: 'Projects',
          routeName: 'projects',
          icon: 'pi pi-server',
          command: () => {
          this.$router.push({name: 'projects'})
          }
        },
      ]
    }
  },
  computed: {
    computedItems() {
      return this.items.map(item => ({
        ...item,
        class: this.$route.name === item.routeName ? 'active-tab' : ''
      }))
    }
  }
}
</script>

<style>
.pi {
  margin-right: .5em;
}

.active-tab {
  background-color: #9aa7cc64;
}

.nav-me {
  display: flex;
  align-items: center;
}
.header-me {
  margin: 5px;
  font-weight: bold;
}

#myPfP {
  transition: .5s;
}

#myPfP:hover {
  width: 4em;
  height: 4em;
}

#contactLink {
  text-decoration: none;
  color: black;
}

.mr-2 {
  margin-right: .5rem;
}

.p-menubar {
  background-image: linear-gradient(to bottom, #cbe6ed, #f8fcf7);
  border: 0;
  justify-content: space-between;
}

.p-menubar .p-menubar-start {
  flex-grow: 0;
  flex-shrink: 0;
}

.p-menubar .p-menubar-end {
  flex-grow: 1;
  justify-content: flex-end;  
  display: flex;  
}
</style>