import React from "react";

const Blog = () => {
  return (
    <div className="container py-4">
      <h2 className="text-center text-uppercase text-warning ">
        There are some statics blogs
      </h2>
      <div className="row d-flex justify-content-center align-items-center py-5">
        <div className="col-lg-6 p-3">
          <img
            className="img-fluid"
            src="https://i.ibb.co/QJ3NFRq/Nodejs-vs-Javascript-min.webp"
            alt=""
          />
        </div>
        <div className="col-lg-6 p-3">
          <h4 className="text-center text-uppercase mb-3">
            জাভাস্ক্রিপ্ট এবং নোড এর মধ্যে পার্থক্য কী?
          </h4>
          <p className="text-muted">
            জাভাস্ক্রিপ্ট হল একটা স্ক্রিপ্টিং ল্যঙ্গুয়েজ যা ব্রাউজারে ছাড়া রান
            করানো যায় না । এইচটিএমএল ওয়েব পেজ কে ডায়ানামিক রুপ দিতে
            জাভাস্ক্রিপ্ট গুরুত্বপুর্ণ ভুমিকা নিয়ে থাকে । এই জাভাস্ক্রিপ্ট
            সম্পুর্ন ক্লায়েন্ট সাইড ল্যঙ্গুয়েজ অর্থাৎ কোনো ইউজার যখন কোনো ওয়েব
            পেজে জাভাস্ক্রিপ্ট রান করাবে তখন তা শুধুমাত্র সেই ব্রাউজারেই
            এক্সিকিউট হয়ে যাবে । সার্ভারের সাথে কোনো যোগাযোগ নাই । এই সমস্যার
            সমাধান করেছে এই নোড জে এস এই নোড জে এস কে জাভাস্ক্রিপ্ট কে
            জাভাস্ক্রিপ্ট এর রানটাইম বলা যেতে পারে। অর্থাৎ জাভাস্ক্রিপ্ট এখন
            থেকে শুধু ব্রাউজারেই সিমাবদ্ধ থাকলো না বরং সার্ভারেও চালানো যাবে।
          </p>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center py-5">
        <div className="col-lg-6 p-3">
          <h4 className="text-center text-uppercase mb-3">
            SQL এবং noSQL এর মধ্যে পার্থক্য কী?
          </h4>
          <p className="text-muted">
            এসকিউএল ডাটাবেস একটি রিলেশনাল ডাটাবেস। একটি রিলেশনাল ডেটাবেস হলো
            টেবিলের একটি সেট যা নিখুঁত ডাটা ধারণ করে পূর্বনির্ধারিত
            বিভাগ।প্রতিটি টেবিলের কলামে এক বা একাধিক ডাটা ক্যাটাগরি থাকে।প্রতিটি
            সারিতে কলাম দ্বারা নির্ধারিত শ্রেণিপ্রতিটি সারিতে কলাম দ্বারা
            নির্ধারিত শ্রেণি থাকে। <br />
            NoSQL উপাত্তগুলি সাধারণত ডেটা দ্রুত প্রক্রিয়া করে রিলেশনাল
            ডেটাবেসস। NoSQL উপাত্তগুলি প্রায়ই দ্রুততর হয় কারণ তাদের ডাটা
            মডেলগুলি সহজ।ডেভেলপারদের তাদের প্রয়োজনীয়তাগুলি পূরণ করে এমন উপায়ে
            অ্যাপ্লিকেশানগুলি ব্যবহার করতে সহজ।
          </p>
        </div>
        <div className="col-lg-6 p-3">
          <img
            className="img-fluid"
            src="https://i.ibb.co/5K44BqX/2c93a29a4161.png"
            alt=""
          />
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center py-5">
        <div className="col-lg-6 p-3">
          <img
            className="img-fluid w-100"
            src="https://i.ibb.co/VQhXB9q/cover-1.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-6 p-3">
          <h4 className="text-center text-uppercase mb-3">
            JWT কি এবং এর কাজ কি ?
          </h4>
          <p className="text-muted">
            JSON Web Token কে সংক্ষেপে JWT বলা হয়। কোন ওয়েব সাইটের নিরাপত্তা
            রক্ষার্থে এটি ব্যবহার করা হয়। আমরা যখন কোন ওয়েব সাইটে লগিন করি তখন
            এটি আমাদের একটি টোকেন দেয়। পরবর্তিতে সেই একই সাইটে এলে যদি টোকেন
            পাওয়া যায় সে ক্ষেত্রে JWT আমাদের লগিন হতে দেই অন্যথায় আমাদের বের করে
            দেই আবার লগিন হওয়ার জন্য। চাইলে টোকেনের ইচ্ছা মতো এক্সপায়ার টাইমও
            সেট করা যায়। যেন নির্দিষ্ট সময় পরে আর সেই টোকেন ভ্যালিড না থাকে এবং
            নিরাপত্তা বৃদ্ধি পায়।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
