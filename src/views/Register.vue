<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Sign-up form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="First Name"
                name="firstname"
                prepend-icon="person"
                type="email"
              ></v-text-field>

              <v-text-field
                label="Last Name"
                name="lastname"
                prepend-icon="person"
                type="email"
              ></v-text-field>

              <v-text-field
                label="Email"
                name="email"
                prepend-icon="email"
                type="email"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="lock"
                type="password"
              ></v-text-field>

              <v-text-field
                id="conf-password"
                label="Confirm Password"
                name="cont-password"
                prepend-icon="lock"
                type="password"
              ></v-text-field>

            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary">SIGN UP</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
