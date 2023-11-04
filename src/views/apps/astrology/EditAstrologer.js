import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";

import swal from "sweetalert";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

export default class EditAstrologer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      approvedstatus: "",
      status: "",
      fullname: "",
    };
  }
  changeHandler1 = (e) => {
    this.setState({ approvedstatus: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/getoneAstro/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          data: response.data.data,
          fullname: response.data.data.fullname,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/user/status_change/${id}`, this.state)
      .then(() => {
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/app/astrology/astrologerList`);
      })
      .catch((error) => {
        console.log(error.response);
      });

    axiosConfig
      .post(`/admin/updteApprovedsts/${id}`, this.state)
      .then((response) => {
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/app/astrology/astrologerList`);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Astrologer"
          breadCrumbParent="Home"
          breadCrumbActive=" Edit Astrologer "
        />
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/" tag="a">
                  Home
                </BreadcrumbItem>

                <BreadcrumbItem active>Edit Astrologer</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 className="float-left">Edit Astrologer</h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/astrology/astrologerList")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <h5 className="py-2">
                Note :Change Both Status for Approvel and Online & Offline
              </h5>
              <Row>
                <Col lg="2" md="2" sm="12" className="mb-2">
                  <Label className="mb-1">Full Name</Label>
                  <Input
                    style={{ marginRight: "3px" }}
                    type="text"
                    name="fullname"
                    disabled
                    value={this.state.fullname}
                  />
                </Col>
                <Col lg="5" md="5" sm="12" className="mb-2">
                  <Label className="mb-1">Approvel Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler1(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="approvedstatus"
                      value="true"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="approvedstatus"
                      value="false"
                    />
                    <span style={{ marginRight: "3px" }}>Inactive</span>
                  </div>
                </Col>
                <Col lg="5" md="5" sm="12" className="mb-2">
                  <Label className="mb-1">Live of Astrologer Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Online"
                    />
                    <span style={{ marginRight: "20px" }}>Online</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Offline"
                    />
                    <span style={{ marginRight: "3px" }}>Offline</span>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col
                  lg="6"
                  md="6"
                  sm="6"
                  className="mb-2"
                  style={{ marginLeft: "15px" }}
                >
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
