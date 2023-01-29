<template>
    <section class="contact py-5 justify-content-center align-items-center" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-12 text-center">
                    <div>
                        <h2 class="mb-4">Profiles</h2>
                        <div class="social-links">
                            <a
                                href="https://github.com/TheBunksTie"
                                class="social-icon-link"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="GitHub"
                                target="_blank">
                                <i-uil-github />
                            </a>
                            <a
                                href="https://www.xing.com/profile/Jakob_Sautter2"
                                class="social-icon-link"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Xing"
                                target="_blank">
                                <i-bxl-xing />
                            </a>
                            <a
                                href="https://github.com/TheBunksTie"
                                class="social-icon-link"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Web"
                                target="_blank">
                                <i-uil-globe />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="py-5 col-lg-12 col-12 text-center">
                    <div class="contact-form">
                        <h2 class="mb-4">Let's talk!</h2>

                        <form action="https://usebasin.com/f/29d0fb0be489" method="POST" enctype="multipart/form-data" id="contactForm">
                            <div class="row">
                                <div class="col-lg-6 col-12">
                                    <input type="text" class="form-control" name="name" placeholder="Your Name" id="name" required />
                                </div>

                                <div class="col-lg-6 col-12">
                                    <input type="email" class="form-control" name="email" placeholder="Email" id="email" required />
                                </div>

                                <div class="col-12">
                                    <textarea name="message" rows="6" class="form-control" id="message" placeholder="Message" required />
                                </div>

                                <div class="ms-lg-auto col-lg-5 col-12 text-center">
                                    <input type="submit" class="form-control submit-btn" value="Send" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
