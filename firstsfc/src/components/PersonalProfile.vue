<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Vue Page</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/flexbox-grid.css?version=0.1">
  <link rel="stylesheet" href="css/pink.css?version=0.1">
  <link rel="stylesheet" href="css/images.css?version=0.2">
  <link rel="stylesheet" href="css/shopping.css?version=0.1">
</head>
<body>

  <div id="app">
    <template>
      <p>{{ message }}</p>
      <div :class="vueClass">This element is bound to the "pinkBG" class.</div>
    </template>
  </div>

  <div id="app2">
    <template>
      <div>
        <figure v-for="x in manyFoods" :key="x.name">
          <img :src="x.url" alt="Food Image">
          <figcaption>{{ x.name }}</figcaption>
        </figure>
      </div>
    </template>
  </div>

  <div id="app3">
    <template>
      <form @submit.prevent="addItem">
        <p>What do you need? <br>
          <input type="text" required placeholder="Item name.." v-model="itemName">
        </p>
        <p>How many? <br>
          <input type="number" placeholder="Number of items.." v-model="itemNumber">
        </p>
        <p>Important?
          <label>
            <input type="checkbox" v-model="itemImportant">
            {{ itemImportant }}
          </label>
        </p>
        <button type="submit">Add item</button>
      </form>
      <br>
      <hr>

      <div>
        <p><strong>Shopping list:</strong></p>
        <ul id="ulToFind">
          <li 
            v-for="item in shoppingList" 
            :key="item.name" 
            :class="{ impClass: item.important }"
            @click="item.found = !item.found"
            v-show="!item.found">
            {{ item.name }}, {{ item.number }}
          </li>
        </ul>
        <ul id="ulFound">
          <li 
            v-for="item in shoppingList" 
            :key="item.name + '-found'" 
            :class="{ impClass: item.important }"
            @click="item.found = !item.found"
            v-show="item.found">
            {{ item.name }}, {{ item.number }}
          </li>
        </ul>
      </div>
    </template>
  </div>

  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script>
    // App 1
    const app = Vue.createApp({
      data() {
        return {
          message: "Hello from Vue!",
          vueClass: "pinkBG"
        };
      }
    });
    app.mount("#app");

    const app2 = Vue.createApp({
      data() {
        return {
          manyFoods: [
            { name: "Pizza", url: "path/to/pizza.jpg" },
            { name: "Burger", url: "path/to/burger.jpg" },
            { name: "Sushi", url: "path/to/sushi.jpg" }
          ]
        };
      }
    });
    app2.mount("#app2");

    const app3 = Vue.createApp({
      data() {
        return {
          itemName: "",
          itemNumber: null,
          itemImportant: false,
          shoppingList: []
        };
      },
      methods: {
        addItem() {
          if (this.itemName && this.itemNumber) {
            this.shoppingList.push({
              name: this.itemName,
              number: this.itemNumber,
              important: this.itemImportant,
              found: false
            });
            this.itemName = "";
            this.itemNumber = null;
            this.itemImportant = false;
          }
        }
      }
    });
    app3.mount("#app3");
  </script>
</body>
</html>
