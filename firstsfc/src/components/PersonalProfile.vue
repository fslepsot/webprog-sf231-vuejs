<template>
  <div class="container">
    <header>
      <h1>Personal Profile Web Page</h1>
    </header>
    <main>
      <section class="main-content">
        <div class="about">
          <h1>About Me</h1>
          <p class="ex4">Personal Profile Web page</p>
          <a href="https://www.facebook.com/frances.lepsot" target="_blank">Facebook</a>
          <a href="https://www.instagram.com/_ceslepsot/" target="_blank">Instagram</a>
          <a href="https://www.linkedin.com/in/frances-sophia-lepsot-121704287/" target="_blank">LinkedIn</a>
          <p>Frances Sophia T. Lepsot is my name, and I am a second-year student at Asia Pacific College.</p>
        </div>

        <div class="education">
          <h1>Education and Achievements</h1>
          <ul>
            <li>Graduated Elementary at St. Augustine Academy of Pampanga.</li>
            <li>Graduated Junior High School with Honors from St. Augustine Academy of Pampanga, Class of 2021.</li>
            <li>Graduated Senior High School with Honors from University of the Assumption, Class of 2023.</li>
          </ul>
        </div>

        <div class="course">
          <h1>Course</h1>
          <p>
            Bachelor of Science in Computer Science with specialization in Cyber Security and
            Forensics
          </p>
        </div>

        <div class="hobbies">
          <h1>Hobbies and Interests</h1>
          <ul>
            <li>Travelling</li>
            <li>Watching movies</li>
            <li>Listening to music</li>
            <li>Crocheting</li>
          </ul>
        </div>
      </section>

      <h1>Vue Example</h1>

      <!-- Vue App 1 -->
      <div id="app">
        <p>{{ message }}</p>
        <div :class="vueClass">This element is bound to the "pinkBG" class.</div>
      </div>

      <!-- Vue App 2 -->
      <div id="app2">
        <div>
          <figure v-for="x in manyFoods" :key="x.name">
            <img :src="x.url" alt="">
            <figcaption>{{ x.name }}</figcaption>
          </figure>
        </div>
      </div>

      <!-- Vue App 3 -->
      <div id="app3">
        <form @submit.prevent="addItem">
          <p>
            What do you need? <br />
            <input type="text" required placeholder="item name.." v-model="itemName" />
          </p>
          <p>
            How many? <br />
            <input type="number" placeholder="number of items.." v-model="itemNumber" />
          </p>
          <p>
            Important?
            <label>
              <input type="checkbox" v-model="itemImportant" />
              {{ itemImportant }}
            </label>
          </p>
          <button type="submit">Add item</button>
        </form>
        <br />
        <hr />

        <div>
          <p><strong>Shopping list:</strong></p>
          <ul id="ulToFind">
            <li
              v-for="item in shoppingList"
              :key="item.name"
              :class="{ impClass: item.important }"
              @click="item.found = !item.found"
              v-show="!item.found"
            >
              {{ item.name }}, {{ item.number }}
            </li>
          </ul>
          <ul id="ulFound">
            <li
              v-for="item in shoppingList"
              :key="item.name + '-found'"
              :class="{ impClass: item.important }"
              @click="item.found = !item.found"
              v-show="item.found"
            >
              {{ item.name }}, {{ item.number }}
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue!",
      vueClass: "pinkBG",
      manyFoods: [
        { name: "Pizza", url: "pizza.jpg" },
        { name: "Burger", url: "burger.jpg" },
      ],
      itemName: "",
      itemNumber: 1,
      itemImportant: false,
      shoppingList: [],
    };
  },
  methods: {
    addItem() {
      this.shoppingList.push({
        name: this.itemName,
        number: this.itemNumber,
        important: this.itemImportant,
        found: false,
      });
      this.itemName = "";
      this.itemNumber = 1;
      this.itemImportant = false;
    },
  },
};
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  color: #333;
}

header h1 {
  text-align: center;
  color: #4caf50;
}

h1 {
  font-size: 24px;
  color: #555;
}

.highlight {
  color: red;
}

.pinkBG {
  background-color: pink;
}

.impClass {
  font-weight: bold;
}

#ulToFind li {
  cursor: pointer;
}

#ulFound li {
  text-decoration: line-through;
  cursor: pointer;
}
</style>
