<template>
  <div>
    <v-app-bar
      app
      clipped-left
      color="dark"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title class="mr-12 align-center">
        <img
          src="@/assets/logo.svg"
          alt="Logo"
          class="logo"
        >
      </v-toolbar-title>

      <v-spacer />

      <v-row
        align="center"
        style="max-width: 400px"
      >
        <v-text-field
          autocomplete="off"
          color="primary"
          placeholder="Search..."
          single-line
          append-icon="mdi-magnify"
          hide-details
          outlined
          dense
          filled
        />
      </v-row>

      <v-spacer />

      <v-row class="icon-row">
        <v-list-item class="grow">
          <v-list-item-content>
            <v-icon>mdi-bell</v-icon>
          </v-list-item-content>

          <v-list-item-avatar color="grey darken-3 user-icon">
            <v-img src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light" />
          </v-list-item-avatar>
        </v-list-item>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <div
          v-for="(item, key) in mainTabs"
          :key="key"
        >
          <!-- eslint-disable-next-line vue/valid-v-on -->
          <v-list-item v-if="!item.subItems" @click="">
            <v-list-item-action>
              <v-icon>mdi-{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-group v-else :prepend-icon="`mdi-${item.icon}`">
            <template v-slot:activator>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </template>

            <v-list-item
              link
              class="pl-10"
              v-for="(subItem, subItemKey) in item.subItems"
              :key="subItemKey"
            >
              <v-list-item-title>{{ subItem.text }}</v-list-item-title>
              <v-list-item-icon>
                <v-icon :color="subItem.color">mdi-{{ subItem.icon }}</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </div>

        <v-divider />

        <v-list>
          <v-list-item
            v-for="item in secondaryTabs"
            :key="item.text"
            link
          >
            <v-list-item-action>
              <v-icon>mdi-{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider />
        <v-list
          dense
          flat
          expand
        >
          <v-list-item
            v-for="(item) in tertiaryTabs"
            :key="item.text"
            link
            dense
          >
            <!-- eslint-disable-next-line vue/no-v-html -->
            <v-list-item-subtitle class="grey--text text--darken-1 mb-0" v-html="item.text" />
          </v-list-item>
        </v-list>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    mainTabs: [
      {
        icon: 'view-dashboard',
        text: 'Dashboard'
      },
      {
        icon: 'account-group',
        text: 'Users',
        subItems: [
          {
            icon: 'account-circle',
            text: 'Interns'
          },
          {
            icon: 'account-supervisor-circle',
            text: 'Office Head'
          },
          {
            icon: 'shield-account',
            text: 'Administrators',
            color: 'primary'
          }
        ]
      },
      {
        icon: 'school',
        text: 'Schools'
      },
      {
        icon: 'office-building',
        text: 'Offices'
      },
      {
        icon: 'file-chart',
        text: 'Reports'
      },
      {
        icon: 'history',
        text: 'Audit Trails'
      }
    ],
    secondaryTabs: [
      {
        icon: 'cog',
        text: 'Settings'
      },
      {
        icon: 'alert-octagon',
        text: 'Report Something'
      },
      {
        icon: 'comment-quote',
        text: 'Send Feedback'
      }
    ],
    tertiaryTabs: [
      {
        icon: 'cog',
        text: 'About'
      },
      {
        icon: 'alert-octagon',
        text: 'Contact'
      },
      {
        icon: 'comment-quote',
        text: 'Advertise'
      },
      {
        icon: 'comment-quote',
        text: 'Developer'
      },
      {
        icon: 'comment-quote',
        text: '&copy; 2020 KarmaBlackshaw'
      }
    ],
    admins: [
      ['Management', 'people_outline'],
      ['Settings', 'settings']
    ]
  }),
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
}

.icon-row {
  flex: 0;

  .user-icon {
    width: 32px;
    height: 32px;
  }
}
</style>
