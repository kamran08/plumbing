<template>
    <div>
        <div class="_1content">
            <!-- Banner -->
            <div class="_4banner">
                <div class="_4banner_main">
                    <h1 class="_4banner_title">Hotel Booking</h1>
                    <p class="_4banner_text">Creating a conscious and safe community where human<br/> connection and new ideas can thrive</p>
                </div>
            </div>
            <!-- Banner -->

            <!-- Form -->
            <div class="_log_form_main">
                <h2 class="_log_form_title">Login</h2>

                <div class="_log_form">
                    <div class="_log_input_group">
                        <input class="_log_input" placeholder="Email" type="text">
                    </div>
                    <div class="_log_input_group">
                        <input class="_log_input" placeholder="Password" type="password">
                    </div>
                    <div class="_log_button">
                        <button class="_1btn _btn_long">Login</button>
                    </div>

                    <p class="_log_forget"><router-link to="/forgetPassword">Forgot password?</router-link></p>
                </div>
            </div>
            <!-- Form -->
        </div>
    </div>
</template>