import React, { Component } from 'react'

export default class ReservationForm extends Component {
    render () {
        return (
            <div>
        <div id="modal" class="iziModal">
            <div class="container">

                <div class="row text-right">
                    <div class="col">
                        <a  class="btn mt-3" href="#" data-izimodal-close="" data-izimodal-transitionout="fadeOutRight">
                            Close
                        </a>
                    </div>
                </div> 

                <div class="row text-center">
                    <div class="col">

                        <h2 class="mb-0">Reservation</h2>

                    </div>
                </div> 

                
                <form class="reservation__form" id="reservation__form">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-5">

                            <div class="form-group">
                                <label class="sr-only" for="reservation__name">Full name</label>
                                <input type="text" class="form-control" id="reservation__name" name="reservation__name" placeholder="Full name" />
                                <div class="invalid-feedback"></div>
                            </div>
                            <div class="form-group">
                                <label class="sr-only" for="reservation__phone">Phone number</label>
                                <input type="tel" class="form-control" id="reservation__phone" name="reservation__phone" placeholder="Phone number" />
                                <div class="invalid-feedback"></div>
                            </div>
                            <div class="form-group">
                                <label class="sr-only" for="reservation__email">E-mail address</label>
                                <input type="email" class="form-control" id="reservation__email" name="reservation__email" placeholder="E-mail address" />
                                <div class="invalid-feedback"></div>
                            </div>
                        </div>
                        <div class="col-md-5">

                            <div class="form-group">
                                <label class="sr-only" for="reservation__people">People</label>
                                <select class="form-control" id="reservation__people" name="reservation__people">
                                    <option value="1">1 person</option>
                                    <option value="2" selected="">2 persons</option>
                                    <option value="3">3 persons</option>
                                    <option value="4">4 persons</option>
                                    <option value="5">5 persons</option>
                                </select>
                                <div class="invalid-feedback"></div>
                            </div>
                            <div class="form-group">
                                <label class="sr-only" for="reservation__date">Date</label>
                                <input type="date" class="form-control" id="reservation__date" name="reservation__date" value="2017-12-31" />
                                <div class="invalid-feedback"></div>
                            </div>
                            <div class="form-group">
                                <label class="sr-only" for="reservation__time">Time</label>
                                <input type="time" class="form-control" id="reservation__time" name="reservation__time" value="18:00" />
                                <div class="invalid-feedback"></div>
                            </div>

                        </div>

                        <div class="w-100"></div>

                        <div class="col">

                            <div class="text-center">
                                <button type="submit" class="btn">
                                    Reserve a table
                                </button>
                            </div>

                        </div>
                    </div> 
                </form>
                </div>
                </div>

            </div>
        )
    }
}