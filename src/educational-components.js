import React, { useRef, useState } from "react";

// ต้องใช้ url นำหน้าที่อยู่รูปเพื่อให้รูปแสดงผล
let url = "https://Niruthub.github.io/react-profile-nirut";

export default function Educational() {
  const select = useRef();
  const [index, setIndex] = useState(0);
  const data = [
    ["ม.1 - ม.3", "โรงเรียน นารีนุกูล", "/img/school/1034711096.jpg"],
    [
      "ปวช.",
      "วิทยาลัยเทคนิคอุบลราชธานี",
      "/img/school/01013_1809190994117.png",
    ],
    [
      "ปริญญาตรี",
      "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
      "/img/school/Seal_of_KMUTNB.png",
    ],
  ];

  const onClickButton = (value) => {
    switch (value) {
      case "มัธยม":
        setIndex(0);
        break;
      case "ปวช.":
        setIndex(1);
        break;
      case "ปริญญาตรี":
        setIndex(2);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container my-5 card text-start bg-body-secondary">
      <h2 className="mt-3 fw-bold">ประวัติการศึกษา</h2>
      <hr />
      <div className="d-flex">
        <button
          type="button"
          className="btn btn-success mx-2"
          onClick={() => onClickButton("มัธยม")}
        >
          มัธยม
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={() => onClickButton("ปวช.")}
        >
          ปวช.
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-2"
          onClick={() => onClickButton("ปริญญาตรี")}
        >
          ปริญญาตรี
        </button>
      </div>

      <div className="my-2 p-5">
        <table className="table text-center table-bordered  bg-info-subtle">
          <thead className="table-dark">
            <tr>
              <th scope="col">ระดับ</th>
              <th scope="col">สถานที่</th>
              <th scope="col">รูป</th>
            </tr>
          </thead>
          <tbody className=" text-center">
            <tr>
              <td className="text-center align-middle">{data[index][0]}</td>
              <td className="text-center align-middle">{data[index][1]}</td>
              <td className="m-auto">
                <img
                  src={url + data[index][2]} // แก้ไขการอ้างอิงรูปภาพตามข้อมูลใน data
                  width="80"
                  className="rounded"
                  alt="..."
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
