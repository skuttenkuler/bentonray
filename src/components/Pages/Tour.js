import React, {Component} from 'react';
import './Tour.css'


class Tour extends Component {
    componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://widget.bandsintown.com/main.min.js";
        script.async = true;

        document.body.appendChild(script);
    }
   render() {
    return (
        <div className="tour_body">
            <div className="tour_container">
                <div className="tour_content">
                <a class="bit-widget-initializer" data-artist-name="Benton Ray" data-display-local-dates="false" data-display-past-dates="false" data-auto-style="false" data-text-color="#000000" data-link-color="#d9a5cb" data-background-color="rgba(0,0,0,0)" data-display-limit="15" data-link-text-color="#FFFFFF" data-display-lineup="false" data-display-play-my-city="false" data-separator-color="rgba(124,124,124,0.25)"></a>

            </div>
            </div>
        </div>







        );
    }
}


export default Tour;