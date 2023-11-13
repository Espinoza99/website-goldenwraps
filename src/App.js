// App.js

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles.css'
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <img class="main-menu-image" src='https://scontent.fsac1-1.fna.fbcdn.net/v/t39.30808-6/277253042_104059465594588_685355987731375954_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=r7KaNrmrqqkAX8-bzwf&_nc_ht=scontent.fsac1-1.fna&oh=00_AfDVQCG9_UcMqNaym3bqPSGQT0bvM4kPxIqLMWDymQzitQ&oe=6555D61C' alt=''/>
          <p class="welcome">Quality Detailing & Wrapping Services</p>
          <button class="button-main-menu">Book Appointment</button>
        </section>
        <section id="welcome-2">
          <h2 class="welcome2">The Best in Fresno</h2>
          <p class="welcome2-1">At GoldenWraps, we redefine automotive aesthetics with precision and passion. Our seasoned team of experts brings years of experience to elevate your vehicle's appearance.</p>
          <img class="main-menu-image2" src='https://scontent.fsac1-1.fna.fbcdn.net/v/t39.30808-6/277253042_104059465594588_685355987731375954_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=r7KaNrmrqqkAX8-bzwf&_nc_ht=scontent.fsac1-1.fna&oh=00_AfDVQCG9_UcMqNaym3bqPSGQT0bvM4kPxIqLMWDymQzitQ&oe=6555D61C' alt=''/>
        </section>
        <div><h2 class="welcome3">Quality details, happy clients</h2></div>
        <section id='welcome-3'>
          
          <img class="main-menu-image3" src='https://scontent.fsac1-1.fna.fbcdn.net/v/t39.30808-6/277253042_104059465594588_685355987731375954_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=r7KaNrmrqqkAX8-bzwf&_nc_ht=scontent.fsac1-1.fna&oh=00_AfDVQCG9_UcMqNaym3bqPSGQT0bvM4kPxIqLMWDymQzitQ&oe=6555D61C' alt=''/>
          <img class="main-menu-image3" src='https://scontent.fsac1-1.fna.fbcdn.net/v/t39.30808-6/277253042_104059465594588_685355987731375954_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=r7KaNrmrqqkAX8-bzwf&_nc_ht=scontent.fsac1-1.fna&oh=00_AfDVQCG9_UcMqNaym3bqPSGQT0bvM4kPxIqLMWDymQzitQ&oe=6555D61C' alt=''/>
          <img class="main-menu-image3" src='https://scontent.fsac1-1.fna.fbcdn.net/v/t39.30808-6/277253042_104059465594588_685355987731375954_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=r7KaNrmrqqkAX8-bzwf&_nc_ht=scontent.fsac1-1.fna&oh=00_AfDVQCG9_UcMqNaym3bqPSGQT0bvM4kPxIqLMWDymQzitQ&oe=6555D61C' alt=''/>


        </section>
        <section id='welcome-4' >
          <div >
            <img class="main-menu-image4" src='https://scontent.fsac1-1.fna.fbcdn.net/v/t39.30808-6/277253042_104059465594588_685355987731375954_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=r7KaNrmrqqkAX8-bzwf&_nc_ht=scontent.fsac1-1.fna&oh=00_AfDVQCG9_UcMqNaym3bqPSGQT0bvM4kPxIqLMWDymQzitQ&oe=6555D61C' alt=''/>
            
          </div>
          <div>
            <h2 class="welcome4">More than just a detail</h2>
            <p class="welcome4-1">At GoldenWraps, we offer more than just car detailing – we provide a comprehensive automotive makeover. Our range of services goes beyond the basics, including precision paint corrections, protective ceramic coatings, and head-turning custom wraps. Your vehicle is not just a mode of transport; it's a statement, and we ensure that statement is bold and unforgettable. Whether you're seeking a subtle enhancement or a complete transformation, GoldenWraps is dedicated to meeting your automotive needs and surpassing your expectations. Choose us for a holistic approach to car detailing and wrapping that goes the extra mile to ensure your vehicle looks its absolute best on the road.</p>
            <button class='button4'>Book Appointment</button>
          </div>    
          

        </section>

        <section >
          <img class="main-menu-image5" src='https://scontent.fsac1-1.fna.fbcdn.net/v/t39.30808-6/277253042_104059465594588_685355987731375954_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=r7KaNrmrqqkAX8-bzwf&_nc_ht=scontent.fsac1-1.fna&oh=00_AfDVQCG9_UcMqNaym3bqPSGQT0bvM4kPxIqLMWDymQzitQ&oe=6555D61C' alt=''/>
          
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;

