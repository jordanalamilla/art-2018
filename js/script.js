$(function() {

    console.log(window.innerWidth);

    if( window.innerWidth > 1200 ) {

        // CONVERT VERTICAL SCROLLING TO HORIZONTAL
        scrollConverter.activate();

    }

        // VARIABLE TO AVOID MULTIPLE MOUSEMOVE()'S
        let oldTimestamp = 0;

        // HIDE OVERLAY AND DRAWING INFO ON PAGE LOAD
        $( '#overlay' ).delay( 5500 ).fadeOut( 500 );
        $( '.drawing-info' ).delay( 5500 ).fadeOut( 500 );

        // WHEN THE MOUSE IS MOVED, TEMPORARILY SHOW OVERLAY AND DRAWING INFO
        $( 'body' ).mousemove((_e) => {

            if( ( _e.timeStamp - oldTimestamp ) > 6000 ) {
                $( '#overlay' ).fadeIn( 500 ).delay( 5000 ).fadeOut( 500 );
                $( '.drawing-info' ).fadeIn( 500 ).delay( 5000 ).fadeOut( 500 );
                oldTimestamp = _e.timeStamp;
            }

        });
});