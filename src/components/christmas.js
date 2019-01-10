import React, {Component} from 'react';
import Christmasclock from './christmasclock';


export default class Christmas extends Component {
    render() {
        return(
        <div className="background1">
          <div>       
            <div> 
                <div class="month">   
                    <ul>
                        <a>December2019</a>
                    </ul>
                </div>                     
            </div>
                <ul class="days"> 
                    <i>20</i>
                    <i>21</i>
                    <i>22</i>
                    <i>23</i>
                    <i>24</i>
                    <i><span class="active">25</span></i>
                    <i>26</i>
                    <i>27</i>
                    <i>28</i>
                </ul>
                <Christmasclock/>
                <div>
        <div className="map1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1849227827324!2d-122.39537978456222!3d37.78570581930325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807bcc42b837%3A0xf5fb5bcb9c7795ab!2sTerra+Gallery+%26+Event+Venue!5e0!3m2!1sen!2sus!4v1544739995525" width="1160" height="250" frameborder="0"></iframe>
        </div>
                <div className="contacti">
                    <h1>HOURS 7-12PM</h1>
                </div>
            </div>
        </div>
        <div class="video1">
        <iframe width="1160" height="400" src="https://www.youtube.com/embed/hSB7-vcKZMA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
        );
      }
  }
