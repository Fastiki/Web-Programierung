import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';
import React, { isValidElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { useForm } from "react-hook-form";

function Profile() {


    function birdPost(data) {
        fetch("https://8080-simonklausludwig-base-ycdw0o9z9yb.ws-eu81.gitpod.io/api/birdpost?content=" + data.post,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
            })
            .then(function (res) { window.location.reload() })
            .catch(function (res) { console.log(res) });

    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = birdPost

    return (
        <div class="container">
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="test.html">Feed</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div class="card">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Username</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

            <h3 class="text-start">Posts:</h3>

            <div id='Cardcontainer' class="container">
                <div class="card">
                    <img class="card-img-top" src="..." alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" class="btn btn-light">????</a>
                    </div>
                </div>

                <div class="card">
                    <img class="card-img-top" src="..." alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" class="btn btn-light">????</a>
                    </div>
                </div>


            </div>
            <button id="post" type="button" class="btn btn-primary btn-lg"
                onclick="location.href='https://5500-simonklausludwig-base-qamkaqmyjiu.ws-eu80.gitpod.io/src/bootstrap/post.html'">Posten</button>
        </div>
    );
}

export default Profile;