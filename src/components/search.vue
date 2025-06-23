<template>
    <div>
        <div class="_search_page">
            <div class="_search_top">
                <div class="container">
                    <h1 class="_search_title">Stay Once Carry Memories Forever</h1>

                    <div class="_search_box">
                        <div @click="searchDrop = !searchDrop" class="_search_box_input">
                            <p class="_search_box_icon"><i class="fa-solid fa-heart"></i></p>
                            <p class="_search_box_name">United Kingdom</p>
                            <p class="_search_box_down"><i class="fa-solid fa-heart"></i></p>

                            <!-- Dropdown -->
                            <div v-if="searchDrop" class="_searchDrop">
                                <div class="_searchDrop_input"><Icon type="android-remove"></Icon>
                                    <Icon type="android-search"></Icon><Icon type="minus"></Icon><Icon type="minus-round"></Icon>
                                    <Icon type="ios-search"></Icon><Icon type="plus"></Icon><Icon type="ios-plus"></Icon>
                                    <input placeholder="Enywhere">
                                </div>
                            </div>
                            <!-- Dropdown -->
                        </div>
                        <div class="_search_box_input">
                            <p class="_search_box_icon"><i class="fa-solid fa-heart"></i></p>
                            <p class="_search_box_name">Check In - Check Out</p>
                            <p class="_search_box_down"><i class="fa-solid fa-heart"></i></p>
                        </div>
                        <div @click="manDrop = !manDrop" class="_search_box_input">
                            <p class="_search_box_icon"><i class="fa-solid fa-heart"></i></p>
                            <p class="_search_box_name">2 adult - 0 children -  1 room</p>
                            <p class="_search_box_down"><i class="fa-solid fa-heart"></i></p>

                            <!-- Dropdown -->
                            <div v-if="manDrop" class="_manDrop">
                                <div class="_manDrop_item">
                                    <div class="_manDrop_left">
                                        <p class="_manDrop_title">Adults</p>
                                        <p class="_manDrop_text">Age 13 or above</p>
                                    </div>

                                    <div class="_manDrop_count">
                                        <p class="_manDrop_count_icon">+</p>
                                        <p class="_manDrop_count_num">12</p>
                                        <p class="_manDrop_count_icon">-</p>
                                    </div>
                                </div>
                                <div class="_manDrop_item">
                                    <div class="_manDrop_left">
                                        <p class="_manDrop_title">Children</p>
                                        <p class="_manDrop_text">Age 2-12</p>
                                    </div>

                                    <div class="_manDrop_count">
                                        <p class="_manDrop_count_icon">+</p>
                                        <p class="_manDrop_count_num">8</p>
                                        <p class="_manDrop_count_icon _dislebled">-</p>
                                    </div>
                                </div>
                                <div class="_manDrop_item">
                                    <div class="_manDrop_left">
                                        <p class="_manDrop_title">Infants</p>
                                        <p class="_manDrop_text">Under 2</p>
                                    </div>

                                    <div class="_manDrop_count">
                                        <p class="_manDrop_count_icon">+</p>
                                        <p class="_manDrop_count_num">1</p>
                                        <p class="_manDrop_count_icon">-</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Dropdown -->
                        </div>
                        <div class="_search_box_button">
                            <button class="_1btn _w_100">Search</button>
                        </div>
                    </div>
                </div>

                <div class="_2filter">
                    <ul class="_2filter_list">
                        <li @click="isPrice = !isPrice" :class="isPrice==true ?'_active _price_drop_li' : '_price_drop_li'">
                            <p class="_2filter_list_name">
                                Price
                                <span class="_down"><i class="fa-solid fa-heart"></i></span>
                            </p>

                            <div v-if="isPrice" class="_price_drop">
                                <h1 class="_price_drop_title">Price range</h1>

                                <div class="_price_drop_slider">
                                    <Slider v-model="value2" range></Slider>
                                </div>

                                <div class="_price_drop_input_main">
                                    <div class="_price_drop_input">
                                        <p class="_price_drop_label">min price</p>

                                        <div class="_price_drop_int_div">
                                            <span>£</span>
                                            <input class="_price_drop_int" placeholder="0.00">
                                        </div>
                                    </div>

                                    <p class="_price_drop_vs">-</p>

                                    <div class="_price_drop_input">
                                        <p class="_price_drop_label">min price</p>

                                        <div class="_price_drop_int_div">
                                            <span>£</span>
                                            <input class="_price_drop_int" placeholder="0.00">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <p class="_2filter_list_name">
                                Type of place:
                                <span class="_down"><i class="fa-solid fa-heart"></i></span>
                            </p>
                        </li>
                        <li><p class="_2filter_list_name"> Wifi</p></li>
                        <li><p class="_2filter_list_name">Free Cancellation</p></li>
                        <li><p class="_2filter_list_name">Kitchen</p></li>
                    </ul>

                    <ul class="_2filter_left _2filter_list">
                        <li>
                            <p @click="filterModal = !filterModal" class="_2filter_list_name">
                                <span class="_icon"><i class="fa-solid fa-heart"></i></span>
                                Filter
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="_search_map_card">
                <div class="row g-0 _h_100">
                    <div class="col-12 col-md-6 col-lg-6 _h_100">
                        <div class="_search_cards _h_100 _1scrollbar">
                            <div class="_search_cards_top">
                                <div class="_search_cards_top_left">
                                    <h1 class="_search_cards_num">20 Results</h1>
                                    <p class="_search_cards_date">Wed Feb 3, 2022 to Mon Feb 8, 2022 </p>
                                </div>

                                <div class="_search_cards_top_right">
                                    <div class="_search_sort">
                                        <p class="_search_sort_text">
                                            Sort By :
                                            <span>Recent</span>
                                            <span class="_icon"><i class="fa-solid fa-heart"></i></span>
                                        </p>
                                    </div>

                                    <ul class="_search_card_type">
                                        <li class="_active"></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="_search_cards_main">
                                <!-- Item -->
                                <div class="_2card" v-for="(item, index) in 4" :key="index">
                                    <div class="_2card_slider">
                                        <Carousel loop>
                                            <CarouselItem>
                                                <div class="_1banner_slider_img">
                                                    <img src="/static/img/unsplash.png" alt="" title="">
                                                </div>
                                            </CarouselItem>
                                            <CarouselItem>
                                                <div class="_1banner_slider_img">
                                                    <img src="/static/img/unsplash.png" alt="" title="">
                                                </div>
                                            </CarouselItem>
                                            <CarouselItem>
                                                <div class="_1banner_slider_img">
                                                    <img src="/static/img/unsplash.png" alt="" title="">
                                                </div>
                                            </CarouselItem>
                                            <CarouselItem>
                                                <div class="_1banner_slider_img">
                                                    <img src="/static/img/unsplash.png" alt="" title="">
                                                </div>
                                            </CarouselItem>
                                        </Carousel>
                                    </div>

                                    <div class="_2card_details">
                                        <div class="_2card_details_left">
                                            <p class="_2card_place">Thailand, Chiang Mai, Thailand</p>

                                            <a href="" class="_2card_name">The Athenaeum Hotel & Residences</a>

                                            <ul class="_2card_tags">
                                                <li>
                                                    <span><i class="fa-solid fa-heart"></i></span>
                                                    Bar
                                                </li>
                                                <li>
                                                    <span><i class="fa-solid fa-heart"></i></span>
                                                    Parking
                                                </li>
                                                <li>
                                                    <span><i class="fa-solid fa-heart"></i></span>
                                                    Free Wifi
                                                </li>
                                                <li>
                                                    <span><i class="fa-solid fa-heart"></i></span>
                                                    Restaurant
                                                </li>
                                                <li>
                                                    <span><i class="fa-solid fa-heart"></i></span>
                                                    Cinama Mall
                                                </li>
                                                <li>
                                                    <span><i class="fa-solid fa-heart"></i></span>
                                                    Gym
                                                </li>
                                            </ul>

                                            <div class="_2card_ratting_main">
                                                <p class="_2card_ratting">7.5</p>

                                                <p class="_2card_ratting_text">Good <span>.133 People rate this</span></p>
                                            </div>
                                        </div>

                                        <div class="_2card_right">
                                            <div class="_2card_wishlist">
                                                <i class="fa-solid fa-heart"></i>
                                            </div>

                                            <h1 class="_2card_price">$359 <br/> <span>/Night</span></h1>
                                        </div>
                                    </div>
                                </div>
                                <!-- Item -->
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-6 _h_100">
                        <div class="_search_map _h_100">
                            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Filter modal -->
        <Modal v-model="filterModal" width="600">
            <p style="text-align:center" slot="header">
                <Icon type="information-circled"></Icon>
                <span>Filter</span>
            </p>
            <div style="text-align:center">
                <p>A    fter this task is deleted, the downstream 10 tasks will not be implemented.</p>
                <p>Will you delete it?</p>
            </div>
            <div style="text-align:center" slot="footer">
                <button style="width:150px" class="_1btn" type="button">Apply</button>
            </div>
        </Modal>
        <!-- Filter modal -->
    </div>
</template>

<script>
    export default {
        data () {
            return {
                value2: [20, 50],
                isPrice: false,
                manDrop:false,
                searchDrop: false,
                filterModal: false
            }
        }
    }
</script>