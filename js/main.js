// seirAnimation.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the scene
    var scene = new THREE.Scene();
    var animationContainer = document.getElementById('seirAnimation');
    var aspectRatio = animationContainer.offsetWidth / 200;
    var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(animationContainer.offsetWidth, 200);
    renderer.setClearColor(0x1c2331); // Set the background color to #1c2331
    animationContainer.appendChild(renderer.domElement);

    // Create box geometry
    var geometry = new THREE.BoxGeometry(1, 1, 1);

    // Create materials for each face with text and different colors
    var materials = [
        createTextMaterial('S', 'Susceptible', '#ff6666', '#ffffff'),  // Bright Red with White Text
        createTextMaterial('E', 'Exposed', '#66ff66', '#000000'),      // Bright Green with Black Text
        createTextMaterial('I', 'Infected', '#6666ff', '#ffffff'),     // Bright Blue with White Text
        createTextMaterial('R', 'Recovered', '#ffff66', '#000000'),    // Bright Yellow with Black Text
        createTextMaterial('SEIR', '', '#ff9966', '#000000'),          // Bright Orange with Black Text
        createTextMaterial('Model', '', '#cccccc', '#000000')          // Bright Gray with Black Text
    ];

    // Create the mesh
    var cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    camera.position.z = 2;

    // Animation function
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();

    // Function to create text material with background color
    function createTextMaterial(text, subText, bgColor, textColor) {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.width = 150;
        canvas.height = 200;

        // Draw background
        context.fillStyle = bgColor;
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Draw text
        context.fillStyle = textColor;
        context.font = '30px Arial';
        context.fillText(text, 50, 128); // Adjusted position
        context.font = '20px Arial';
        context.fillText(subText, 50, 180); // Adjusted position

        var texture = new THREE.CanvasTexture(canvas);
        return new THREE.MeshBasicMaterial({ map: texture });
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        var width = animationContainer.offsetWidth;
        var height = 300; // Match the container height
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
});



(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    
})(jQuery);

