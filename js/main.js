$(document).ready(function () {

    // Navbar Scroll Effect
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Mobile Menu Toggle
    $('.mobile-menu-btn').click(function (e) {
        e.stopPropagation();
        $('.nav-links').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-times');
    });

    // Close mobile menu when clicking outside
    $(document).click(function (e) {
        if (!$(e.target).closest('.navbar').length) {
            $('.nav-links').removeClass('active');
            $('.mobile-menu-btn i').removeClass('fa-times').addClass('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    $('.nav-links a').click(function () {
        if ($(window).width() <= 768) {
            $('.nav-links').removeClass('active');
            $('.mobile-menu-btn i').removeClass('fa-times').addClass('fa-bars');
        }
    });

    // Ensure nav appears/disappears correctly on resize
    $(window).resize(function () {
        if ($(window).width() > 768) {
            $('.nav-links').removeClass('active').css('display', 'flex');
            $('.mobile-menu-btn i').removeClass('fa-times').addClass('fa-bars');
        } else {
            if (!$('.nav-links').hasClass('active')) {
                $('.nav-links').css('display', 'none');
            }
        }
    });

    // Smooth Scrolling to anchors (only for same-page anchors)
    $('a[href^="#"]').on('click', function (e) {
        var target = $(this.getAttribute('href'));
        if (target.length && this.getAttribute('href') !== '#') {
            e.preventDefault();
            var offset = $('.navbar').outerHeight() || 80;
            $('html, body').animate({
                scrollTop: target.offset().top - offset
            }, 600, 'swing');
        }
    });

    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe elements for scroll reveal
    const revealElements = document.querySelectorAll('.stat-card, .alumni-card, .event-card, .section-title-wrapper, .cta-section, .leader-card, .job-card, .contact-info-item');
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Form validation and submission (basic)
    $('form').on('submit', function (e) {
        e.preventDefault();
        var form = $(this);
        var isValid = true;

        form.find('input[required], textarea[required]').each(function () {
            if (!$(this).val().trim()) {
                isValid = false;
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });

        if (isValid) {
            // Show success message (you can customize this)
            alert('Thank you! Your message has been sent.');
            form[0].reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Remove error class on input
    $('input, textarea, select').on('focus', function () {
        $(this).removeClass('error');
    });
});
