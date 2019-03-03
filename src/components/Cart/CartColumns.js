import React from 'react'

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
            <div className="col-10 xm-auto col-lg-2">
                <p className="text-uppercase">
                    products
                </p>
            </div>

            <div className="col-10 xm-auto col-lg-2">
                <p className="text-uppercase">
                    NAME OF PRODUCS
                </p>
            </div>

            <div className="col-10 xm-auto col-lg-2">
                <p className="text-uppercase">
                    prICE
                </p>
            </div>

            <div className="col-10 xm-auto col-lg-2">
                <p className="text-uppercase">
                    QUANTITY
                </p>
            </div>

            <div className="col-10 xm-auto col-lg-2">
                <p className="text-uppercase">
                    remove
                </p>
            </div>

            <div className="col-10 xm-auto col-lg-2">
                <p className="text-uppercase">
                    total
                </p>
            </div>

        </div>
    </div>
  );
}
