import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { history } from "../../../history";
import { Route } from "react-router-dom";
import "../../../assets/scss/pages/app-ecommerce-shop.scss";
import "../../../assets/scss/pages/users.scss";
import axiosConfig from "../../../axiosConfig";

class ViewAstrologer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    console.log("first", id);
    axiosConfig
      .get(`/admin/getoneAstro/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Row>
            <Col sm="12">
              <div>
                <Breadcrumb listTag="div">
                  <BreadcrumbItem href="/analyticsDashboard" tag="a">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem href="/app/userride/userRideList" tag="a">
                    User List
                  </BreadcrumbItem>
                  <BreadcrumbItem active>View User</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
          <Card className="overflow-hidden app-ecommerce-details">
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  View Astrologer
                </h1>
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

            <CardBody className="pb-0">
              <Row className="ml-4">
                <Col sm="9" md="12" lg="12">
                  <div className="users-page-view-table">
                    {/* <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                    Customer Id
                    </div>
                    <div className="text-truncate">
                      <span>{this.state.data.customerId}</span>
                    </div>
                  </div> */}
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Name
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.fullname}</span>
                      </div>
                    </div>

                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Email
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.email}</span>
                      </div>
                    </div>
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Mobile
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.mobile}</span>
                      </div>
                    </div>
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Status
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.status}</span>
                      </div>
                    </div>
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        All Skills
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.all_skills}</span>
                      </div>
                    </div>
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Primary Skills
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.primary_skills}</span>
                      </div>
                    </div>
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Call Charge
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.callCharge}</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewAstrologer;
