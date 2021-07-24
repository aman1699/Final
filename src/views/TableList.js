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
  Modal
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


function User(props) {
  const [Image, setImage] = useState();
  const [Gender, setGender] = useState("");
  const [Adhar, setAdhar] = useState("");
  const [Name, setName] = useState("");
  const [RName, setRName] = useState("");
  
  const [Contact, setContact] = useState("");
  const [Address, setAddress] = useState("");
  const [Color, setColor] = useState("");
  const [Height, setHeight] = useState("");
  const [Weight, setWeight] = useState("");
  const [isChecked, setIsChecked] = useState([]);
  const [isChecked1, setIsChecked1] = useState([]);
  const [isChecked2, setIsChecked2] = useState([]);
  const [isChecked3, setIsChecked3] = useState([]);
  const [show, setShow] = useState(false);
  const [Pic ,setPic] = useState("");
  const [cont, setcont] = useState("");
  const [age, setAge] = useState("");
  const [im,setIm]=useState("")
  
  
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
  const handleClose = () => setShow(false);
  const onDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://13.127.251.198:5000/FindUser", {
        image_matrix:Image
      })
      if (res.status === 200) {
      //  console.log(res.config.data);
         setPic( res.data[0].mp_name);
        setcont(res.data[0].mp_contact);
        setAge(res.data[0].age);
        setAddress(res.data[0].mp_address)
        setIm('data:image/*;charset=utf-8;base64,' + res.data[0].base64)
        setColor(res.data[0].mp_physicalAppearance.color_of_clothes)
        setShow(true)
        
      }
     
      
    } catch (err) {
      alert("No match found")
    }
    
    
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="10">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Found Person Report</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={onDelete.bind(this)}>
                  <label>Upload Image</label>
                  <input style={{marginLeft:10}} type="file" label="Upload Image" onChange={(e)=>base(e)}/>
                  <Row style={{marginTop:10}}>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Reporter Name</label>
                        <Form.Control
                          placeholder="Full Name"
                          type="text"
                          value={RName}
                          onChange={(e)=>setRName(e.target.value)}
                          
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Contact</label>
                        <Form.Control
                          placeholder="xxxxxxxxxx"
                          value={Contact}
                          onChange={(e)=>setContact(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    
                  </Row>
                  
                  <h2>Physical Appearance</h2>
                  <Row>
                  <Col className="pr-1" md="4">
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
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Missing Person Name</label>
                        <Form.Control
                          placeholder="Full Name"
                          type="text"
                          value={Name}
                          onChange={(e)=>setName(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Color of Clothes</label>
                        <Form.Control
                          placeholder="Color"
                          type="text"
                          value={Color}
                          onChange={(e)=>setColor(e.target.value)}
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
          <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Details Matched</Modal.Title>
        </Modal.Header>
            <Modal.Body>
              
              <img style={{height:"300px",margin:"auto",marginLeft:"50px"}} src={im} /><br></br>
              Person Name:  {Pic} <br></br>
              Contact:  {cont} <br></br>
              Age : {age} <br></br>
              Address: {Address}<br></br>
              Color of Cloth:{Color}
      </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
         
        </Modal.Footer>
      </Modal>
        </Row>
      </Container>
      </>
  );
}

export default User;
