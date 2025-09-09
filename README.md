# Green-Earth

### 1. What is the difference between var, let, and const?
### Answer:
var হলো পুরনো স্টাইলের ভেরিয়েবল, ফাংশনের ভিতরে বা বাইরে যেকোনো জায়গায় কাজ করে এবং একই নাম দিয়ে আবার ডিক্লেয়ার করা যায়। let আর const ES6 স্টাইলের, এরা শুধু যে ব্লকে ডিক্লেয়ার হয়েছে সেখানে কাজ করে। let এর মান পরে পরিবর্তন করা যায়। const এর মান পরিবর্তন করা যায় না, তবে অবজেক্ট বা অ্যারের ভিতরের ডাটা পরিবর্তন করা যায়।

---

### 2. What is the difference between map(), forEach(), and filter()? 
### Answer:
- map() → এটি প্রতিটি এলিমেন্টের উপর একটি ফাংশন চালিয়ে একটি নতুন অ্যারে রিটার্ন করে। মূল অ্যারে অপরিবর্তিত থাকে। এটি ডেটা পরিবর্তন বা নতুন অ্যারে তৈরি করার জন্য ব্যবহার করা হয়।
- forEach() → প্রতিটি এলিমেন্টের উপর কাজ করে, কিন্তু কিছু রিটার্ন করে না। যেমন কনসোল-এ দেখানো, DOM আপডেট বা API থেকে ডেটা নেওয়া।
- filter() → এটি শুধু সেই এলিমেন্টগুলো নিয়ে একটি নতুন অ্যারে বানায়, যেগুলো কন্ডিশন মানে।

---

### 3. What are arrow functions in ES6?
### Answer:
Arrow Function হলো ফাংশন লেখার একটা ছোট্ট ও সহজ পদ্ধতি যা ES6-এ এসেছে। এটি function কীওয়ার্ড ছাড়াই => (fat arrow) চিহ্ন ব্যবহার করে লেখা হয়। এক লাইনের ফাংশনে {} ও return লাগে না, সরাসরি রিটার্ন হয়। 

উদাহরণ: const add = (a, b) => a + b;

---

### 4. How does destructuring assignment work in ES6?
### Answer:
Destructuring Assignment হলো ES6-এ আনা একটি সহজ এবং শক্তিশালী পদ্ধতি, যার মাধ্যমে objects বা arrays থেকে মানগুলোকে index বা key ব্যবহার না করেই সরাসরি আলাদা ভ্যারিয়েবলে নেওয়া যায়।

উদাহরণ: 
const { name, subject, varsity } = { name: "Ishfak", subject: "CSE", varsity: "KiU" };
const [assignment1, assignment2, assignment3, assignment4] = [60, 60, 60, 50];

--- 

### 5. Explain template literals in ES6. How are they different from string concatenation?
### Answer :
Template literals হলো ES6-এ আনা একটি সহজ উপায়, যা backtick ব্যবহার করে স্ট্রিং লেখা যায়।${...} দিয়ে ভেরিয়েবল বা এক্সপ্রেশন সরাসরি স্ট্রিং-এ বসানো যায় এবং multi-line স্ট্রিংও সহজে লেখা যায়। পুরনো পদ্ধতিতে + ব্যবহার করতে হতো, যা multi-line স্ট্রিংয়ের ক্ষেত্রে কোড জটিল ও পড়তে কষ্টকর হয়ে যেত।

---





