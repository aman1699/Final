import React, { useState } from "react";
import axios from "axios";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const data = [
  {
    name: "short",
    result: "pass",
    id: "one",
  },
  {
    name: "Tall",
    result: "pass",
    id: "two",
  },
  {
    name: "Petite",
    result: "pass",
    id: "three",
  },
  {
    name: "Average Height",
    result: "pass",
    id: "four",
  },
  {
    name: "Gigantic",
    result: "pass",
    id: "five",
  },
  {
    name: "Towering",
    result: "pass",
    id: "six",
  },

];
const data1 = [
  {
    name: "Plump",
    result: "pass",
    id: "seven",
  },
  {
    name: "Stocky",
    result: "pass",
    id: "eight",
  },
  {
    name: "Overweight",
    result: "pass",
    id: "nine",
  },
  {
    name: "Fat",
    result: "pass",
    id: "ten",
  },
  {
    name: "Pudgy",
    result: "pass",
    id: "eleven",
  },
  {
    name: "Medium Build",
    result: "pass",
    id: "tweleve",
  },
  {
    name: "Athletic",
    result: "pass",
    id: "thirteen",
  },
  {
    name: "Slender",
    result: "pass",
    id: "fourteen",
  },
  {
    name: "Lanky",
    result: "pass",
    id: "fifteen",
  },
  {
    name: "Fit",
    result: "pass",
    id: "sixteen",
  },
  {
    name: "Slim",
    result: "pass",
    id: "seveenteen",
  },
  {
    name: "Trim",
    result: "pass",
    id: "eightteen",
  },
  {
    name: "Skinny",
    result: "pass",
    id: "nineteen",
  },
  {
    name: "Buff",
    result: "pass",
    id: "twenty",
  },
  {
    name: "Muscular",
    result: "pass",
    id: "twentyone",
  },
  {
    name: "Ripped",
    result: "pass",
    id: "twentytwo",
  },
  {
    name: "Well built",
    result: "pass",
    id: "twentythree",
  },
];
const data2 = [
  {
    name: "Dark",
    result: "pass",
    id: "twentyfour",
  },
  {
    name: "Light",
    result: "pass",
    id: "twentyfive",
  },
  {
    name: "Fair",
    result: "pass",
    id: "twe",
  },
  {
    name: "Rosy",
    result: "pass",
    id: "twentysix",
  },
  {
    name: "Olive",
    result: "pass",
    id: "twentyseven",
  },
  {
    name: "Pale",
    result: "pass",
    id: "twentyeight",
  },
  {
    name: "Pasty",
    result: "pass",
    id: "twentynine",
  },
  {
    name: "Bronzed",
    result: "pass",
    id: "thirty",
  },
  {
    name: "Tan",
    result: "pass",
    id: "thirtyone",
  },
  {
    name: "Pimply",
    result: "pass",
    id: "thirtytwo",
  },
  {
    name: "Freckles",
    result: "pass",
    id: "thirtythree",
  },
  {
    name: "Spots",
    result: "pass",
    id: "thirtyfour",
  },
  {
    name: "Pimples",
    result: "pass",
    id: "thirtyfive",
  },
];
const data3 = [
  {
    name: "Blond",
    result: "pass",
    id: "thirtysix",
  },
  {
    name: "Fair",
    result: "pass",
    id: "thirtyseven",
  },
  {
    name: "Auburn",
    result: "pass",
    id: "thirtyeight",
  },
  {
    name: "Red",
    result: "pass",
    id: "thirtynine",
  },
  {
    name: "Brown",
    result: "pass",
    id: "fourty",
  },
  {
    name: "Black",
    result: "pass",
    id: "fourtyone",
  },
  {
    name: "Grey",
    result: "pass",
    id: "fourtytwo",
  },
  {
    name: "White",
    result: "pass",
    id: "fourtythree",
  },
  {
    name: "Long",
    result: "pass",
    id: "fourtyfour",
  },
  {
    name: "Puffy",
    result: "pass",
    id: "fourtyfive",
  },
  {
    name: "Matted",
    result: "pass",
    id: "fortysix",
  },
  {
    name: "Short",
    result: "pass",
    id: "fortyseven",
  },
  {
    name: "Curly",
    result: "pass",
    id: "fortyeight",
  },
  {
    name: "Frizzy",
    result: "pass",
    id: "fortynine",
  },
  {
    name: "Wavy",
    result: "pass",
    id: "fifty",
  },
{
    name: "Permed",
    result: "pass",
    id: "fiftyone",
  },
{
    name: "Straight",
    result: "pass",
    id: "fiftytwo",
  },
  {
    name: "Bald",
    result: "pass",
    id: "fiftythree",
  },
  {
    name: "Receding",
    result: "pass",
    id: "fiftyfour",
  },

];
let arr = [];
var ak;

function User() {
  const [Image, setImage] = useState();
  const [Gender, setGender] = useState("");
  const [Adhar, setAdhar] = useState("");
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Contact, setContact] = useState("");
  const [Address, setAddress] = useState("");
  const [Color, setColor] = useState("");
  const [Height, setHeight] = useState("");
  const [Weight, setWeight] = useState("");
  const [isChecked, setIsChecked] = useState([]);
  const [isChecked1, setIsChecked1] = useState([]);
  const [isChecked2, setIsChecked2] = useState([]);
  const [isChecked3, setIsChecked3] = useState([]);

  const handleSingleCheck = (e, value) => {
    if (e.target.checked) {
      setIsChecked([...isChecked, e.target.value]);
    } else {
      setIsChecked(isChecked.filter((id) => id !== e.target.value));
    }
  };
  const handleSingleCheck1 = (e, value) => {
    if (e.target.checked) { 
      setIsChecked1([...isChecked1, e.target.value]);
    } else {
      setIsChecked1(isChecked1.filter((id) => id !== e.target.value));
    }
  };
  const handleSingleCheck2 = (e, value) => {
    if (e.target.checked) { 
      setIsChecked2([...isChecked2, e.target.value]);
    } else {
      setIsChecked2(isChecked2.filter((id) => id !== e.target.value));
    }
  };
  const handleSingleCheck3 = (e, value) => {
    if (e.target.checked) { 
      setIsChecked3([...isChecked3, e.target.value]);
    } else {
      setIsChecked3(isChecked3.filter((id) => id !== e.target.value));
    }
  };


  /*const handleSingleCheck = (e) => {
    
    
    setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
    const item = Object.keys(isChecked).map((key) => {
      if (isChecked[key] === true)
        console.log(key)
    
    });
  };*/
  const base = (e) => {
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = handleReader.bind(this);
      reader.readAsBinaryString(file)
    }
    
  }
  const handleReader = (readerEvt) => {
      let binaryString = readerEvt.target.result;
      setImage(btoa(binaryString));   
  }
  const onDelete = async (e) => {
    e.preventDefault();
    var send = {
      missing_people: [
        {
          mp_id: Adhar,
          mp_name: Name,
          age: Age,
          gender: Gender,
          mp_contact: Contact,
          mp_address: Address,
          mp_physicalAppearance: {
            color_of_clothes: Color,
            height: Height,
            weight: Weight,
            height_characteristics: isChecked,
            body_type: isChecked1,
            complexion: isChecked2,
            hair_charachteristics:isChecked3
          },
          image_matrix:Image
          
        } 
     ]
    }
    
    await axios({
      method: 'post',
      // url: 'https://run.mocky.io/v3/f6d4c266-d2e1-489c-b912-c18cf861dc65'
      // url: 'https://run.mocky.io/v3/04c7d457-fff9-4b18-b2ed-f20c7d6c4cdb'
      url: 'http://13.127.251.198:5000/RegisterUser',
      // url: 'https://run.mocky.io/v3/9b76374f-b035-4d0a-97a9-ad0aa3ed1acb',
      data:send
    }).then(function (res) {
      //handle success
      if (res.status === 200) {
        alert("Registered successfully")
      } 
        
      
    })
    .catch(function (response) {
      //handle error
     alert("Something went wrong")
    });

    //const parseResponse = await axios(parseConfig);
    console.log(Image)
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="10">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Missing Person Report</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={onDelete.bind(this)}>
                  <label>Upload Image</label>
                  <input
                    style={{ marginLeft: 10 }}
                    type="file"
                    label="Upload Image"
                    //onChange={(e) => setImage(e.target.files[0])
                  onChange={(e)=>base(e)}
                  />
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Aadhar No</label>
                        <Form.Control
                          placeholder="xxxx xxxx xxxx"
                          value={Adhar}
                          onChange={(e) => setAdhar(e.target.value)}
                        
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Full Name</label>
                        <Form.Control
                          placeholder="Full Name"
                          type="text"
                          value={Name}
                          onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Age</label>
                        <Form.Control
                          placeholder="Age"
                          type="number"
                          value={Age}
                          onChange={(e) => setAge(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form>
                        <label>Gender</label>
                        {["radio"].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                              inline
                              label="Male"
                              name="group1"
                              type={type}
                              value="male"
                              onChange={(e) => setGender(e.target.value)}
                              id={`inline-${type}-1`}
                            />
                            <Form.Check
                              inline
                              label="Female"
                              name="group1"
                              type={type}
                              value="female"
                              onChange={(e) => setGender(e.target.value)}
                              id={`inline-${type}-2`}
                            />
                          </div>
                        ))}
                      </Form>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Contact</label>
                        <Form.Control
                          placeholder="xxxxxxxxx"
                         
                          value={Contact}
                          onChange={(e) => setContact(e.target.value)}
                          
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          placeholder="Address"
                          value={Address}
                          onChange={(e) => setAddress(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <h2>Physical Appearance</h2>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Color of Clothes</label>
                        <Form.Control
                          placeholder="Color"
                          type="text"
                          value={Color}
                          onChange={(e) => setColor(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Height</label>
                        <Form.Control
                          placeholder="Height"
                          type="text"
                          value={Height}
                          onChange={(e) => setHeight(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Weight</label>
                        <Form.Control
                          placeholder="Weight"
                          type="number"
                          value={Weight}
                          onChange={(e) => setWeight(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <h2>Height Characterstics</h2>
                  <section class="ftco-section">
                    <div class="container">
                      <div class="row">
                        {data.map((test, index) => (
                          <div key={index}>
                            <ul class="ks-cboxtags">
                              <li>
                                <input
                                  type="checkbox"
                                  value={test.name}
                                  id={test.id}
                                  checked={isChecked[test.name]}
                                  onChange={handleSingleCheck}
                                />
                                <label for={test.id}>{test.name}</label>
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  <h2>Body Characterstics</h2>
                  <section class="ftco-section">
                    <div class="container">
                      <div class="row">
                        {data1.map((test, index) => (
                          <div key={index}>
                            <ul class="ks-cboxtags">
                              <li>
                                <input
                                 type="checkbox"
                                 value={test.name}
                                 id={test.id}
                                 checked={isChecked[test.name]}
                                 onChange={handleSingleCheck1}
                                />
                                <label for={test.id}>{test.name}</label>
                              </li>
                         
                            </ul>
                          </div>))}
                      </div>
                      </div>
                  </section>
                  <h2>Complexion</h2>
                  <section class="ftco-section">
                    <div class="container">
                      <div class="row">
                        {data2.map((test, index) => (
                          <div key={index}>
                            <ul class="ks-cboxtags">
                              <li>
                                <input
                                 type="checkbox"
                                 value={test.name}
                                 id={test.id}
                                 checked={isChecked[test.name]}
                                 onChange={handleSingleCheck2}
                                />
                                <label for={test.id}>{test.name}</label>
                              </li>
                         
                            </ul>
                          </div>))}
                      </div>
                      </div>
                  </section>
                  <h2>Hair Characterstics</h2>
                  <section class="ftco-section">
                    <div class="container">
                      <div class="row">
                        {data3.map((test, index) => (
                          <div key={index}>
                            <ul class="ks-cboxtags">
                              <li>
                                <input
                                 type="checkbox"
                                 value={test.name}
                                 id={test.id}
                                 checked={isChecked[test.name]}
                                 onChange={handleSingleCheck3}
                                />
                                <label for={test.id}>{test.name}</label>
                              </li>
                         
                            </ul>
                          </div>))}
                      </div>
                      </div>
                  </section>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          {/*<Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                      .default
                  }
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg").default}
                    ></img>
                    <h5 className="title">Mike Andrew</h5>
                  </a>
                  <p className="description">michael24</p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
                </Col>*/}
        </Row>
      </Container>
    </>
  );
}

export default User;
