// import React from 'react';
// function Form() {
//   const Movies = [
//     { id: 1, name: 'Reservoir Dogs' },
//     { id: 2, name: 'Airplane' },
//     { id: 3, name: 'Doctor Zhivago' },
//     { id: 4, name: 'Memento' },
//     { id: 5, name: 'Braveheart' },
//     { id: 6, name: 'Beauty and the Beast' },
//     { id: 7, name: 'Seven' },
//     { id: 8, name: 'The Seven Samurai' }
//   ];
//   return (
//     <ul>
//       {Movies.map(data => (
//         <li key={data.id}> {data.name}</li>
//       ))}
//     </ul>
//   );
// }
// export default Form;
import React from "react";
import Slider from "react-slick";

const Form = () =>  {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
      <img src='https://myexam.allen.ac.in/wp-content/uploads/2022/09/ALLEN-NEET-UG-2022-AIR-1_01.jpg' style={{ width: '300px',height: '300px' }} ></img>
      </div>
      <div>
      <img src='https://myexam.allen.ac.in/wp-content/uploads/2022/09/ALLEN-NEET-UG-2022-AIR-1_01.jpg' style={{ width: '300px',height: '300px' }} ></img>
      </div>
      <div>
      <img src='https://myexam.allen.ac.in/wp-content/uploads/2022/09/ALLEN-NEET-UG-2022-AIR-1_01.jpg' style={{ width: '300px',height: '300px' }} ></img>
      </div>
      <div>
      <img src='https://myexam.allen.ac.in/wp-content/uploads/2022/09/ALLEN-NEET-UG-2022-AIR-1_01.jpg' style={{ width: '300px',height: '300px' }} ></img>
      </div>
      <div>
      <img src='https://myexam.allen.ac.in/wp-content/uploads/2022/09/ALLEN-NEET-UG-2022-AIR-1_01.jpg' style={{ width: '300px',height: '300px' }} ></img>
      </div>
      <div>
      <img src='https://myexam.allen.ac.in/wp-content/uploads/2022/09/ALLEN-NEET-UG-2022-AIR-1_01.jpg' style={{ width: '300px',height: '300px' }} ></img>
      </div>
    </Slider>
  );
}
export default Form;