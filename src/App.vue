<template>
  <div id="app">
    <div id="main-wrapper">
      <!-- Header -->
      <div class="_1header">
        <div class="container">
          <div class="row align-items-center">
            <div class="col col-md col-lg">
              <ul class="_1header_social">
                <li>
                  <a class="_1header_social_link" href="">
                    <font-awesome-icon :icon="['fab', 'facebook-f']" />
                  </a>
                </li>
                <li>
                  <a class="_1header_social_link" href="">
                    <font-awesome-icon :icon="['fab', 'twitter']" />
                  </a>
                </li>
                <li>
                  <a class="_1header_social_link" href="">
                    <font-awesome-icon :icon="['fab', 'instagram']" />
                  </a>
                </li>
                <li>
                  <a class="_1header_social_link" href="">
                    <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                  </a>
                </li>

                <li>
                  <div class="_1header_openTime">
                    <div class="_1header_openTime_icon">
                      <font-awesome-icon :icon="['far', 'clock']" />
                    </div>
                    <p class="_1header_openTime_text">Mon - Fri: 09.00am - 10.00pm ~ londonplumbingnheating@hotmail.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="col-auto col-md-auto col-lg-auto">
              <button class="_1btn">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Header -->
            <!-- Sponsor Logo -->
            <div class="_sponsor">
                <div class="container">
                <div class="_sponsor_slider" style="
                    --width: 599px;
                    --height:90px;  
                    --quantity:7;
                ">
                  <div class="_sponsor_slider_list">
                    <!-- Items -->
                    <div style="--position:1;" class="_sponsor_item">
                      <p class="_sponsor_text"><i>Emergency Repair: 07766515390</i></p>
                    </div>
                    <!-- Items -->
                    <!-- Items -->
                    <div style="--position:2;" class="_sponsor_item _sponsor_item2">
                      <p class="_sponsor_text"><i>Emergency Repair tel: 020-859-43276</i></p>
                    </div>
                    <!-- Items -->
                    <!-- Items -->
                    <div style="--position:3;" class="_sponsor_item">
                      <p class="_sponsor_text"><i>Emergency Repair: 07766515390</i></p>
                    </div>
                    <!-- Items -->
                    <!-- Items -->
                    <div style="--position:4;" class="_sponsor_item">
                      <p class="_sponsor_text"><i>Emergency Repair: 07766515390</i></p>
                    </div>
                    <!-- Items -->
                    <!-- Items -->
                    <div style="--position:5;" class="_sponsor_item _sponsor_item2">
                      <p class="_sponsor_text"><i>Emergency Repair tel: 020-859-43276</i></p>
                    </div>
                    <!-- Items -->
                    <!-- Items -->
                    <div style="--position:6;" class="_sponsor_item">
                      <p class="_sponsor_text"><i>Emergency Repair: 07766515390</i></p>
                    </div>
                    <!-- Items -->
                    <!-- Items -->
                    <div style="--position:7;" class="_sponsor_item _sponsor_item2">
                      <p class="_sponsor_text"><i>Emergency Repair tel: 020-859-43276</i></p>
                    </div>
                    <!-- Items -->
                    <!-- Items -->
                    <div style="--position:8;" class="_sponsor_item">
                      <p class="_sponsor_text"><i>Emergency Repair: 07766515390</i></p>
                    </div>
                    <!-- Items -->
                    <!-- Items -->
                    <div style="--position:9;" class="_sponsor_item _sponsor_item2">
                      <p class="_sponsor_text"><i>Emergency Repair tel: 020-859-43276</i></p>
                    </div>
                    <!-- Items -->
                    <!-- Items -->
                    <div style="--position:10;" class="_sponsor_item">
                      <p class="_sponsor_text"><i>Emergency Repair: 07766515390</i></p>
                    </div>
                    <!-- Items -->
                    <!-- Items -->
                    <!-- <div style="--position:2;" class="_sponsor_item">
                        <img class="_sponsor_img" src="/static/img/client-2.png" alt="" title="">
                    </div> -->
                    <!-- Items -->
                    </div>
                </div>
                </div>
            </div>
            <!-- Sonsor Logo -->
      
      <!-- Menu -->
      <div :class="scrollY > 170 ? '_1menu _1menu_fixed': '_1menu'">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md col-lg">
              <div class="_1menu_logo">
                <router-link to="/">
                  <!-- <h1 class="">Logo</h1> -->
                  <!-- <img class="_menu_logo" src="/static/img/logo_main.jpeg" alt="" title=""> -->
                  <img class="_menu_logo" src="/static/img/logo_main.jpeg" alt="" title="">
                </router-link>
              </div>
            </div>
            <div class="col-12 col-md-auto col-lg-auto">
              <ul class="_1menu_list">
                <li class="_1menu_list_li">
                  <router-link :class="$route.path == '/'? '_1menu_list_text _active' : '_1menu_list_text'" to="/">Home</router-link>
                </li>
                <li v-if="$route.path != '/plumbing' && $route.path != '/heating' && $route.path != '/contactUs'" class="_1menu_list_li" @click="onclickServices">
                  <router-link class="_1menu_list_text" to="" >Services</router-link>
                </li>
                <li class="_1menu_list_li">
                  <router-link :class="$route.path == '/plumbing'? '_1menu_list_text _active' : '_1menu_list_text'" to="/plumbing">Plumbing</router-link>
                </li>
                <li class="_1menu_list_li">
                  <router-link :class="$route.path == '/heating'? '_1menu_list_text _active' : '_1menu_list_text'" to="/heating">Heating</router-link>
                </li>
                <li class="_1menu_list_li">
                  <router-link :class="$route.path == '/contactUs'? '_1menu_list_text _active' : '_1menu_list_text'" to="/contactUs">Contact Us</router-link>
                </li>
                <!-- <li class="_1menu_list_li">
                  <router-link class="_1menu_list_text" to="/aboutUs">About Us</router-link>
                </li> -->
              </ul>
            </div>
            <div class="col-12 col-md col-lg">
              <div class="_1menu_right">
                <div class="_1menu_call">
                  <div class="_1menu_call_icon">
                    <font-awesome-icon :icon="['fas', 'phone']" />
                  </div>
                  <div class="_1menu_call_con">
                    <p class="_1menu_call_con_text">Quick Contact</p>
                    <a class="_1menu_call_num" href="">07766515390</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Menu -->
      
      <!-- Mobile menu -->
      <div :class="scrollY > 170 ? '_mob_bar_fixed': ''" class="_mob_bar">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="_1menu_logo">
                <router-link to="/">
                  <!-- <h2 class="_1menu_logo_text">Logo</h2> -->
                  
                   <img class="_menu_logo" src="/static/img/logo_main.jpeg" alt="" title="">
                </router-link>
              </div>
            </div>

            <div class="col-auto">
              <div @click="isMenuClick" class="_mob_bar_icon"><Icon type="md-list" /></div>
            </div>
          </div>
        </div>
      </div>

      <div class="_sidebar_main_all _1scrollbar _menu_page" :class="isMenuOpen ? '_sidebar_open': ''">
        <span @click="isMenuOpen = false" class="_sidebar_close"><Icon type="md-close" /></span>
            <template>
                <div class="_sidebar_list_main">
                  <div class="_1menu_logo _mob_logo">
                    <router-link to="/">
                      <!-- <h1 class="">Logo</h1> -->
                      <!-- <img class="_menu_logo" src="/static/img/logo_main.jpeg" alt="" title=""> -->
                      <img class="_menu_logo" src="/static/img/logo_main.jpeg" alt="" title="">
                    </router-link>
                  </div>

                    <ul class="_sidebar_list">
                        <li @click="isMenuOpen = false">
                            <router-link :class="$route.path == '/'? '_1menu_list_text _active' : '_1menu_list_text'" to="/">
                                <p class="_sidebar_list_icon">
                                  <i class='bx  bx-home'  ></i>  
                                </p>
                                <p class="_sidebar_list_text">Home</p>
                            </router-link>
                        </li>
                        <li v-if="$route.path != '/plumbing' && $route.path != '/heating' && $route.path != '/contactUs'" @click="onclickServices">
                              <router-link class="_1menu_list_text" to="" >
                                <p class="_sidebar_list_icon">
                                  <i class="bx bx-cog"></i>
                                </p>
                                <p class="_sidebar_list_text">Services</p>
                              </router-link>
                        </li>
                        <li @click="isMenuOpen = false">
                            <router-link :class="$route.path == '/plumbing'? '_1menu_list_text _active' : '_1menu_list_text'" to="/plumbing">
                                <p class="_sidebar_list_icon">
                                  <Icon type="md-hammer" />  
                                </p>
                                <p class="_sidebar_list_text">Plumbing</p>
                            </router-link>
                        </li>
                        <li @click="isMenuOpen = false">
                            <router-link :class="$route.path == '/heating'? '_1menu_list_text _active' : '_1menu_list_text'" to="/heating">
                                <p class="_sidebar_list_icon">
                                  <i class="bx bx-cog"></i> 
                                </p>
                                <p class="_sidebar_list_text">Heating</p>
                            </router-link>
                        </li>
                        <li @click="isMenuOpen = false">
                            <router-link :class="$route.path == '/contactUs'? '_1menu_list_text _active' : '_1menu_list_text'" to="/contactUs">
                                <p class="_sidebar_list_icon">
                                  <i class="bx bx-phone"></i>
                                </p>
                                <p class="_sidebar_list_text">Contact Us</p>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </template>
      </div>
      <!-- Mobile menu -->

      <!-- Router pages -->
      <router-view></router-view>
      <!-- Router pages -->


      <div class="_main_layout" v-if="$route.path == '/'">
        <div class="_1content">
            <!-- banner -->
            <div class="_1banner">
                <div class="container">
                    <div class="_1banner_con">
                        <h1 class="_1banner_title">One Off Any Emergency Plumbing in London</h1>
                        
                        <p class="_1banner_subtitle">Available 24/7 to Quickly Assist with Any Emergency Plumbing or Heating Problems</p>
                        <p class="_1banner_subtitle">Call us for help at 07766515390</p>

                        <div class="_1banner_tag">
                            <div class="_1banner_tag_firstRow">
                                <div class="_1banner_tag_item">
                                    <div class="_1banner_tag_icon">
                                        <font-awesome-icon :icon="['fas', 'check']" />
                                    </div>

                                    <p class="_1banner_tag_title">24/7 service</p>
                                </div>
                                <div class="_1banner_tag_item">
                                    <div class="_1banner_tag_icon">
                                        <font-awesome-icon :icon="['fas', 'check']" />
                                    </div>
                                    <p class="_1banner_tag_title">Pay as You Go</p>
                                </div>
                            </div>

                            <div class="_1banner_tag_secRow">
                                <div class="_1banner_tag_item">
                                    <div class="_1banner_tag_icon">
                                        <font-awesome-icon :icon="['fas', 'check']" />
                                    </div>

                                    <p class="_1banner_tag_title">Eco-friendly</p>
                                </div>
                                <!-- <div class="_1banner_tag_item">
                                    <div class="_1banner_tag_icon">
                                        <font-awesome-icon :icon="['fas', 'check']" />
                                    </div>
                                    <p class="_1banner_tag_title">Cashback up to £150</p>
                                    
                                </div> -->
                            </div>
                        </div>

                        <div class="_1banner_search">
                            <div class="_1banner_search_icon"></div>

                            <div class="_1banner_search_input">
                                <input type="text" placeholder="Enter your email here">
                            </div>

                            <div class="_1banner_search_button">
                                <button class="_1btn" type="button"> Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- banner -->

       

       
      

            <!-- About Us -->
            <div class="_hAbout">
                <div class="container">
                    <p class="_hAbout_subtitle">About Us</p>
                    <h1 class="_hAbout_title">London Heating & Plumbing</h1>

                    <p class="_hAbout_text">
                        Your home deserves nothing but the best.

                        London Plumbing & Heating will make sure you'll get the most reliable service from one of our most ethical and dedicated experts. We are a team of affordable, reliable and professional plumbers with experience in all aspects of plumbing, heating and ventilation.

                        We are fixers to the door!
                    </p>
                    <p class="_hAbout_text">
                        <!-- We are full-service residential contractors with the ability to work harmoniously with architects, engineers and general contractors. -->
                    </p>
                </div>

                <div id="services"></div>

                <div class="_hAbout_menu">
                    <div class="container _relative">
                        <span class="_sun"></span>
                        <span class="_cloud"></span>
                        <div class="row">
                            <div class="col-6 col-lg-2 offset-lg-1">
                                <div class="_hAbout_pic_main">
                                    <router-link class="_hAbout_link" to="/plumbing">
                                        <img class="_hAbout_pic" src="/static/img/plumbing-cropped.jpg" alt="">
    
                                        <i class="_hAbout_menu_title">Plumbing</i>
                                    </router-link>
                                </div>
                            </div>
                            <div class="col-6 col-lg-2">
                                <div class="_hAbout_pic_main">
                                    <router-link class="_hAbout_link" to="/heating">
                                        <img class="_hAbout_pic" src="/static/img/heating.png" alt="">
    
                                        <i class="_hAbout_menu_title">Heating</i>
                                    </router-link>
                                </div>
                            </div>
                            <div class="col-6 col-lg-2">
                                <div class="_hAbout_pic_main">
                                    <router-link class="_hAbout_link" to="/aboutUs">
                                        <img class="_hAbout_pic" src="/static/img/rapir.jpg" alt="">

                                        <i class="_hAbout_menu_title">Repair</i>
                                    </router-link>
                                </div>
                            </div>
                            <div class="col-6 col-lg-4 offset-lg-1">
                                <div class="_hAbout_pic_main2">
                                    <router-link class="_hAbout_link2" to="/contactUs">
                                        <img class="_hAbout_pic2" src="//bristolcentralheating.co.uk/wp-content/uploads/2018/12/call.jpg" alt="">
    
                                        <i class="_hAbout_menu_title">Contact Us</i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="_hAbout_hr_sec">
                        <div class="_hAbout_hr"></div>
                    </div>
                </div>
            </div>
            <!-- About Us -->

            <!-- Why choose us -->
            <div class="_why">
                <div class="container">
                <!-- <div class="_why_top_con" style="display: none;">
                    <h1 class="_why_title">Why Choose Us</h1>

                    <p class="_why_top_text">
                    It is a long established fact that a reader will be distracted by the readable content.
                    <br>
                    There are many variations of passages of Lorem Ipsum.
                    </p>
                </div> -->

                <div class="_why_con">
                    <div class="row align-items-center">
                    <div class="col-12 col-md-3">
                        <ul class="_why_card_all">
                        <li>
                            <div class="_why_card">
                            <div class="_why_card_icon">
                                <i class='bx  bx-smile'></i> 
                            </div>

                            <p class="_why_card_title">Customer Support</p>
                            <p class="_why_card_text">
                                Friendly and helpful engineers, always willing to help
                            </p>
                            </div>
                        </li>
                        <li>
                            <div class="_why_card">
                            <div class="_why_card_icon women">
                                <i class='bx  bx-brightness'  ></i> 
                            </div>

                            <p class="_why_card_title">Qualified and Insured</p>
                            <p class="_why_card_text">
                                London Heating and Plumbing has the relevant industry qualifications and insurance
                            </p>
                            </div>
                        </li>
                        <li>
                            <div class="_why_card">
                            <div class="_why_card_icon umbrella">
                                <i class='bx  bx-cloud-snow'  ></i> 
                            </div>

                            <p class="_why_card_title">Environmentally Conscious</p>
                            <p class="_why_card_text">
                                Effective solutions to maximise energy efficiency
                            </p>
                            </div>
                        </li>
                        </ul>
                    </div>
                    <div class="col-12 col-md">
                        <div class="_why_pic">
                        <img class="_why_img" src="/static/img/plumbing_s.png" alt="" title="">
                        <!-- i am here  -->
                        </div>
                    </div>
                    <div class="col-12 col-md-3">
                        <ul class="_why_card_all _why_card_all_right">
                        <li>
                            <div class="_why_card">
                            <div class="_why_card_icon">
                                <i class='bx  bx-building-house'  ></i> 
                            </div>

                            <p class="_why_card_title">Based in London</p>
                            <p class="_why_card_text">
                                Quick response times for London
                            </p>
                            </div>
                        </li>
                        <li>
                            <div class="_why_card">
                            <div class="_why_card_icon women">
                                <i class='bx  bx-badge-check'  ></i> 
                            </div>

                            <p class="_why_card_title">High Quality Equipment</p>
                            <p class="_why_card_text">
                                We use the best available equipment to carry out our plumbing and heating installations
                            </p>
                            </div>
                        </li>
                        <li>
                            <div class="_why_card">
                            <div class="_why_card_icon umbrella">
                                <i class='bx  bx-sun'  ></i>  
                            </div>

                            <p class="_why_card_title">Affordable Heating and Plumbing</p>
                            <p class="_why_card_text">
                                Competitive industry rates for the region of London
                            </p>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <!-- Why choose us -->

            <!-- Frequently asked questions -->
            <div class="_home_frequently">
                <div class="container">
                    <h1 class="_1title">Frequently asked questions</h1>

                    <div class="_home_frequently_tabs">
                         <Collapse v-model="value">
                            <Panel name="1">
                                Which payment methods do you accept?
                                <template #content>
                                    We accept debit cards, business cards and cash.
                                </template>
                            </Panel>
                            <Panel name="2">
                                What services do you offer?
                                <template #content>
                                    We offer a wide range of professional plumbing services for both domestic clients, covering everything from routine maintenance to emergency repairs. Our expertise includes bathroom and kitchen plumbing, unblocking sinks, toilets, and baths, as well as general plumbing repairs and pipe fitting. We also provide power flushing, radiator repairs, and the installation of radiator thermostat valves. Our team is experienced in shower and tap repairs, underfloor heating system fixes, and water pump installation and servicing. Additionally, we handle water supply pipe repairs and offer reliable emergency plumbing support, ensuring your systems run smoothly and efficiently.
                                </template>
                            </Panel>
                            <Panel name="3">
                                What areas do you serve?
                                <template #content>
                                 All are in London
                                </template>
                            </Panel>
                            <!-- <Panel name="4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                <template #content>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel auctor diam. Fusce gravida mollis mauris sit amet vestibulum. Suspendisse volutpat metus et rhoncus pharetra.
                                    Donec vitae mollis dui. Ut consequat massa quis arcu aliquam pharetra.
                                </template>
                            </Panel>
                            <Panel name="5">
                                Lorem ipsum dolor sit amet?
                                <template #content>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel auctor diam. Fusce gravida mollis mauris sit amet vestibulum. Suspendisse volutpat metus et rhoncus pharetra.
                                    Donec vitae mollis dui. Ut consequat massa quis arcu aliquam pharetra.
                                </template>
                            </Panel> -->
                        </Collapse>
                    </div>
                </div>
            </div>
            <!-- Frequently asked questions -->

            
        </div>
      </div>

      <!-- Footer -->
      <footer class="_footer">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-auto w-37">
                      <div class="_footer_we">
                        <h2 class="_footer_we_title">london plumbing & heating</h2>
                        <p class="_footer_we_text">We are London based plumbing,heating and Repair services provider.</p>
                        <div class="_footer_we_pic">
                          <img src="/static/img/gas_safe.jpg" alt="" title="">
                        </div>

                      </div>
                  </div>

                  <div class="col-12 col-md">
                      <div class="_footer_list">
                        <h2 class="_footer_list_title">Services</h2>
                        <ul class="_footer_list_ul">
                          <li><a href="#">Plumbing</a></li>
                          <!-- <li><a href="#">Tile and Grout</a></li>
                          <li><a href="#">Housekeeping</a></li>
                          <li><a href="#">Window Cleaning</a></li>
                          <li><a href="#">Pool Cleaning</a></li> -->
                        </ul>
                      </div>
                  </div>

                  <div class="col-12 col-md">
                        <div class="_footer_list">
                          <h2 class="_footer_list_title">Pages</h2>
                          <ul class="_footer_list_ul">
                            <!-- <li><a href="#">About Us</a></li> -->
                            <!-- <li><a href="#">Testimonial</a></li> -->
                            <!-- <li><a href="#">Housekeeping</a></li> -->
                            <li><a href="#">Faqs</a></li>
                            <li><a href="#">Contact Us</a></li>
                          </ul>
                        </div>
                      </div>

                      <div class="col-12 col-md">
                          <div class="_footer_info_con">
                            <h2 class="_footer_info_num"> 07766515390</h2>
                            <ul class="_footer_info_email">
                              <li>londonplumbingnheating@hotmail.com</li>
                              <li>
                                205 Albright court 
                                  8 mast street 
                                  Ig117hd
                                  London
                              </li>
                            </ul>

                            <ul class="_footer_socail">
                              <li><a href="#"><Icon type="logo-facebook" /></a></li>
                              <li><a href="#"><Icon type="logo-googleplus" /></a></li>
                              <li><a href="#"><Icon type="logo-twitter" /></a></li>
                              <li><a href="#"><Icon type="logo-instagram" /></a></li>
                            </ul>
                          </div>
                      </div>


          </div>

          <p class="_footer_copy">
            © 2025 All rights reserved by .., 
            By london plumbing and heating.
          </p>
        </div>
      </footer>
      <!-- Footer -->
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isMenuOpen:false,
      scrollY: 0,
      tab: 1,
      bottomOfWindow: 0
    }
  },

  methods:{
  onclickServices(){
    // console.log("hello")
    this.isMenuOpen = false
    const el = document.getElementById('services');
      el.scrollIntoView({behavior: "smooth"});
  },
    
    // onClickss(){
    //   alert('hi');
    // },

    handleScroll(){
      this.scrollY = window.scrollY
    },

    isMenuClick(){
      this.isMenuOpen = true
    }
  },
  
  created() {
   
  },

  mounted(){
    window.addEventListener('scroll', this.handleScroll);

    window.onscroll = () => {
      this.bottomOfWindow =  (window.pageYOffset  + window.innerHeight  ) > (document.body.scrollHeight -100);
      if (this.bottomOfWindow) {
        // if (this.noMoreFeed || this.isFeedLoading || this.loadMoreFeed || this.$route.name == 'post-id') {
        //   return;
        // }
        
        // if(this.$route.name == 'profile-user-tab' || this.$route.name == 'search-tab'  || this.$route.name == 'group-group-tab' || this.$route.name == 'page-user-tab' || this.$route.name == 'events-event-tab'){
        //    this.fetchMoreProfileFeed();
        // }else{
        //    this.fetchNewFeed();
        // }
      }
    };

    console.log('ss', this.scrollY)
  },
}
</script>