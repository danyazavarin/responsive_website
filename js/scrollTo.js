;(function() {

    let linear = function(t, b, c, d) {
        return c * t / d + b;
    };

    let isAnimatedScroll = false;

    let smoothScroll = function(target, duration) {
        isAnimatedScroll = true;

        let startPosition = window.scrollY;
        let targetPosition = startPosition + target.getBoundingClientRect().top;
        let distance = targetPosition - startPosition;
        let startTime = null;

        let animation = function(currentTime) {
            if (startTime === null) {
                startTime = currentTime;
            }

            let timeElapsed = currentTime - startTime;
            let scrollY = distance * (timeElapsed / duration) + startPosition; // linear

            window.scrollTo(0, scrollY);

            console.log('Distance: ' + distance + '. TimeElapsed: ' + timeElapsed + '. duration: ' + duration + '. StartPosition: ' + startPosition + '. ScrollY: ' + scrollY);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            } else {
                isAnimatedScroll = false;
            }

        };

        requestAnimationFrame(animation);
    };


    myLib.body.addEventListener('click', function(e) {
        let target = e.target;
        let scrollToItemClass = myLib.closestAttr(target, 'data-scroll-to');

        if (scrollToItemClass === null || isAnimatedScroll) {
            return;
        }

        e.preventDefault();
        let scrollToItem = document.querySelector('.' + scrollToItemClass);

        if (scrollToItem) {
            smoothScroll(scrollToItem, 1000);
        }
    });
})();