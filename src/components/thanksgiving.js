import React, {Component} from 'react';
import ThanksgivingClock from './thanksgivingclock';

export default class Thanksgiving extends Component {
    render() {
        return(
        <div className="background4">
            <div>       
              <div> 
                <div class="month"> 
                    <ul> 
                        <a>November2019</a>
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
                    <i><span class="active">28</span></i>
                    <i>29</i>
                </ul>
                <ThanksgivingClock/>
                <div>
        <div className="map1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48595.229392346875!2d-111.92305262089843!3d40.42652940000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528027204e91d9%3A0x8e5df16ef3233e24!2sHidden+Falls+At+Thanksgiving+Point!5e0!3m2!1sen!2sus!4v1546935611329" width="1160" height="250"frameborder="0"></iframe>
        </div>
            <div className="contacti">
                <h1>HOURS 4-8PM</h1>
            </div>
            </div> 
        </div>   
        <div className="video4">
        <iframe width="1160" height="400" src="https://www.youtube.com/embed/_dXWHEVgOII" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>

        )
    }
}


