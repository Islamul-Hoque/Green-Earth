# Green-Earth

### 1. What is the difference between var, let, and const?
### Answer:
var হলো পুরানো স্টাইল, এটা ফাংশনের ভিতরে বা বাইরে যেকোনো জায়গায় কাজ করে, আবার একই নামে বারবার ডিক্লেয়ারও করা যায়। let আর const হলো ES6 স্টাইল, এরা শুধু যে ব্লকে ডিক্লেয়ার করা হয়, সেখানেই কাজ করে। let এর ভ্যালু পরে বদলানো যায়, const এর ভ্যালু ফিক্সড, তবে অবজেক্ট বা অ্যারে হলে ভিতরের জিনিস বদলানো যায়!

---

### 2. What is the difference between map(), forEach(), and filter()? 
### Answer:
- map() দিয়ে প্রতিটা এলিমেন্টকে বদলে একটা নতুন অ্যারে পাই।
- forEach() দিয়ে শুধু লুপ চালাই, কিছু রিটার্ন করে না।
- filter() দিয়ে শুধু যেগুলো শর্ত মানে, সেগুলো নিয়ে নতুন অ্যারে বানাই।

---

### 3. What are arrow functions in ES6?
### Answer:
এটা ফাংশন লেখার সহজ পদ্ধতি। function কীওয়ার্ড লাগে না, শুধু => দিয়ে লিখি। backtick (`) ব্যবহার হয়। ভেরিয়েবল ${} দিয়ে সরাসরি স্ট্রিংয়ে ঢোকানো যায়। পুরনো কনক্যাটেনেশনে + ব্যবহার করতে হয়।
const name = "Ishfak";
console.log(`Hello, ${name}`);

---

### 4. How does destructuring assignment work in ES6?
### Answer:
অবজেক্ট বা অ্যারে থেকে সরাসরি ভ্যালু বের করার উপায় । 
const {name, age} = {name: "Ishfak", age: 25};
const [a, b] = [1, 2]; 

--- 
### 5. Explain template literals in ES6. How are they different from string concatenation?
### Answer :
Template literals হলো backtick (`) দিয়ে স্ট্রিং লেখা। এতে ভেরিয়েবল বসানো যায় ${name} এভাবে। আর পুরনো কনক্যাটেনেশনে + ব্যবহার করতে হয়।

---





