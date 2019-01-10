import React, {Component} from 'react';
import IndependencedayClock from './independencedayclock';

export default class Independenceday extends Component {
    render() {
        return(
    <div className="background3">
          <div>       
            <div> 
                <div class="month"> 
                    <ul> 
                        <a>July2019</a>
                    </ul>
                </div>                     
            </div>
                <ul class="days"> 
                    <i>01</i>
                    <i>02</i>
                    <i>03</i>
                    <i><span class="active">04</span></i>
                    <i>05</i>
                    <i>06</i>
                    <i>07</i>
                    <i>08</i>
                    <i>09</i>
                    <i>10</i>
                </ul>
                <IndependencedayClock/>
                <div>
        <div className="map1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48700.71581236511!2d-111.71142886077466!3d40.280309646892775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d900b1b52971b%3A0xc448a0b7204b498e!2sAmerica&#39;s+Freedom+Festival!5e0!3m2!1sen!2sus!4v1546934491063" width="1160" height="250" frameborder="0"></iframe>
        </div>
            <div className="contacti">
                <h1>HOURS 8-12PM</h1>
            </div>
        </div> 
    </div>   
    <div className="video3">
    <iframe width="1160" height="400" src="https://www.youtube.com/embed/18212B4yfLg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>
        );
    }
}


