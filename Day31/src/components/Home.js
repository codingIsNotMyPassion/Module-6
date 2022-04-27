import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Teachers</h5>
                            <p class="card-text">CRUD</p>
                            <Link to={"/teachers"} type="button" className="d-none m-2 d-sm-inline-block btn btn-xs btn-primary shadow-sm"> Teachers</Link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Students</h5>
                            <p class="card-text">CRUD</p>
                            <Link to={"/students"} type="button" className="d-none m-2 d-sm-inline-block btn btn-xs btn-primary shadow-sm"> Students</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home