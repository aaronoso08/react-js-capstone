import React, {Component} from 'react';
import Newyearclock from './newyearclock';

export default class Newyear extends Component {
    render() {
        return(
        <div className="background2">
          <div>       
            <div> 
                <div class="month"> 
                    <ul> 
                        <a>December2019</a>
                    </ul>
                </div>                     
            </div>
                <ul class="days"> 
                    <i>22</i>
                    <i>23</i>
                    <i>24</i>
                    <i>25</i>
                    <i>26</i>
                    <i>27</i>
                    <i>28</i>
                    <i>29</i>
                    <i>30</i>
                    <i><span class="active">31</span></i>
                </ul>
                <Newyearclock/>
                <div>
        <div className="map1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24180.357691050376!2d-74.00569889079938!3d40.750042726960736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258536fefff7f%3A0xe24fc5b0a714da3!2sBallDrop.com!5e0!3m2!1sen!2sus!4v1546933605523" width="1160" height="250"frameborder="0"></iframe>
        </div>
            <div className="contacti">
                <h1>HOURS 8-12PM</h1>
            </div>
            </div> 
        </div>   
        <div className="video2">
        <iframe width="1160" height="400" src="https://www.youtube.com/embed/A4m1hxW6O3o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
        )
    }
}


