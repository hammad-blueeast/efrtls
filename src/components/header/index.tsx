import React from 'react';
import './../../App.css';

function Header({click}:any) {
  const [select, setSelect] = React.useState(1)
  return (
    <div className="row gx-4 gx-lg-5 margin-top-l">
                <div className="col-md-2 mb-5">
                    
                </div>
                <div className="col-md-8 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title center">Filter Result</h2>
                            <hr />
                            <div className="row">
                                <div className="col-md-4 center">
                                    <button onClick={() =>{
                                        click(1)
                                        setSelect(1)
                                    }}
                                     className={select == 1 ? "btn btn-primary btn-sm" : "btn btn-light btn-sm background-g"}>Show All</button>
                                </div>
                                <div className="col-md-4 center">
                                <button onClick={() =>{
                                        click(2)
                                        setSelect(2)
                                    }} 
                                    className={select == 2 ? "btn btn-primary btn-sm" : "btn btn-light btn-sm background-g"}>
                                        Favorite</button>
                                </div>
                                <div className="col-md-4 center">
                                <button onClick={() =>{
                                        click(3)
                                        setSelect(3)
                                    }}  className={select == 3 ? "btn btn-primary btn-sm" : "btn btn-light btn-sm background-g"}>
                                        Games today</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
  );
}

export default Header;
