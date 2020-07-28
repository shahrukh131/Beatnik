import React from "react";
import Card from "./Card";
import { data } from "./Datas/Data";
const Service = () => {
  return (
    <div>
      <div className="" style={{ marginTop: "40px" }}>
        <div className="row ">
          {data.map((val, ind) => {
            return (
              <div className="col-sm-2 ">
                <Card
                  key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  footer={val.footer}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
