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
                    --width: 120px;
                    --height:90px;  
                    --quantity:7;
                ">
                    <div class="_sponsor_slider_list">
                    <!-- Items -->
                    <div style="--position:1;" class="_sponsor_item">
                      Emergency Repair 004304094039439094309
                        
                    </div>
                    <!-- Items -->
                    <!-- Items -->
                    <div style="--position:2;" class="_sponsor_item">
                        <img class="_sponsor_img" src="/static/img/client-2.png" alt="" title="">
                    </div>
                    <!-- Items -->
                    <!-- Items -->
                    <div style="--position:3;" class="_sponsor_item">
                        <img class="_sponsor_img" src="/static/img/client-3.png" alt="" title="">
                    </div>
                    <!-- Items -->
                    <!-- Items -->
                    <div style="--position:4;" class="_sponsor_item">
                        <img class="_sponsor_img" src="/static/img/client-4.png" alt="" title="">
                    </div>
                    <!-- Items -->
                    <!-- Items -->
                    <div style="--position:5;" class="_sponsor_item">
                        <img class="_sponsor_img" src="/static/img/client-5.png" alt="" title="">
                    </div>
                    <!-- Items -->
                    <!-- Items -->
                    <div style="--position:6;" class="_sponsor_item">
                        <img class="_sponsor_img" src="/static/img/client-6.png" alt="" title="">
                    </div>
                    <!-- Items -->
                    <div style="--position:7;" class="_sponsor_item">
                        <img class="_sponsor_img" src="/static/img/client-7.png" alt="" title="">
                    </div>
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
                  <router-link class="_1menu_list_text _active" to="/">Home</router-link>
                </li>
                <li class="_1menu_list_li">
                  <router-link class="_1menu_list_text" to="#services">Services</router-link>
                </li>
                <li class="_1menu_list_li">
                  <router-link class="_1menu_list_text" to="/contactUs">Contact Us</router-link>
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
                    <!-- <p class="_sidebar_list_title">Explore</p> -->

                    <ul class="_sidebar_list">
                        <li @click="isMenuOpen = false">
                            <router-link to="/">
                                <p class="_sidebar_list_icon">
                                  <i class='bx  bx-home'  ></i>  
                                </p>
                                <p class="_sidebar_list_text">Home</p>
                            </router-link>
                        </li>
                        <li @click="isMenuOpen = false">
                            <router-link to="/services">
                                <p class="_sidebar_list_icon">
                                  <i class="bx bx-cog"></i>
                                </p>
                                <p class="_sidebar_list_text">Services</p>
                            </router-link>
                        </li>
                        <!-- <li @click="isMenuOpen = false">
                            <router-link to="/aboutUs">
                                <p class="_sidebar_list_icon">
                                  <i class="bx bx-user"></i>
                                </p>
                                <p class="_sidebar_list_text">About Us</p>
                            </router-link>
                        </li> -->
                        <li @click="isMenuOpen = false">
                            <router-link to="/contactUs">
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

      <div class="_main_layout">
        <router-view></router-view>
      </div>

      <!-- Footer -->
      <!-- <footer class="_footer">
        <div class="container">
          <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="row">
                  <div class="col-md-7 col-sm-6 col-12">
                      <div class="_footer_we">
                        <h2 class="_footer_we_title">Who we are</h2>
                        <p class="_footer_we_text">
                          Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur
                          aut odit aut fugit, sed quia consequuntur.
                        </p>
                      </div>
                  </div>
                  
                  <div class="col-md-5 col-sm-6">
                      <div class="_footer_list">
                        <h2 class="_footer_list_title">Services</h2>
                        <ul class="_footer_list_ul">
                          <li><a href="#">Carpet Cleaning</a></li>
                          <li><a href="#">Tile and Grout</a></li>
                          <li><a href="#">Housekeeping</a></li>
                          <li><a href="#">Window Cleaning</a></li>
                          <li><a href="#">Pool Cleaning</a></li>
                        </ul>
                      </div>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="row">
                      <div class="col-md-6 col-sm-6">
                        <div class="_footer_list">
                          <h2 class="_footer_list_title">Pages</h2>
                          <ul class="_footer_list_ul">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Testimonial</a></li>
                            <li><a href="#">Housekeeping</a></li>
                            <li><a href="#">Faqs</a></li>
                            <li><a href="#">Contact Us</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6">
                          <div class="_footer_info_con">
                            <h2 class="_footer_info_num"> 07766515390</h2>
                            <ul class="_footer_info_email">
                              <li>info@cleaning.com</li>
                              <li>7DU CGE Green Road, London, United Kindon</li>
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
              </div>
              
          </div>

          <p class="_footer_copy">
            © 2024 All rights reserved by Hussain , 
            By cleaning company.
          </p>
        </div>
      </footer> -->
      <footer class="_footer">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-auto w-37">
                      <div class="_footer_we">
                        <h2 class="_footer_we_title">Who we are</h2>
                        <p class="_footer_we_text">

                          We are London based plumbing,heating and Repair services provider.
                        </p>
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
      console.log('ssss', this.bottomOfWindow)
      console.log('inner', window.innerHeight)
      console.log('page', window.pageYOffset)
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