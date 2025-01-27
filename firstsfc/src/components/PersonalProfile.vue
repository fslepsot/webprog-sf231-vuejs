<!DOCTYPE html>
<html>
<head>
  <title>My first Vue page</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/flexbox-grid.css?version=0.1">
  <link rel="stylesheet" href="css/pink.css?version=0.1">
  <link rel="stylesheet" href="css/images.css?version=0.2">
  <link rel="stylesheet" href="css/shopping.css?version=0.1">
</head>
<body>

    <div class="container">
        <div class="section">
          <h3>About Me</h3>
          <p>Frances Sophia T. Lepsot is my name, and I am a second-year student at Asia Pacific College. Although I was born in Quezon City, I spent my childhood in Pampanga before deciding to attend college in Manila.</p>
        </div>
    
        <div class="section">
          <h3>Education / Achievements</h3>
          <ul>
            <li>Graduated Elementary at St. Augustine Academy of Pampanga.</li>
            <li>Graduated Junior High School with Honors, Class of 2021.</li>
            <li>Graduated Senior High School with Honors, Class of 2023.</li>
          </ul>
        </div>
    
        <div class="section">
          <h3>Course</h3>
          <p>Bachelor of Science in Computer Science with specialization in Cyber Security and Forensics</p>
        </div>
    
        <div class="section">
          <h3>IT Experience</h3>
          <ul>
            <li>Programming</li>
            <li>Gaming</li>
          </ul>
        </div>
    
        <div class="section">
          <h3>Hobbies & Interests</h3>
          <ul>
            <li>Travelling</li>
            <li>Watching movies</li>
            <li>Listening to music</li>
            <li>Crocheting</li>
          </ul>
        </div>
    
        <div class="section">
          <h3>Goals In Life / Dream</h3>
          <p>To make the most of each day, travel the world, and be able to provide financially for myself and my family.</p>
        </div>
      </div>

<div id="app">
  {{ message }}
  <div v-bind:class="vueClass">This element is bound to the "pinkBG" class.</div>
</div>

<div id="app2">
  <div>
    <figure v-for="x in manyFoods">
      <img v-bind:src="x.url">
      <figcaption>{{ x.name }}</figcaption>
    </figure>
  </div>
</div>

<div id="app3">
<form v-on:submit.prevent="addItem">
<p>What do you need? <br>
<input type="text" required placeholder="item name.." v-model="itemName">
</p>
<p>How many? <br>
<input type="number" placeholder="number of items.." v-model="itemNumber">
</p>
<p>  Important?
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
        v-bind:class="{ impClass: item.important }"
        v-on:click="item.found=!item.found"
        v-show="!item.found">
          {{ item.name }}, {{ item.number}}
</li>
</ul>
<ul id="ulFound">
<li 
        v-for="item in shoppingList" 
        v-bind:class="{ impClass: item.important }"
        v-on:click="item.found=!item.found"
        v-show="item.found">
          {{ item.name }}, {{ item.number}}
</li>
</ul>
</div>
</div>
  
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="js/vue.js"></script>
<script src="js/images.js"></script>
<script src="js/shopping.js"></script>

</body>
</html>
